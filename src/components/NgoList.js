import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import APIs from "../apis/APIs";

function NgopanyList(){
    const navigate = useNavigate();
  const [ngoList, setNgoList] = useState([]);

  useEffect(() => {
    loadNgo();
  }, []);

  const loadNgo = async () => {
    try {
      const response = await axios.get(APIs.Get_Ngo_List);
      setNgoList(response.data.Message);
    } catch (err) {
      console.error(err);
    }
  };

  function viewDetail(ngoObj){
    // console.log(ngoObj._id);
    navigate(`/ngoDetail/${ngoObj._id}`);
    
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
          <h1>NGOs</h1>
         
        </div>

        <div className="row g-4">
          {ngoList.map((ngo, index) => (
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

                    <button className="btn btn-outline-primary" onClick={()=>{viewDetail(ngo)}}>View Detail</button>


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

export default NgopanyList;



//for refrence
{/* <div className="row g-4">
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
        <div className="team-item position-relative rounded overflow-hidden">
            <div className="overflow-hidden"><img className="img-fluid" src="../Image/photo15.jpg" alt="website template image" /></div>
            <div className="team-text bg-light text-center p-4">
                <h5>NGO</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center"><a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-square" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-square" href="#"><i className="fab fa-instagram"></i></a></div>
            </div>
        </div>
    </div>
</div> */}

