import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ShowReviewCard from "./ShowReviewCard";
import Swal from "sweetalert2";

const ShowReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    const url = `http://localhost:5000/review?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [url])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete', id)
                fetch(`http://localhost:5000/review/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted success",
                                icon: "success"
                            });
                            const remaining = reviews.filter(rb => rb._id !== id);
                            setReviews(remaining)
                        }
                    })
            }
        });
    }

    const handleConfirm = id => {
        console.log(id)
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Confirm!",
                        text: "Confirm success",
                        icon: "success"
                    });
                    const remaining = reviews.filter(rb => rb._id !== id)
                    const updated = reviews.find(rb => rb._id === id);
                    updated.status = 'confirm'

                    const newUpdates = [updated, ...remaining];
                    setReviews(newUpdates)
                }
            })
    }

    return (
        <div>
            {
                reviews.map(review => <ShowReviewCard
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                    handleConfirm={handleConfirm}
                ></ShowReviewCard>)
            }
        </div>
    );
};

export default ShowReviews;