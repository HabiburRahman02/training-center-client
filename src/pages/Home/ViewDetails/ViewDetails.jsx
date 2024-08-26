import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const {_id} =useParams()
    console.log(_id)
    return (
        <div>
            <h3>View details</h3>
        </div>
    );
};

export default ViewDetails;