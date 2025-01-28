import React from 'react';
import "../css/Event.css"

function Events() {
  return (
    <>
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
            {/* <p className="d-inline-block border rounded-pill py-1 px-4 text-primary bg-light">
              Service
            </p> */}
            <h1 className="text-primary">Samarpan Family</h1>
          </div>
          <div className="row g-4">
            {/* Service Items */}
            {[
              { icon: "fa-solid fa-children", title: "Childrens", text: "Support and care for children." },
              { icon: "fa-solid fa-bowl-food", title: "Food", text: "Providing meals to the needy." },
              { icon: "fa-solid fa-people-group", title: "Citizens", text: "Empowering citizens for better living." },
              { icon: "fa-heartbeat", title: "Needy People", text: "Support for underprivileged individuals." },
              { icon: "fa-solid fa-shirt", title: "Cloth Needs", text: "Clothing distribution campaigns." },
              { icon: "fa-solid fa-indian-rupee-sign", title: "Earn Money", text: "Helping individuals earn and sustain." },
            ].map((service, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
                key={service.title}
                style={{
                  visibility: "visible",
                  animationDelay: `${0.1 + index * 0.2}s`,
                  animationName: "slideInBottom",
                }}
              >
                <div className="service-item bg-light rounded h-100 p-5 shadow">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                    style={{ width: "65px", height: "65px" }}
                  >
                    <i className={`fa ${service.icon} text-white fs-4`}></i>
                  </div>
                  <h4 className="mb-3 text-secondary">{service.title}</h4>
                  <p className="mb-4">{service.text}</p>
                  <a className="btn btn-outline-primary">
                    <i className="fa fa-plus text-primary me-3"></i>Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  Features
                </p>
                <h1 className="text-white mb-4">Together,we create changes</h1>
                <p className="text-white mb-4 pb-2">
                  MISSON, VISION, IMPACT
                </p>
                <div className="row g-4">
                  {[
                    { icon: "fa-solid fa-handshake-simple", title: "Impactful callobration", text: "Misson" },
                    { icon: "fa-solid fa-eye", title: "Contribution leads to a brighter future", text: "Vision" },
                    { icon: "fa-comment-medical", title: "Bridges the gap between needy and Supporters", text: "Impact" },
                    { icon: "fa-headphones", title: "Support", text: "24 Hours" },
                  ].map((feature, index) => (
                    <div className="col-6" key={feature.title}>
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                          style={{ width: "55px", height: "55px" }}
                        >
                          <i className={`fa ${feature.icon} text-primary`}></i>
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">{feature.text}</p>
                          <h5 className="text-white mb-0">{feature.title}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{
                minHeight: "400px",
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="../Image/cause-6.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Helping Hands"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
