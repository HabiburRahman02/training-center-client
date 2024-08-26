import { SiOpenaigym } from "react-icons/si";
const Feature = ({ feature }) => {
    const { name, des, } = feature;
    return (
        <div className=" hover:bg-white hover:text-black p-6">
            <div className="card-body">
                <SiOpenaigym className="text-3xl"></SiOpenaigym>
                <h2 className="card-title">{name}</h2>
                <p>{des}</p>

            </div>
        </div>
    );
};

export default Feature;