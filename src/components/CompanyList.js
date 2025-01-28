import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import APIs from "../apis/APIs";

function CompanyList(){
    const navigate = useNavigate();
  const [comList, setComList] = useState([]);

  useEffect(() => {
    loadCom();
  }, []);

  const loadCom = async () => {
    try {
      const response = await axios.get(APIs.Get_Com_List);
      setComList(response.data.Message);
    } catch (err) {
      console.error(err);
    }
  };

  function viewDetail(comObj){
    // console.log(comObj._id);
    navigate(`/comDetail/${comObj._id}`);
    
  }
  

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: "600px",
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp",
          }}
        >
          <h1>Companies</h1>
         
        </div>

        <div className="row g-4">
          {comList.map((com, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="team-item position-relative rounded overflow-hidden w-100"
                style={{
                  height: "300px", // Set height of the parent container
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "50%", // Half height for the image container
                    overflow: "hidden",
                  }}
                >
                  <img
                    className="img-fluid w-100"
                    src={com.ProfilePic}
                    alt={`${com.companyName} profile picture`}
                    style={{
                      height: "100%", // Image takes full height of its container
                      objectFit: "cover", // Ensures proper scaling without distortion
                    }}
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5 className="mt-3">{com.companyName}</h5>
                 
                  <div className="team-social text-center">
                    {/* <a className="btn btn-square" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-instagram"></i>
                    </a> */}
                    <br/>

                    <button className="btn btn-outline-primary" onClick={()=>{viewDetail(com)}}>View Detail</button>


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default CompanyList;