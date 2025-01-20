import { Link } from "react-router-dom";

function Footer(){
    return <>
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Address</h5>
        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Madhovastika, Indore, Madhya Pradesh</p>
        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>9171188434</p>
        <p className="mb-2"><i className="fa fa-envelope me-3"></i>infoSamarpan@gmail.com</p>
        <div className="d-flex pt-2"><a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-twitter"></i></a> <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-facebook-f"></i></a> <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-youtube"></i></a> <a className="btn btn-outline-light btn-social rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a></div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Register Now</h5>
        <Link className="btn btn-link" to="RegisterNgo">As Ngo</Link> <Link className="btn btn-link" to="RegisterCom">As Company</Link>
        </div>
      <div className="col-lg-3 col-md-6">
        <h5 className="text-light mb-4">Quick Links</h5>
        <Link className="btn btn-link" to={"/About"}>About Us</Link> 
        <Link className="btn btn-link" to={"/Contact"}>Contact Us</Link> 
        <Link className="btn btn-link" to={"/Collaborations"}>Collaborations</Link> 
        {/* <Link className="btn btn-link" to={"/About"}>About Us</Link>  */}
        </div>
      <div className="col-lg-3 col-md-6">
        {/* <h5 className="text-light mb-4">Newsletter</h5>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative mx-auto" style={{maxWidth:"400px"}}>
          <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
          <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button> */}
          <p>
            IF YOU SEE SOMEONE WITHOUT A SMILE, GIVE THEM ONE OF YOURS !
            <h1 className="text-primary">Samarpan Foundation</h1>
            </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      <div className="row">
        

      </div>
    </div>
  </div>

    </>
}

export default Footer;