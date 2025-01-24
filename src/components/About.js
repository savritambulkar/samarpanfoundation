import { Link } from "react-router-dom";

  
  function About(){
    return <>

    
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"}}>
        <div className="d-flex flex-column"><img className="img-fluid rounded w-75 align-self-end" src="../Image/photo05.jpg" alt="website template image"/> <img className="img-fluid rounded w-70 bg-white pt-3 pe-3" src="../Image/photo12.jpg" alt="website template image" style={{marginTop:"-8%"}}/></div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
        {/* <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p> */}
        <h1 className="mb-4">Why You Should Trust Samarpan? Get Know About Us!</h1>
        <p>We believe in creating partnerships that inspire hope and transform lives.</p>
        <p className="mb-4">Samarpan bridges the gap between compassionate companies and dedicated NGOs to drive meaningful change.Here's what makes us stand out: </p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Empowering NGOs</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Trusted Partnerships</p>
        <p><i className="far fa-check-circle text-primary me-3"></i>Streamlined Collaboration</p>
        <Link className="btn btn-primary rounded-pill py-3 px-5 mt-3" to="/About">Read More</Link></div>
    </div>
  </div>
</div>


    </>
  }

  export default About;