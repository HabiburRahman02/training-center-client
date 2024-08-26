import { useContext } from "react";
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Review = () => {
  const { user } = useContext(AuthContext)
  const service = useLoaderData()
  const { service_name, price, rating, image } = service;


  const handleConfirmReview = e => {
    e.preventDefault()
    const form = e.target;

    const name = form.name.value;
    const price = form.price.value;
    const email = user?.email
    const rating = form.rating.value
    const imgUrl = form.imgUrl.value
    console.log(name, price, rating, email, imgUrl)
    const myReview = {
      name,
      price,
      rating,
      email,
      imgUrl
    }
    fetch(`http://localhost:5000/review`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(myReview)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Review success",
            showConfirmButton: true,
            timer: 2500
          });
        }
      })
  }
  return (
    <div className="md:w-2/3 mx-auto px-6">
      <form onSubmit={handleConfirmReview}>
        <input defaultValue={service_name} name="name" className="border p-4 w-full mb-4 rounded-md" type="text" required />
        <input defaultValue={"$" + price} name="price" className="border p-4 w-full mb-4 rounded-md" type="text" required />
        <input defaultValue={user?.email} name="email" className="border p-4 w-full mb-4 rounded-md" type="email" required />
        <input defaultValue={rating} name="rating" className="border p-4 w-full mb-4 rounded-md" type="text" required />
        <input defaultValue={image} name="imgUrl" className="border p-4 w-full mb-4 rounded-md" type="text" required />

        <input type="submit" className=" bg-sky-400 hover:bg-sky-500 mb-4  py-4 rounded-md w-full text-white" value="Confirm review" />
      </form>
    </div>
  );
};

export default Review;