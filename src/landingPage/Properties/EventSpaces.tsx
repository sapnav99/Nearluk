
import events1 from "../../assets/images/events1.png";

import car from "../../assets/images/car 1.png";
import elevator from "../../assets/images/elevator 1.png";
import swimming from "../../assets/images/swimming 1.png";
import "./EventSpace.css";



const EventSpaces = () => {
  const propertyArray = Array.from({ length: 3 });
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
                    <h4 className="main-title">Event spaces in Hyderabad</h4>
                    <div className="row">
                      {propertyArray.map((_, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="course">
                            <figure>
                              <img src={events1} alt="" key={index} />
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
                                  Swagath Residency
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
                              {/* <div className="we-video-info">
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
                                    <span
                                      title="Comments"
                                      className="Recommend"
                                    >
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
    </div>
  );
};

export default EventSpaces;
