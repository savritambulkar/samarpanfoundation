import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const sliderSettings = {
     dots: true,
    infinite: true,
    speed: 1500,
   slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Delay between slides in milliseconds (3 seconds)
  };

  return (
    <div className="container-fluid p-5 bg-primary">
      <div className="row align-items-center">
        {/* Left Side Content */}
        <div className="col-md-6">
          <h1 className="mb-4" style={{fontSize:"60px", color:"white"}}>Good Health Is The Root Of All Heppiness</h1>
          <p className="mb-4">
            Good health is the foundation of a happy and fulfilling life. At our clinic, we provide
            exceptional healthcare services delivered by experienced professionals.
          </p>
          <ul className="mb-4">
            <li>Highly Qualified Doctors</li>
            <li>Advanced Medical Equipment</li>
            <li>24/7 Emergency Services</li>
          </ul>
         
        </div>

        {/* Right Side Carousel */}
        <div className="col-md-6">
          <Slider {...sliderSettings}>
            <div>
              <div className="position-relative"  >
                <img  style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo05.jpg"
                  alt="Slide 1"
                  className="img-fluid rounded"
                />
                <div className="carousel-caption">
                  <h3>Cardiology</h3>
                  <p>Advanced care for your heart and health.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img  style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo03.jpg"
                  alt="Slide 2"
                  className="img-fluid rounded"
                />
                <div className="carousel-caption">
                  <h3>Neurology</h3>
                  <p>Expert neurological treatments and support.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img   style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo07.jpg"
                  alt="Slide 3"
                  className="img-fluid rounded"
                />
                <div className="carousel-caption">
                  <h3>Pulmonary</h3>
                  <p>Comprehensive care for respiratory health.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img   style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo02.jpg"
                  alt="Slide 3"
                  className="img-fluid rounded"
                />
                <div className="carousel-caption">
                  <h3>Pulmonary</h3>
                  <p>Comprehensive care for respiratory health.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;

