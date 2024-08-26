import { useEffect, useState } from "react";
import Feature from "./Feature";


const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/features`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFeatures(data)
            })
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-12 bg-sky-500 text-white mb-6">
            {
                features.map(feature => <Feature
                    key={feature._id}
                    feature={feature}
                ></Feature>)
            }
        </div>
    );
};

export default Features;