
import rooms from "../../assets/images/rooms.png";

import car from "../../assets/images/car 1.png";
import elevator from "../../assets/images/elevator 1.png";
import swimming from "../../assets/images/swimming 1.png";
import "./EventSpace.css";


const TopProjects = () => {
  
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
                    <h4 className="main-title">Top projects in Hyderabad </h4>
                    <div className="row">
                     
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={rooms} alt=""  />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              <em>Best seller</em>
                              <span className="rate-result">
                                <i className="icofont-star"></i> 4.5
                              </span>
                            </figure>
                            <div className="course-meta">
                              <div style={{ display: "flex" }}>
                                {/* <div className="post-by"> */}
                                {/* <figure>
                                    <img src={profile} alt="" />
                                  </figure> */}
                                {/* <div className="course-cat"> */}
                                {/* <span style={{ marginTop: "12px" }}>
                                      By: Sarah K
                                    </span> */}
                                {/* <a href="#" title="">
                        HTML5
                      </a> */}
                                {/* </div> */}
                                {/* </div> */}
                                {/* <div className="prise">
                                  <span>&#8377;30L</span>
                                </div> */}
                              </div>
                              <h5 className="course-title">
                                <a href="course-detail.html" title="">
                                  Modern villa with pool
                                </a>
                              </h5>
                              <p>3BHK, Gachibowli</p>
                              <ul className="more-details clearfix">
                                <li
                                  style={{
                                    marginLeft: "-70px",
                                    width: "140px",
                                  }}
                                >
                                  <img src={car} alt="" />
                                  {/* <i className="fa-solid fa-bed"></i> */}
                                  Car parking
                                </li>
                                <li style={{ marginLeft: "-35px" }}>
                                  <img src={elevator} alt="" />
                                  {/* <i className="fa-solid fa-shower"></i> */}
                                  Lift
                                </li>
                                <li
                                  style={{
                                    marginLeft: "-30px",
                                    display: "flex",
                                    width: "160px",
                                  }}
                                >
                                  <img src={swimming} alt="" />
                                  {/* <i className="fa-solid fa-chart-area"></i> */}
                                  <span>Swimming pool</span>
                                </li>
                                {/* <li>
                                  <i className="fa-solid fa-plus"></i>23 more
                                </li> */}
                              </ul>
                              
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={rooms} alt=""  />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              <em>Best seller</em>
                              <span className="rate-result">
                                <i className="icofont-star"></i> 4.5
                              </span>
                            </figure>
                            <div className="course-meta">
                              <div style={{ display: "flex" }}>
                                {/* <div className="post-by"> */}
                                {/* <figure>
                                    <img src={profile} alt="" />
                                  </figure> */}
                                {/* <div className="course-cat"> */}
                                {/* <span style={{ marginTop: "12px" }}>
                                      By: Sarah K
                                    </span> */}
                                {/* <a href="#" title="">
                        HTML5
                      </a> */}
                                {/* </div> */}
                                {/* </div> */}
                                {/* <div className="prise">
                                  <span>&#8377;30L</span>
                                </div> */}
                              </div>
                              <h5 className="course-title">
                                <a href="course-detail.html" title="">
                                  Modern villa with pool
                                </a>
                              </h5>
                              <p>3BHK, Gachibowli</p>
                              <ul className="more-details clearfix">
                                <li
                                  style={{
                                    marginLeft: "-70px",
                                    width: "140px",
                                  }}
                                >
                                  <img src={car} alt="" />
                                  {/* <i className="fa-solid fa-bed"></i> */}
                                  Car parking
                                </li>
                                <li style={{ marginLeft: "-35px" }}>
                                  <img src={elevator} alt="" />
                                  {/* <i className="fa-solid fa-shower"></i> */}
                                  Lift
                                </li>
                                <li
                                  style={{
                                    marginLeft: "-30px",
                                    display: "flex",
                                    width: "160px",
                                  }}
                                >
                                  <img src={swimming} alt="" />
                                  {/* <i className="fa-solid fa-chart-area"></i> */}
                                  <span>Swimming pool</span>
                                </li>
                                {/* <li>
                                  <i className="fa-solid fa-plus"></i>23 more
                                </li> */}
                              </ul>
                              
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
    </div>
  );
};

export default TopProjects;
