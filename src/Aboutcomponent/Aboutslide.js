import React from "react";
import { Link } from "react-router-dom";
import "../css/Aboutslide.css"; // Add custom styles here

function Aboutslide() {
  return (
    <>
      {/* Header Section */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          backgroundImage: "url(../Image/photo21.jpg)",
          backgroundSize: "cover",
          object:"fit",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              {/* <li className="breadcrumb-item">
                <Link to="/Pages" className="text-white">
                  Pages
                </Link>
              </li> */}
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Images Section */}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end mb-4"
                  src="../Image/cause-6.jpg"
                  alt="Our Mission"
                />
                <img
                  className="img-fluid rounded w-100 bg-white pt-3 pe-5"
                  src="../Image/img_4.jpg"
                  alt="Our Services"
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>

            {/* Text Section */}
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ animationDelay: "0.5s" }}
            >
              {/* <p className="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p> */}
              <h1 className="mb-4">
                Why You Should Trust Us? 
              </h1>
              <p>
              Our mission is to connect those who need help with those who can provide it. By fostering collaboration between NGOs, companies, and volunteers, we are building a network of support and creating meaningful impact.
              </p>
              <p className="mb-4">"We are a purpose-driven platform dedicated to building a bridge between those who want to make a difference and those who need support. Our goal is to empower NGOs by connecting them with the resources, funding, and partnerships they require to amplify their impact. At the same time, we provide companies with meaningful opportunities to fulfill their social responsibility goals and volunteers with a chance to actively contribute to causes they believe in. By fostering collaboration, transparency, and shared purpose, we are working to create a global network of support that drives positive change in communities worldwide."
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="far fa-check-circle text-primary me-3"></i>
                  Empowering NGOs
                </li>
                <li className="mb-2">
                  <i className="far fa-check-circle text-primary me-3"></i>
                  Engaging Companies
                </li>
                {/* <li>
                  <i className="far fa-check-circle text-primary me-3"></i>
                  
                </li> */}
              </ul>
              <Link
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                to="/About"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="p-lg-5 ps-lg-0">
                {/* <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  Features
                </p> */}
                <h1 className="text-white mb-4">Why Partner With Us?</h1>
                <p className="text-white mb-4 pb-2">
                We bring people together to make the world a better place. By connecting NGOs, companies, and volunteers, we create opportunities for impactful collaborations.
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i className="fa fa-user-md text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Experience</p>
                        <h5 className="text-white mb-0">Volunteer</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i className="fa fa-check text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Quality</p>
                        <h5 className="text-white mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i className="fa fa-comment-medical text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Positive</p>
                        <h5 className="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i className="fa fa-headphones text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">24 Hours</p>
                        <h5 className="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px", animationDelay: "0.5s" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-150 h-150"
                  src="../Image/photo15.jpg"
                  style={{ objectFit: "cover" , height:"550" }}
                  alt="Why Choose Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutslide;
