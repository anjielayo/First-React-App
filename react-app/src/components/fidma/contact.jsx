import React from 'react';


const Contact=()=>{
    return(
        <div className="container-fluid">
        <div className="contact3 py-5">
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img src="images/2.jpg" className="img-fluid" alt=""/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="font-weight-light mt-2">Quick Contact</h1>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control" type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control" type="email" placeholder="Email address" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control" type="text" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card mt-4 border-0 mb-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail pl-0">
                        <div className="mr-3 align-self-center">
                          <img src="images/icon1.png" alt=""/>
                        </div>
                        <div className>
                          <h6 className="font-weight-medium">Address</h6>
                          <p className>Lorem ipsum
                            <br /> Dolor ipsum</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="images/icon2.png" alt=""/>
                        </div>
                        <div className>
                          <h6 className="font-weight-medium">Phone</h6>
                          <p className>123 456 789
                            <br /> 789 234 567</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="images/icon3.png" alt="" />
                        </div>
                        <div className>
                          <h6 className="font-weight-medium">Email</h6>
                          <p className>
                            info@fidma.com
                            <br /> 123@fidma.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        );
}





export default Contact;