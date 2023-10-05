

import rooms from "../../assets/images/rooms.png";
import './Rent.css'

import "./EventSpace.css";



const Rent = () => {
  
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20"></div>
              <div className="d-flex justify-content-center align-items-center ">
                <div className="col-lg-12 ">
                  <div
                    className="main-wraper"
                    style={{ marginBottom: "-80px" }}
                  >
                    
                    <div className="row suggested_caro">
                     
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={rooms} alt=""  />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              
                            </figure>
                           
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={rooms} alt=""  />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              
                            </figure>
                            
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={rooms} alt=""  />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              
                            </figure>
                            
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={rooms} alt=""  />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              
                            </figure>
                            
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
};

export default Rent;
