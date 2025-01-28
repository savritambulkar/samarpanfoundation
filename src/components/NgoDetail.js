import { useParams , useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import APIs from "../apis/APIs";
import axios from "axios";

function NgoDetail() {
    const navigate = useNavigate();
    const obj = useSelector((store) => store.user);
    const { _id } = useParams();
    const [ngoObj, setNgoObj] = useState({});

    // console.log("Company Id - "+companyId);




    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {
            const response = await axios.get(APIs.Ngo_By_Id + _id);
            // console.log(response.data.message);

            setNgoObj(response.data.message);

        } catch (err) {
            console.error(err);
        }
    }

    // console.log(ngoObj);

    const createCollab = async () => {
        const userInput = window.prompt('Please enter Collab name:');

        // Using the input
        if (userInput) {
            const collabObj = {
                NGOId : _id,
                companyId : obj.user._id,
                collabName : userInput,
            }

            const response = await axios.post(APIs.Create_Collab_Request,collabObj);
            window.alert("Collab Created!");
            navigate("/");
            
        } else {
            // console.log('User did not enter anything.');
            alert('User did not enter anything.');
            navigate("/ngoDetail/"+_id);
        }
        // window.alert(_id);
    }




    return <>
        <h1>NGO Detail Page</h1>
        <div className="contaner d-flex justify-content-center align-items-center p-5">
            <div className="card bg-light p-2 " style={{ height: "50vh", width: "50vh" }}>
                <img src={ngoObj.ProfilePic} style={{ height: "30vh" }} />
                <div className="d-flex flex-column align-items-center mt-3">
                    <h2>{ngoObj.NGOName}</h2>
                </div>
                <h6>E-Mail : {ngoObj.email}</h6>

                <button className="btn btn-primary" onClick={createCollab}>New Collab Request</button>

            </div>
        </div>




    </>
}

export default NgoDetail;