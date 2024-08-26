/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, service_name, image, price, description } = service
    return (
        <div className="shadow-xl rounded-md">
            <PhotoProvider>
                <PhotoView src={image}>
                    <img className="cursor-pointer" src={image} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <div className="flex justify-between items-center text-xl  text-pink-400">
                    <p className="">Price: ${price}</p>
                    <div className="flex">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </div>
                </div>
                <h2 className="card-title">{service_name}</h2>
                <div className="text-justify">
                    <span>
                        {
                            description.slice(0, 100)

                        }
                        ....
                    </span>
                    {/* <Link to={`/viewDetails/${_id}`} className="ml-2 text-red-500">View Details</Link> */}
                </div>
                <Link to={`/review/${_id}`}>
                    <button className=" bg-sky-400 hover:bg-sky-500 py-2 w-full  text-white">Review</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;