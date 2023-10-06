import React, { useState, useEffect } from "react";
import PersonalInfo from "./tabs/personal/PersonalInfo";

import Posting from "./tabs/myPostings/MyPosting";
import MyLeads from "./tabs/myLeads/MyLeads";
import Favourite from "./tabs/MyFavourites/MyFavourite";
import Verify from "./tabs/verify/Verify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./UserProfile.css";
import profilePhoto from "../../../assets/images/profilePhoto.jpg";
type Props = {};

const UserProfile:React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="theme-layout">
      <div className="gap no-gap">
        <div className="top-area mate-black low-opacity">
          <div
            className="bg-image"
            style={{
              backgroundColor: "white",
              // backgroundImage: "url(images/resources/top-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="post-subject">
                  <div className="university-tag">
                    <figure>
                      <img src={profilePhoto} alt="" />
                    </figure>
                    <div className="uni-name">
                      <h4>Georg Peeter </h4>
                      <span>@Georgofficial</span>
                    </div>
                    <ul className="sharing-options">
                      {isMobile ? (
                        <li className="mobile-nav-icon-container">
                          <a
                            className="mobile-nav-icon"
                            onClick={toggleMobileNav}
                          >
                            <FontAwesomeIcon icon={faBars} />
                          </a>
                        </li>
                      ) : (
                        ""
                        
                      )}
                     
                     
                    </ul>
                    
                  </div>

                  <div >
      {/* {isLoggedIn && ( */}
      <nav className="sidebar">
        <ul className="menu-slide">
          <li className="">
          <a
                        className={`nav-link ${
                          activeTab === "personal" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("personal")}
                      >
              
              Personal Info
            </a>
          </li>
          <li className="">
          <a
                        className={`nav-link ${
                          activeTab === "posting" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("posting")}
                      >
              
              My Postings
            </a>
          </li>
          <li className="">
          <a
                        className={`nav-link ${
                          activeTab === "lead" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("lead")}
                      >
              
              My Leads
            </a>
          </li>
          <li className="">
          <a
                        className={`nav-link ${
                          activeTab === "favourite" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("favourite")}
                      >
              
              My Favourites
            </a>
          </li>
          
          
        </ul>
      </nav>
      {/* )} */}
    </div>
                  
                  <ul
                    className="nav nav-tabs post-detail-btn " 
                  >
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "personal" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("personal")}
                      >
                        Personal Info
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "posting" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("posting")}
                      >
                        My Postings
                      </a>
                      <span>100</span>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "lead" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("lead")}
                      >
                        My Leads
                      </a>
                      <span>23</span>
                    </li>

                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "favourite" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("favourite")}
                      >
                        My Favourites
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "pending" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("pending")}
                      >
                        Pending Verified
                      </a>
                      <span>23</span>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className={`nav-link ${
                          activeTab === "gallery" ? "active" : ""
                        }`}
                        href="#"
                        data-toggle="tab"
                        onClick={() => handleTabClick("gallery")}
                      >
                        My Gallery
                      </a> */}
                      {/* <span>23</span> */}
                    {/* </li> */}
                  </ul>

                  {/* </nav> */}
                  {/* <nav className="sidebar">
                    
                   </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">
                  <div className="col-lg-9">
                    <div className="tab-content">
                      <div className="main-wraper">
                        {/* <span className="new-title">Create New Post</span> */}
                        <div className="new-post">
                          {activeTab !== null && (
                            <div>
                              {activeTab === "personal" && <PersonalInfo />}
                              {activeTab === "posting" && <Posting />}
                              {/* {activeTab === "gallery" && <Gallery />} */}

                              {activeTab === "lead" && <MyLeads />}
                              {activeTab === "favourite" && <Favourite />}
                              {activeTab === "pending" && <Verify />}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <aside className="sidebar static right">
                      <div className="widget">
                        <h4 className="widget-title">Post Analytics</h4>
                        <ul className="widget-analytics">
                          <li>
                            Reads <span>56</span>
                          </li>
                          <li>
                            Recommendations <span>3</span>
                          </li>
                          <li>
                            Shares <span>22</span>
                          </li>
                          <li>
                            References <span>17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Ask Research Question?</h4>
                        <div className="ask-question">
                          <i className="icofont-question-circle"></i>
                          <h6>
                            Ask questions in Q&A to get help from experts in
                            your field.
                          </h6>
                          <a className="ask-qst" href="#" title="">
                            Ask a question
                          </a>
                        </div>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">
                          Explor Events{" "}
                          <a className="see-all" href="#" title="">
                            See All
                          </a>
                        </h4>
                        <div className="rec-events bg-purple">
                          <i className="icofont-gift"></i>
                          <h6>
                            <a title="" href="">
                              BZ University good night event in columbia
                            </a>
                          </h6>
                          <img alt="" src="images/clock.png" />
                        </div>
                        <div className="rec-events bg-blue">
                          <i className="icofont-microphone"></i>
                          <h6>
                            <a title="" href="">
                              The 3rd International Conference 2020
                            </a>
                          </h6>
                          <img alt="" src="images/clock.png" />
                        </div>
                      </div>
                      <div className="widget stick-widget">
                        <h4 className="widget-title">Who's follownig</h4>
                        <ul className="followers">
                          <li>
                            <figure>
                              <img
                                alt=""
                                src="images/resources/friend-avatar.jpg"
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a title="" href="time-line.html">
                                  Kelly Bill
                                </a>
                                <span>Dept colleague</span>
                              </h4>
                              <a className="underline" title="" href="#">
                                Follow
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                alt=""
                                src="images/resources/friend-avatar2.jpg"
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a title="" href="time-line.html">
                                  Issabel
                                </a>
                                <span>Dept colleague</span>
                              </h4>
                              <a className="underline" title="" href="#">
                                Follow
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                alt=""
                                src="images/resources/friend-avatar3.jpg"
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a title="" href="time-line.html">
                                  Andrew
                                </a>
                                <span>Dept colleague</span>
                              </h4>
                              <a className="underline" title="" href="#">
                                Follow
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                alt=""
                                src="images/resources/friend-avatar4.jpg"
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a title="" href="time-line.html">
                                  Sophia
                                </a>
                                <span>Dept colleague</span>
                              </h4>
                              <a className="underline" title="" href="#">
                                Follow
                              </a>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <img
                                alt=""
                                src="images/resources/friend-avatar5.jpg"
                              />
                            </figure>
                            <div className="friend-meta">
                              <h4>
                                <a title="" href="time-line.html">
                                  Allen
                                </a>
                                <span>Dept colleague</span>
                              </h4>
                              <a className="underline" title="" href="#">
                                Follow
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default UserProfile;
