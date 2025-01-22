import { useNavigate } from "react-router-dom";

function Ngo(){

  const navigate = useNavigate();


  return <>
    <div className="container-xxl py-5">
<div className="container">
  <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px", visibility:"visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
    <h1>Associate NGOs</h1>
    <button className="btn btn-outline-primary d-inline-block border rounded-pill py-1 px-4 " onClick={()=>{navigate("NgoList")}}>View All</button>
  </div>
  <div className="row g-4">
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
      <div className="team-item position-relative rounded overflow-hidden">
        <div className="overflow-hidden"><img className="img-fluid" src="../Image/photo15.jpg" alt="website template image"/></div>
        <div className="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p className="text-primary">Department</p>
          <div className="team-social text-center"><a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-square" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-square" href="#"><i className="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible",animationDelay:"0.3s", animationName: "fadeInUp"}}>
      <div className="team-item position-relative rounded overflow-hidden">
        <div className="overflow-hidden"><img className="img-fluid" src="../Image/event-2.jpg" alt="website template image"/></div>
        <div className="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p className="text-primary">Department</p>
          <div className="team-social text-center"><a className="btn btn-square" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-twitter"></i></a> <a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp"}}>
      <div className="team-item position-relative rounded overflow-hidden">
        <div className="overflow-hidden"><img className="img-fluid" src="../Image/event-1.jpg" alt="website template image"/></div>
        <div className="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p className="text-primary">Department</p>
          <div className="team-social text-center"><a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-twitter"></i></a> <a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "fadeInUp"}}>
      <div className="team-item position-relative rounded overflow-hidden">
        <div className="overflow-hidden"><img className="img-fluid" src="../Image/event-2.jpg" alt="website template image"/></div>
        <div className="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p className="text-primary">Department</p>
          <div className="team-social text-center"><a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-twitter"></i></a> <a className="btn btn-square" href="https://www.free-css.com/free-css-templates"><i className="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  </>
}
export default Ngo;