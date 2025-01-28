import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import APIs from "../apis/APIs";
import { useSelector } from "react-redux";

function NgoCollab(){
    const navigate = useNavigate();

    const [ngoCollab,setNgoCollab] = useState();

    const obj = useSelector((store) => store.user);
    // console.log(obj.user._id);
    

    useEffect(() => {
        loadData();
    }, [ngoCollab]);

    const loadData = async () => {

        try {
            const response = await axios.get(APIs.Collab_By_Ngo_Id + obj.user._id);
            // console.log(response.data);

            setNgoCollab(response.data.collaborations);
            

        } catch (err) {
            console.error(err);
        }
    }
    // console.log(ngoCollab);

    const acceptRequest = async(_id)=>{
        // window.alert("Working Fine  "+ _id)//Collab_Mark_As_Done
        const response = await axios.post(APIs.Accept_Collab_Request , {NgoId:_id});
        window.alert(response.data.message);
        navigate("/NgoCollaborations");
    }
    const submitWork = async(_id)=>{
        // window.alert("Working Fine  "+ _id)//Collab_Mark_As_Done
        const response = await axios.post(APIs.Submit_Collab_Work , {NgoId:_id});
        window.alert(response.data.message);
        navigate("/NgoCollaborations");
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
        <h1>Ngo Collaborations</h1>

        <div className="container-panel d-flex p-3">
        {ngoCollab?.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp m-2"
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
                  {service.Status == "pending" && <button style={{width:"auto"}} className="btn btn-outline-primary" onClick={()=>{acceptRequest(service._id)}}>
                    <i className="fa fa-plus text-outline-primary me-3"></i>Accept
                  </button>}
                  {service.Status == "running" && <button style={{width:"auto"}}  className="btn btn-outline-primary" onClick={()=>{submitWork(service._id)}}>
                  <i class="fa fa-check text-outline-primary me-3"></i>
                  Submit Work
                  </button>}
                  {service.Status == "submitted" && <button className="btn btn-outline-primary">
                    <i class="fa fa-clock  text-outline-primary me-3"></i>
                  Submitted
                  </button>}
                  {service.Status == "completed" && <button  className="btn btn-outline-primary">
                        <i class="fa fa-thumbs-up text-outline-success me-3"></i>
                            Task Done
                        </button>}
                </div>
              </div>))}
              </div>

    </>
}

export default NgoCollab;

