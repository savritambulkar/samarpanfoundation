import { useNavigate } from "react-router-dom";

function Ngo(){

  const navigate = useNavigate();


  return <>
    <div class="container-xxl py-5">
<div class="container">
  <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px", visibility:"visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
    <h1>Associate NGOs</h1>
    <button class="btn btn-outline-primary d-inline-block border rounded-pill py-1 px-4 " onClick={()=>{navigate("NgoList")}}>View All</button>
  </div>
  <div class="row g-4">
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
      <div class="team-item position-relative rounded overflow-hidden">
        <div class="overflow-hidden"><img class="img-fluid" src="../Image/photo15.jpg" alt="website template image"/></div>
        <div class="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p class="text-primary">Department</p>
          <div class="team-social text-center"><a class="btn btn-square" href="#"><i class="fab fa-facebook-f"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-twitter"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible",animationDelay:"0.3s", animationName: "fadeInUp"}}>
      <div class="team-item position-relative rounded overflow-hidden">
        <div class="overflow-hidden"><img class="img-fluid" src="../Image/event-2.jpg" alt="website template image"/></div>
        <div class="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p class="text-primary">Department</p>
          <div class="team-social text-center"><a class="btn btn-square" href="#"><i class="fab fa-facebook-f"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-twitter"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp"}}>
      <div class="team-item position-relative rounded overflow-hidden">
        <div class="overflow-hidden"><img class="img-fluid" src="../Image/event-1.jpg" alt="website template image"/></div>
        <div class="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p class="text-primary">Department</p>
          <div class="team-social text-center"><a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-facebook-f"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-twitter"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility: "visible", animationDelay: "0.7s", animationName: "fadeInUp"}}>
      <div class="team-item position-relative rounded overflow-hidden">
        <div class="overflow-hidden"><img class="img-fluid" src="../Image/event-2.jpg" alt="website template image"/></div>
        <div class="team-text bg-light text-center p-4">
          <h5>NGO</h5>
          <p class="text-primary">Department</p>
          <div class="team-social text-center"><a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-facebook-f"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-twitter"></i></a> <a class="btn btn-square" href="https://www.free-css.com/free-css-templates"><i class="fab fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  </>
}
export default Ngo;