import { useEffect, useState } from "react";
import ServiceSlide from "../service/Serviceslide";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import APIs from "../apis/APIs";

function CompanyCollab() {

    const navigate = useNavigate();

    const [comCollab, setComCollab] = useState();

    const obj = useSelector((store) => store.user);
    // console.log(obj.user._id);


    useEffect(() => {
        loadData();
    }, [comCollab]);


    const loadData = async () => {

        try {
            const response = await axios.get(APIs.Collab_By_Com_Id + obj.user._id);
            // console.log(response.data);

            setComCollab(response.data.collaborations);


        } catch (err) {
            console.error(err);
        }
    }

    // console.log(comCollab);

    const markCompleted = async(_id)=>{
        // window.alert("Working Fine  "+ _id)//Collab_Mark_As_Done
        const response = await axios.post(APIs.Collab_Mark_As_Done , {CollabId:_id});
        window.alert(response.data.message);
        navigate("/CompanyCollaborations");
    }
    



    return <>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn", backgroundImage: 'url(../Image/photo13.jpg)', backgroundSize: "cover", backgroundPosition: "center", height: "400px" }}>
            <div className="container py-5">
                <h1 className="display-3 text-white mb-3 animated slideInDown">Collaborations</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb text-uppercase mb-0">
                        <li className="breadcrumb-item"><Link to="/" className="text-white" >Home</Link></li>
                        {/* <li className="breadcrumb-item"><Link to="Pages" className="text-white">Pages</Link></li> */}
                        <li className="breadcrumb-item text-primary active" aria-current="page">Collaborations</li>
                    </ol>
                </nav>
            </div>
        </div>
        <h1>Company Collaborations</h1>

        <div className="container-panel d-flex ml-3 p-2 row">
            {comCollab?.map((service, index) => (
                <div
                    className="col-lg-3 col-md-4 wow fadeInUp ml-3 mt-3"
                    data-wow-delay={`${0.1 + index * 0.2}s`}
                    key={service.collabName}
                    style={{
                        visibility: "visible",
                        animationDelay: `${0.1 + index * 0.2}s`,
                        animationName: "slideInBottom",
                    }}
                >
                    <div className="service-item bg-light rounded h-100 p-5 shadow">

                        <h4 className="mb-3 text-secondary">{service.collabName}</h4>
                        <p className="mb-4">{service.Status}</p>
                        {service.Status == "pending" && <button className="btn btn-outline-primary" >
                        <i class="fa fa-hourglass-half text-outline-primary me-3"></i>
                        Pending
                        </button>}
                        {service.Status == "running" && <button className="btn btn-outline-primary" >
                        <i class="fa fa-tools text-primary me-3"></i>
                            In Progress
                        </button>}
                        {service.Status == "completed" && <button  className="btn btn-outline-primary">
                        <i class="fa fa-thumbs-up text-outline-success me-3"></i>
                            Task Done
                        </button>}
                        {service.Status == "submitted" && <button style={{ width: "auto" }} onClick={()=>{markCompleted(service._id)}} className="btn btn-outline-primary">
                            <i class="fa fa-check-circle text-outline-success me-3"></i>
                            Mark Completed
                        </button>} 
                    </div>
                </div>))}
        </div>


    </>
}

export default CompanyCollab;