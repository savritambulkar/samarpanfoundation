import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../css/ServiceVolunteer.css"
function ServiceVolunteer() {
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, 
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}
          >
            {/* <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p> */}
            <h1>What Say Our Patients!</h1>
          </div>
          <Slider {...settings} className="testimonial-carousel">
          
            <div className="testimonial-item text-center">
              <img
                src="../Image/photo01.jpg"
                alt="website template image"
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
                  amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
         
            <div className="testimonial-item text-center">
              <img
                src="../Image/photo02.jpg"
                alt="website template image"
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
                  amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
     
            <div className="testimonial-item text-center">
              <img
                src="../Image/photo04.jpg"
                alt="website template image"
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
                  amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>

            <div className="testimonial-item text-center">
              <img
                src="../Image/photo05.jpg"
                alt="website template image"
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
                  amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>

            <div className="testimonial-item text-center">
              <img
                src="../Image/photo06.jpg"
                alt="website template image"
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
                  amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>

            <div className="testimonial-item text-center">
              <img
                src="../Image/photo07.jpg"
                alt="website template image"
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
                  amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
                </p>
                <h5 className="mb-1">Patient Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ServiceVolunteer;
