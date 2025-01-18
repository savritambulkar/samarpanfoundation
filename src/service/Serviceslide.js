import { Link } from "react-router-dom";
function Serviceslide(){
    return <>
      

    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s"  ,animationName: "fadeIn",backgroundImage:'url(../Image/image_3.jpg)',backgroundSize:"cover", backgroundPosition:"center",height:"400px"}}>
  <div className="container py-5">
    <h1 className="display-3 text-white mb-3 animated slideInDown">Service</h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb text-uppercase mb-0">
        <li className="breadcrumb-item"><Link to="/Home" className="text-white" >Home</Link></li>
        <li className="breadcrumb-item"><Link to="Pages" className="text-white">Pages</Link></li>
        <li className="breadcrumb-item text-primary active" aria-current="page">Service</li>
      </ol>
    </nav>
  </div>
</div>




<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay:"0.1s", animationName: "fadeIn"}}>
        <div className="d-flex flex-column"><img className="img-fluid rounded w-75 align-self-end" src="../Image/image_1.jpg" alt="website template image"/> <img className="img-fluid rounded w-70 bg-white pt-3 pe-3" src="../Image/image_1.jpg" alt="website template image" style={{marginTop:"-25%"}}/></div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
        <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
        <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
        <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="https://www.free-css.com/free-css-templates">Read More</a></div>
    </div>
  </div>
</div>



<div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
  <div class="container feature px-lg-0">
    <div class="row g-0 mx-lg-0">
      <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"}}>
        <div class="p-lg-5 ps-lg-0">
          <p class="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
          <h1 class="text-white mb-4">Why Choose Us</h1>
          <p class="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
          <div class="row g-4">
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px" ,height:"55px"}}><i class="fa fa-user-md text-primary"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">Experience</p>
                  <h5 class="text-white mb-0">Doctors</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}><i class="fa fa-check text-primary"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">Quality</p>
                  <h5 class="text-white mb-0">Services</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}><i class="fa fa-comment-medical text-primary"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">Positive</p>
                  <h5 class="text-white mb-0">Consultation</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px" ,height:"55px"}}><i class="fa fa-headphones text-primary"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">24 Hours</p>
                  <h5 class="text-white mb-0">Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: "400px", visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
        <div class="position-relative h-100"><img class="position-absolute img-fluid w-100 h-100" src="assets/img/feature.jpg" style={{objectFit:"cover"}} alt="website template image"/></div>
      </div>
    </div>
  </div>
</div>
    </>
}

export default Serviceslide;