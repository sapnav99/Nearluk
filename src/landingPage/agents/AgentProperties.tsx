import React from "react";
import villa3 from "../../assets/images/villa3.jpg";
import villa4 from "../../assets/images/villa4.jpg";
import profile from "../../assets/images/profilePhoto.jpg";
import car from "../../assets/images/car 1.png";
import elevator from "../../assets/images/elevator 1.png";
import swimming from "../../assets/images/swimming 1.png";
import "../Properties/EventSpace.css";
import './AgentProperty.css'
type Props = {};

const AgentProperties = (props: Props) => {
  const propertyArray = Array.from({ length: 3 });
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20"></div>
              <div className="col-lg-12">
                <div className="main-wraper" style={{ marginBottom: "-80px" }}>
                  <div className="main-title">Agent Properties</div>
                  <div style={{ display: "flex" }}>
                    <div
                      className="blog-posts col-sm-12 col-md-12"
                      // style={{ marginBottom: "0px", display: "flex" }}
                    >
                      <figure>
                        <img src={villa3} alt="" style={{ width: "260px" }} />
                      </figure>
                      <div
                        className="blog-post-meta"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div className="post-by">
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <div className="course-cat">
                            <span style={{ marginTop: "12px" }}>
                              By: Sarah K
                            </span>
                            {/* <a href="#" title="">
                        HTML5
                      </a> */}
                          </div>
                        </div>

                        <h4>Modern villa with pool</h4>

                        <ul className="more-details clearfix">
                          <li
                            style={{
                              marginLeft: "-30px",
                              width: "140px",
                            }}
                          >
                            <img
                              src={car}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            Car parking
                          </li>
                          <li style={{ marginLeft: "-35px", width: "95px" }}>
                            <img
                              src={elevator}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            Lift
                          </li>
                          <li
                            style={{
                              marginLeft: "-30px",
                              display: "flex",
                              width: "160px",
                            }}
                          >
                            <img
                              src={swimming}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            {/* <i className="fa-solid fa-chart-area"></i> */}
                            <span>Swimming pool</span>
                          </li>
                          {/* <li>
                                  <i className="fa-solid fa-plus"></i>23 more
                                </li> */}
                        </ul>
                        {/* <span>
                        <i className="icofont-clock-time"></i> january 23, 2021
                      </span> */}
                        {/* <a
                        href="blog-detail.html"
                        title=""
                        className="button primary circle"
                      >
                        read more
                      </a> */}
                      </div>
                    </div>
                    <div
                      className="blog-posts col-sm-12 col-md-12"
                      style={{ marginBottom: "0px", display: "flex" }}
                    >
                      <figure>
                        <img src={villa4} alt="" style={{ width: "260px" }} />
                      </figure>
                      <div
                        className="blog-post-meta"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                        }}
                      >
                        <div className="post-by">
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <div className="course-cat">
                            <span style={{ marginTop: "12px" }}>
                              By: Sarah K
                            </span>
                            {/* <a href="#" title="">
                        HTML5
                      </a> */}
                          </div>
                        </div>

                        <h4>Modern villa with pool</h4>

                        <ul className="more-details clearfix">
                          <li
                            style={{
                              marginLeft: "-30px",
                              width: "140px",
                            }}
                          >
                            <img
                              src={car}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            {/* <i className="fa-solid fa-bed"></i> */}
                            Car parking
                          </li>
                          <li style={{ marginLeft: "-35px", width: "95px" }}>
                            <img
                              src={elevator}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
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
                            <img
                              src={swimming}
                              alt=""
                              style={{ paddingRight: "5px" }}
                            />
                            {/* <i className="fa-solid fa-chart-area"></i> */}
                            <span>Swimming pool</span>
                          </li>
                          {/* <li>
                                  <i className="fa-solid fa-plus"></i>23 more
                                </li> */}
                        </ul>
                        {/* <span>
                        <i className="icofont-clock-time"></i> january 23, 2021
                      </span> */}
                        {/* <a
                        href="blog-detail.html"
                        title=""
                        className="button primary circle"
                      >
                        read more
                      </a> */}
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

export default AgentProperties;
