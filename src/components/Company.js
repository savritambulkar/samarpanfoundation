import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Company.css";

function Company() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000,  // Slide transition speed in milliseconds (2 seconds)
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          <p className="d-inline-block border rounded-pill py-1 px-4">Companies</p>
          <h1>Our Experience</h1>
        </div>
        <Slider {...sliderSettings}>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src="../Image/image_3.jpg"
                  alt="Company 1"
                />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Company Name</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for other cards */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img
                  className="img-fluid"
                  src="../Image/photo02.jpg"
                  alt="Company 2"
                />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Company Name</h5>
                <p className="text-primary">Department</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional slides can be added here */}
        </Slider>
      </div>
    </div>
  );
}

export default Company;
