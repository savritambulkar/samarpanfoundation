import { Link } from "react-router-dom";
function Serviceslide(){
    return <>
      

    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s"  ,animationName: "fadeIn",backgroundImage:'url(../Image/photo13.jpg)',backgroundSize:"cover", backgroundPosition:"center",height:"400px"}}>
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


<div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay:"0.1s", animationName: "fadeIn"}}>
        <div className="d-flex flex-column"><img className="img-fluid rounded w-75 align-self-end" src="../Image/image_1.jpg" alt="website template image"/> <img className="img-fluid rounded w-70 bg-white pt-3 pe-3" src="../Image/photo09.jpg" alt="website template image" style={{marginTop:"-25%"}}/></div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
        {/* <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p> */}
        <h1 className="mb-4">Working Together for a Greater Good</h1>
        <p>True impact is achieved when diverse strengths come together for a shared purpose. By uniting the expertise of NGOs with the resources and vision of companies, we can create sustainable solutions to address society's most pressing challenges. Together, we amplify our efforts, turning challenges into opportunities and making a meaningful difference where it matters most. Let’s collaborate to build a better, brighter future for all."</p>
        
        <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Empowering NGOs</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Trusted Partnerships</p>
        <Link className="btn btn-primary rounded-pill py-3 px-5 mt-3" to="/About">Read More</Link></div>
    </div>
  </div>
</div>



<div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
  <div class="container feature px-lg-0">
    <div class="row g-0 mx-lg-0">
      <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"}}>
        <div class="p-lg-5 ps-lg-0">
          {/* <p class="d-inline-block border rounded-pill text-light py-1 px-4">Features</p> */}
          <h1 class="text-white mb-4">Together,we create changes</h1>
          <p class="text-white mb-4 pb-2">NGOs are the heart of change, where compassion meets action. By working together, we transform lives, uplift communities, and create lasting impact. Every effort counts, and together we can build a world that thrives on empathy, sustainability, and hope for all.</p>
          <div class="row g-4">
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px" ,height:"55px"}}><i class="fa-solid fa-handshake-simple"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">Misson</p>
                  <h5 class="text-white mb-0">mpactful callobration</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}><i class="fa-solid fa-eye"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">Vision</p>
                  <h5 class="text-white mb-0">Contribution leads to a brighter future</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}><i className="fa-comment-medical"></i></div>
                <div class="ms-4">
                  <p class="text-white mb-2">Impact</p>
                  <h5 class="text-white mb-0">Bridges the gap between needy and Supporters</h5>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex align-items-center">
                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px" ,height:"55px"}}><i class="fa-headphones"></i></div>
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
        <div class="position-relative h-100"><img class="position-absolute img-fluid w-100 h-100" src="../Image/photo04.jpg" style={{objectFit:"cover"}} alt="website template image"/></div>
      </div>
    </div>
  </div>
</div>
    </>
}

export default Serviceslide;