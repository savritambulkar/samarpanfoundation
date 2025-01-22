
function Contactform(){
    return <>
    <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
        {/* <p className="d-inline-block border rounded-pill py-1 px-4">Contact Us</p> */}
        <h1 className="mb-4">Make a Better World </h1>
        <p className="mb-4">"Your Time Can Change Lives"</p>
        <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"55px",height:"55px"}}><i className="fa fa-phone-alt text-primary"></i></div>
          <div className="ms-4 ">
            <p className="mb-2 ">Call Us </p>
            <h5 className="mb-0" >91711188434</h5>
          </div>
        </div>
        <div className="bg-light rounded d-flex align-items-center p-5">
          <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"55px",height:"55px"}}><i className="fa fa-envelope-open text-primary"></i></div>
          <div className="ms-4">
            <p className="mb-2">Mail Us </p>
            <h5 className="mb-0">infoSamarpan@gmail.com</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp", border:"1px solid grey"}}>
        <div className="bg-white rounded h-100 d-flex align-items-center p-5" >
          <form action="#" method="post">
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control border-1" placeholder="Your Name" style={{height:"55px"}}/>
              </div>
              <div className="col-12 col-sm-6">
                <input type="email" className="form-control border-1" placeholder="Your Email" style={{height:"55px"}}/>
              </div>
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control border-1" placeholder="Your Mobile" style={{height:"55px"}}/>
              </div>
              <div className="col-12 col-sm-6">
                <select className="form-select border-1" style={{height:"55px"}}>
                  <option selected="">Samarpan Family</option>
                  <option value="1">Company 1</option>
                  <option value="2">Company 2</option>
                  <option value="3">Company 3</option>
                </select>
              </div>
              <div className="col-12 col-sm-6">
                <div className="date" id="date" data-target-input="nearest">
                  <input type="text" className="form-control border-1 datetimepicker-input" placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{height:"55px"}}/>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="time" id="time" data-target-input="nearest">
                  <input type="text" className="form-control border-1 datetimepicker-input" placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{height:"55px"}}/>
                </div>
              </div>
              <div className="col-12">
                <textarea className="form-control border-1" rows="5" placeholder="Describe your problem"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
}
export default Contactform;