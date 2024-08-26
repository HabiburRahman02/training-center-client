

const ShowReviewCard = ({ review, handleDelete, handleConfirm }) => {
    const { _id, name, email, price, rating, imgUrl, status } = review;

    return (
        <div className="card mb-3 card-side bg-base-100 shadow-xl p-4">
            <figure className="w-1/2"><img className=" w-full h-full rounded-xl" src={imgUrl} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
                <p>Email: {email}</p>
                <div className="card-actions justify-end">
                    <div className="flex items-center ">
                        {status ? <span className="text-purple-500 font-semibold">Confirmed</span> :
                            <button onClick={() => handleConfirm(_id)} className="btn btn-primary ">Confirm</button>
                        }
                        <button onClick={() => handleDelete(_id)} className="btn btn-info ml-4 ">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowReviewCard;