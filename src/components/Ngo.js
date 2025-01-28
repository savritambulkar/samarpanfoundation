import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import APIs from "../apis/APIs";

const Ngo = () => {
  const {isLoggedIn , type} = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ngoList, setNgoList] = useState([]);
  const fourItems = ngoList.slice(0,4);
  // console.log(ngoList);
  

  useEffect(() => {
    loadNgo();
  }, []);

  const loadNgo = async () => {
    try {
      const response = await axios.get(APIs.Get_Ngo_List);
      // console.log(response.data);
      
      setNgoList(response.data.Message);
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
          <h1>Associate NGOs</h1>
          {(isLoggedIn)&& type == "Company" && <button
            className="btn btn-outline-primary d-inline-block border rounded-pill py-1 px-4"
            onClick={() => {
              navigate("NgoList");
            }}
          >
            View All
          </button>}
        </div>
        <div className="row g-4">
          {fourItems.map((ngo, index) => (
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
                    src={ngo.ProfilePic}
                    alt={`${ngo.NGOName} profile picture`}
                    style={{
                      height: "100%", // Image takes full height of its container
                      objectFit: "cover", // Ensures proper scaling without distortion
                    }}
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5 className="mt-3">{ngo.NGOName}</h5>
                  {/* <p className="text-primary">{ngo.ngopanyRegId}</p> */}
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
                      {console.log(Ngo.NGOName)}
                      {Ngo.NgoDesc && <p>{Ngo.NgoDesc}</p>}
                      {!Ngo.NgoDesc && <p>No Description Available</p>}

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

export default Ngo;
