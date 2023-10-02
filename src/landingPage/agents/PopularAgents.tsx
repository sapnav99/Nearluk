import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import profile from "../../assets/images/profilePhoto.jpg";
// import './Agents.css'
type Props = {};

const PopularAgents = (props: Props) => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row">
                <div
                  className="main-wraper"
                  style={{
                    marginBottom: "-80px",
                    width: "1160px",
                    marginLeft: "30px",
                  }}
                >
                  <div className="user-post" style={{ marginBottom: "30px" }}>
                    <div className="friend-info">
                      <h4 className="main-title">Popular Agents</h4>
                      <ul
                        className="suggested-caro"
                        // style={{
                        //   margin: 0,
                        // }}
                      >
                        <li >
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Amy Watson</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Amy Watson</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Amy Watson</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Amy Watson</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Amy Watson</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Muhammad Khan</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
                        <li>
                          <figure>
                            <img src={profile} alt="" />
                          </figure>
                          <span>Sadia Gill</span>
                          {/* <ins>Department of Socilolgy</ins> */}
                          <a href="#" title="" data-ripple="">
                            <i className="icofont-phone"></i> Contact
                          </a>
                        </li>
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
  );
};

export default PopularAgents;
