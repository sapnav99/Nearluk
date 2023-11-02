import React, { useState } from "react";
import "../MyGallery/MyGallery.css";
import "./Verify.css";


const Verified:React.FC = () => {
  const propertyArray = Array.from({ length: 4 }).map((_, index) => ({
    id: index + 1,
    verified: index % 2 === 0,
  }));

  const [activeTab, setActiveTab] = useState("sell");
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 5;

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  return (
    <div>
      <div className="leftContainer">
        <ul className="nav ">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "sell" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("sell")}
            >
              Sell
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "rent" ? "active" : ""}`}
              aria-current="page"
              href="#"
              onClick={() => handleTabClick("rent")}
            >
              Rent
            </a>
          </li>

          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === "sharing" ? "active" : ""}`}
              href="#"
              onClick={() => handleTabClick("sharing")}
            >
              Sharing
            </a>
          </li>
        </ul>
      </div>
      <div>
        {activeTab === "sell" ? (
          <div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="course">
                  
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt="property image"
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="course-details">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        {/* <p style={{fontSize : "11px",marginBottom:"0"}}>Bachupally, Hyderabad</p> */}
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
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
                        <li>
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
                      <a href="post-detail.html" title="" className="reply">
                        Reply <i className="icofont-reply" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="course">
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt=""
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Pending Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="Rose Wood Vila">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        {/* <p style={{fontSize : "11px",marginBottom:"0"}}>Bachupally, Hyderabad</p> */}
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
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
                        <li>
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
                      <a href="post-detail.html" title="" className="reply">
                        Reply <i className="icofont-reply" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="course">
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt=""
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="Rose Wood villa">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        {/* <p style={{fontSize : "11px",marginBottom:"0"}}>Bachupally, Hyderabad</p> */}
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
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
                        <li>
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
                      <a href="post-detail.html" title="" className="reply">
                        Reply <i className="icofont-reply" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="course">
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt="property image"
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Pending Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="Rose Wood Villa">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        {/* <p style={{fontSize : "11px",marginBottom:"0"}}>Bachupally, Hyderabad</p> */}
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
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
                        <li>
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
                      <a href="post-detail.html" title="" className="reply">
                        Reply <i className="icofont-reply" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="course">
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt="property image"
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="Rose Wood Villa">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        {/* <p style={{fontSize : "11px",marginBottom:"0"}}>Bachupally, Hyderabad</p> */}
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
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
                        <li>
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
                      <a href="post-detail.html" title="" className="reply">
                        Reply <i className="icofont-reply" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="course">
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt="property image"
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Pending Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="Rose Wood Villa">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        {/* <p style={{fontSize : "11px",marginBottom:"0"}}>Bachupally, Hyderabad</p> */}
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
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
                        <li>
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
                      <a href="post-detail.html" title="" className="reply">
                        Reply <i className="icofont-reply" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="main-wraper" style={{ marginLeft: -20 }}>
                <div className="blog-posts">
                  {propertyArray.slice(startIndex, endIndex).map((property) => (
                    <figure
                      key={property.id}
                      className="col-lg-11"
                      style={{
                        display: "flex",
                        boxShadow: "0 10px 30px 0px rgb(0 0 0 / 6%)",
                        marginBottom: 20,
                        width: 650,
                        paddingTop: 20,
                      }}
                    >
                      <img
                        className="col-lg-4"
                        src="images/resources/blog-list-1.jpg"
                        alt=""
                        style={{ width: 230, height: 130, marginBottom: 20 }}
                      />
                      <div className="blog-post-meta">
                        <h4>Rose Wood Villa</h4>
                        <p>3BHK flats sale near Gachchibowli, Hyderabad</p>
                        <span>
                          <i className="icofont-clock-time"></i> 1.8 to 2.9
                          Crore
                        </span>
                        <p
                          className={
                            property.verified
                              ? "verified-tag"
                              : "pending-verified-tag"
                          }
                        >
                          {property.verified ? "Verified" : "Pending Verified"}
                        </p>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        ) : null}
        {activeTab === "rent" ? (
          <div>
            <div className="col-lg-12">
              <div className="main-wraper" style={{ marginLeft: -20 }}>
                <div className="blog-posts">
                  {propertyArray.slice(startIndex, endIndex).map((property) => (
                    <figure
                      key={property.id}
                      className="col-lg-11"
                      style={{
                        display: "flex",
                        boxShadow: "0 10px 30px 0px rgb(0 0 0 / 6%)",
                        marginBottom: 20,
                        width: 650,
                        paddingTop: 20,
                      }}
                    >
                      <img
                        src="images/resources/blog-list-1.jpg"
                        alt=""
                        style={{ width: 230, height: 130, marginBottom: 20 }}
                      />
                      <div className="blog-post-meta">
                        <h4>Rose Wood Villa</h4>
                        <p>3BHK flats sale near Gachchibowli, Hyderabad</p>
                        <span>
                          <i className="icofont-clock-time"></i> 1.8 to 2.9
                          Crore
                        </span>
                        <span
                          className={
                            property.verified
                              ? "verified-tag"
                              : "pending-verified-tag"
                          }
                        >
                          {property.verified ? "Verified" : "Pending Verified"}
                        </span>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {activeTab === "sharing" ? (
          <div>
            {" "}
            <div>
              <div className="col-lg-12">
                <div className="main-wraper" style={{ marginLeft: -20 }}>
                  <div className="blog-posts">
                    {propertyArray
                      .slice(startIndex, endIndex)
                      .map((property) => (
                        <figure
                          key={property.id}
                          className="col-lg-11"
                          style={{
                            display: "flex",
                            boxShadow: "0 10px 30px 0px rgb(0 0 0 / 6%)",
                            marginBottom: 20,
                            width: 650,
                            paddingTop: 20,
                          }}
                        >
                          <img
                            src="images/resources/blog-list-1.jpg"
                            alt=""
                            style={{
                              width: 230,
                              height: 130,
                              marginBottom: 20,
                            }}
                          />
                          <div className="blog-post-meta">
                            <h4>Rose Wood Villa</h4>
                            <p>3BHK flats sale near Gachchibowli, Hyderabad</p>
                            <span>
                              <i className="icofont-clock-time"></i> 1.8 to 2.9
                              Crore
                            </span>
                            <span
                              className={
                                property.verified
                                  ? "verified-tag"
                                  : "pending-verified-tag"
                              }
                            >
                              {property.verified
                                ? "Verified"
                                : "Pending Verified"}
                            </span>
                          </div>
                        </figure>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Verified;
