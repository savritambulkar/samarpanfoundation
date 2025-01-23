import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import APIs from "../apis/APIs";
import axios from "axios";

function CompanyDetail() {
    const { _id } = useParams();
    const [comObj, setComObj] = useState({});



    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {
            const response = await axios.get(APIs.Com_By_Id + _id);
            // console.log(response.data.message);

            setComObj(response.data.message);

        } catch (err) {
            console.error(err);
        }
    }

    // console.log(comObj);




    return <>
        <h1>Company Detail Page</h1>
        <div className="contaner d-flex justify-content-center align-items-center p-5">
            <div className="card bg-light p-2 " style={{height:"50vh",width:"50vh"}}>
                <img src={comObj.ProfilePic} style={{height:"30vh"}}/>
                <div className="d-flex flex-column align-items-center mt-3">
                <h2>{comObj.companyName}</h2>
                </div>
                <h6>E-Mail : {comObj.email}</h6>
                <h6>Reg ID : {comObj.companyRegId}</h6>
                
            </div>
        </div>




    </>
}

export default CompanyDetail;