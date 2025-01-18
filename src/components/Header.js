import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux"; 
import store from "../redux-config/store";
// import Slide from "./Slide";
// import Event from "./Events";
// import About from "../components/About";
// import Company from "../components/Company";
// import Service from "../components/Company";
// import Contact from "../components/Contactform";


function Header(){
   
    return <>
<div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"}}>
  <div className="row gx-0 d-none d-lg-flex">
    <div className="col-lg-7 px-5 text-start">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4"><small className="fa fa-map-marker-alt text-primary me-2"></small> <small>Indore M.P</small></div>
      <div className="h-100 d-inline-flex align-items-center py-3"><small className="fa fa-envelope text-primary me-2"></small>infoSamarpan@gmail.com</div>
    </div>
    <div className="col-lg-5 px-5 text-end">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4"><small className="fa fa-phone-alt text-primary me-2"></small> <small>+012 345 6789</small></div>
      <div className="h-100 d-inline-flex align-items-center"><Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1"><i className="fab fa-facebook-f"></i></Link> <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" ><i className="fab fa-twitter"></i></Link> <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1"><i className="fab fa-linkedin-in"></i></Link> <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-0"><i className="fab fa-instagram"></i></Link></div>
    </div>
  </div>
</div>

      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay:"0.1s" ,animationname: "fadeIn" , top: "-100px"}}><Link to="/Header" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
  <h1 className="m-0 text-primary"><i className="fa-solid fa-hands-holding-child   "></i>     Samarpan</h1>
  </Link>
  <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0"><Link to="/" className="nav-item nav-link">Home</Link> <Link to="/About" className="nav-item nav-link">About</Link> <Link to="/Service" className="nav-item nav-link">Service</Link>
    <Link to="/Contact" className="nav-item nav-link">Contact</Link>
      <div className="nav-item dropdown"><Link to="/Service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Get Involve</Link>
        <div className="dropdown-menu rounded-0 rounded-bottom m-0"><Link  className="dropdown-item" to={"RegisterVol"}>Volunteer Ragistration</Link> <Link  className="dropdown-item" to={"RegisterNgo"}>NGO Ragistration</Link> <Link  className="dropdown-item" to={"RegisterCom"}>Company Ragistration</Link> </div>
      </div>
      <Link to="/Login" className="nav-item nav-link">LogIn</Link>
      </div>
    <Link  className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">DONATE<i className="fa fa-arrow-right ms-3"></i></Link></div>
</nav>


    </>
}

export default Header ;