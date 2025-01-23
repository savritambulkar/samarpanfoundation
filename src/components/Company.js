import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import APIs from "../apis/APIs";

const Aboutcompany = () => {
  const {isLoggedIn , type} = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [comList, setComList] = useState([]);
  const fourItems = comList.slice(0,4);
  // console.log(fourItems);
  

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

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            maxWidth: "600px",
            visibility: "visible",
            // animationDelay: "0.1s",
            // animationName: "fadeInUp",
          }}
        >
          <h1>Associate Company</h1>
          {(isLoggedIn)&& type == "Ngo" && <button
            className="btn btn-outline-primary d-inline-block border rounded-pill py-1 px-4"
            onClick={() => {
              navigate("CompanyList");
            }}
          >
            View All
          </button>}
        </div>

        <div className="row g-4">
          {fourItems.map((com, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-3 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                // visibility: "visible",
                // animationDelay: "0.1s",
                // animationName: "fadeInUp",
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
                  {/* <p className="text-primary">{com.companyRegId}</p> */}
                  Description
                  <div className="team-social text-center d-flex justify-content-left align-items-center">
                    {/* <a className="btn btn-square" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-instagram"></i> 
                    </a>*/}

                      {com.companyDesc && <p>{com.companyDesc}</p>}
                      {!com.companyDesc && <p>No Description Available</p>}

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutcompany;
