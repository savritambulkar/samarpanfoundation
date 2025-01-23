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
        <div className="col-md-6 text-light">
          <h1 className="mb-4" style={{fontSize:"60px", color:"white"}}>Nurturing Hope, Changing Futures</h1>
          <p className="mb-4">
          "Hope starts here – join us in making a difference".
            Your small help can changes someone future
          </p>
          <ul className="mb-4">
            <li>Empowering NGOs with Work and Resources </li>
            <li>Connecting Companies with Trusted Causes</li>
            <li>Enabling Human to Make a Difference</li>
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
                {/* <div className="carousel-caption">
                  <h3>Cardiology</h3>
                  <p>Advanced care for your heart and health.</p>
                </div> */}
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img  style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo03.jpg"
                  alt="Slide 2"
                  className="img-fluid rounded"
                />
                {/* <div className="carousel-caption">
                  <h3>Neurology</h3>
                  <p>Expert neurological treatments and support.</p>
                </div> */}
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img   style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo07.jpg"
                  alt="Slide 3"
                  className="img-fluid rounded"
                />
                {/* <div className="carousel-caption">
                  <h3>Pulmonary</h3>
                  <p>Comprehensive care for respiratory health.</p>
                </div> */}
              </div>
            </div>
            <div>
              <div className="position-relative">
                <img   style={{style:"3500px" , height:"500px"}}
                  src="../Image/photo02.jpg"
                  alt="Slide 3"
                  className="img-fluid rounded"
                />
                {/* <div className="carousel-caption">
                  <h3>Pulmonary</h3>
                  <p>Comprehensive care for respiratory health.</p>
                </div> */}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Slide;

