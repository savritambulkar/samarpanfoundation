import APIs from "../apis/APIs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setquery } from "../redux-config/queryslice";
import { useRef } from "react";
import axios from "axios";

function Contactslide(){
   const dispatch=useDispatch();
   const navigate=useNavigate();
   
   const sentdata =async(query)=>{
    try{
      let response = await axios.post(APIs.get_query, query)
      console.log(response)
      console.log(response.data)
      dispatch(setquery(response.data))
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
   }

   const name=useRef();
   const email=useRef();
   const Query=useRef();
   const massage=useRef();

     const queryobj=async(e)=>{
       e.preventDefault()

       const queries={
        name:name.current.value,
        email:email.current.value,
        Query:Query.current.value,
        massage:massage.current.value
       }
       sentdata(queries)
     }

    return <>
       <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible" ,animationDelay: "0.1s", animationName: "fadeIn" ,backgroundImage:'url(../Image/photo14.jpg)',backgroundSize:"cover", backgroundPosition:"center",height:"400px"}}>
  <div className="container py-5">
    <h1 className="display-3 text-white mb-3  slideInDown">Contact Us</h1>
    <nav aria-label="breadcrumb animated slideInDown">
      <ol className="breadcrumb text-uppercase mb-0">
        <li className="breadcrumb-item"><a className="text-white" >Home</a></li>
        {/* <li className="breadcrumb-item"><a className="text-white" >Pages</a></li> */}
        <li className="breadcrumb-item text-primary active" aria-current="page">Contact</li>
      </ol>
    </nav>
  </div>
</div>


<div className="container-panel py-3">
  <div className="container">
    <div className="row g-2">
      <div className="col-lg-4">
        <div className="h-100 bg-light rounded d-flex align-items-center p-4">
          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"60px",height:"70px"}}><i className="fa fa-map-marker-alt text-primary"></i></div>
          <div className="ms-4">
            <p className="mb-2">Address</p>
            <h5 className="mb-0">Madhovastika, Indore, Madhya Pradesh</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="h-100 bg-light rounded d-flex align-items-center p-4">
          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"60px",height:"70px"}}><i className="fa fa-phone-alt text-primary"></i></div>
          <div className="ms-4">
            <p className="mb-2">Call Us Now</p>
            <h5 className="mb-0">9171188434</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="h-100 bg-light rounded d-flex align-items-center p-4">
          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"60px",height:"70px"}}><i className="fa fa-envelope-open text-primary"></i></div>
          <div className="ms-4">
            <p className="mb-2">Mail Us Now</p>
            <h5 className="mb-0">infoSamarpan@gmail.com</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn"}}>
        <div className="bg-light rounded p-5">
          <p className="d-inline-block border rounded-pill py-1 px-4">Contact Us</p>
          <h1 className="mb-4">Have Any Query? Please Contact Us!</h1>
          {/* <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. Download Now.</p> */}
          <form onSubmit={queryobj}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input ref={name} type="text" className="form-control" id="name" placeholder="Your Name" required/>
                  <label for="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input ref={email} type="email" className="form-control" id="email" placeholder="Your Email" required/>
                  <label for="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input ref={Query} type="text" className="form-control" id="subject" placeholder="Query" required/>
                  <label for="Query">Query</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea ref={massage} className="form-control" placeholder="Leave a message here" id="message" style={{height:"100px"}}></textarea>
                  <label for="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
        <div className="h-100" style={{minHeight:"400px"}}>

<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.3491597289244!2d75.84150500925682!3d22.71526007930438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7a637fc527%3A0xa641f102ba5de184!2sMadhavastika%20InfoBeans%20Foundation!5e0!3m2!1sen!2sus!4v1737522959819!5m2!1sen!2sus"
        width="550"
        height="570"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}

export default Contactslide;