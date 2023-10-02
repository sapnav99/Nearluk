import React from "react";
import villa2 from "../../assets/images/villa2.jpg";
import profile from "../../assets/images/profilePhoto.jpg";
type Props = {};

const Ownerproperties = (props: Props) => {
  const propertyArray = Array.from({ length: 4 });
  return (
    <div className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="page-contents" className="row merged20"></div>
            <div className="d-flex justify-content-center align-items-center ">
              <div className="col-lg-12 ">
                <div className="main-wraper" style={{ marginBottom: "-80px" }}>
                  <h4 className="main-title">Owner Properties</h4>
                  <div className="row">
                    {propertyArray.map((_, index) => (
                      <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                        <div className="course">
                          <figure>
                            <img src={villa2} alt="" />
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
                              <div className="prise">
                                <span>&#8377;30L</span>
                              </div>
                            </div>
                            <h5 className="course-title">
                              <a href="course-detail.html" title="">
                                Modern villa with pool
                              </a>
                            </h5>
                            <div className="we-video-info">
                              <ul style={{ width: "80%" }}>
                                <li>
                                  <span title="views" className="views">
                                    <i>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-eye"
                                      >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx={12} cy={12} r={3} />
                                      </svg>
                                    </i>
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <span title="Comments" className="Recommend">
                                    <i>
                                      <svg
                                        className="feather feather-message-square"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        height={16}
                                        width={16}
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                      </svg>
                                    </i>
                                    <ins>54</ins>
                                  </span>
                                </li>
                                {/* <li>
                                  <span title="follow" className="Follow">
                                    <i>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-star"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                    </i>
                                    <ins>5k</ins>
                                  </span>
                                </li> */}
                                <li>
                                  <span className="share-pst" title="Share">
                                    <i>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-share-2"
                                      >
                                        <circle cx={18} cy={5} r={3} />
                                        <circle cx={6} cy={12} r={3} />
                                        <circle cx={18} cy={19} r={3} />
                                        <line
                                          x1="8.59"
                                          y1="13.51"
                                          x2="15.42"
                                          y2="17.49"
                                        />
                                        <line
                                          x1="15.41"
                                          y1="6.51"
                                          x2="8.59"
                                          y2="10.49"
                                        />
                                      </svg>
                                    </i>
                                    <ins>205</ins>
                                  </span>
                                </li>
                              </ul>
                              {/* <a
                              href="post-detail.html"
                              title=""
                              className="reply"
                            >
                              Reply <i className="icofont-reply" />
                            </a> */}
                            </div>
                            {/* <div className="course-info">
                            <span className="lecturez">
                              <i className="icofont-film"></i> 20 Lectures
                            </span>
                            <span className="time">
                              <i className="icofont-clock-time"></i> 20Hrs
                            </span>
                          </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Ownerproperties;
