import React from "react";
import final from "../../assets/images/final letterhead 1.png";
import './Services.css'
type Props = {};

const ServicesAd = (props: Props) => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20"></div>
              <div className="col-lg-12">
                <div className="main-wraper" style={{ marginBottom: "-80px" }}>
                  <div
                    className="blog-posts"
                    // style={{ marginBottom: "0px", display: "flex" }}
                  >
                    <figure>
                      <img
                        src={final}
                        alt=""
                        style={{ width: "720px", height: "450px" }}
                      />
                    </figure>
                    <div
                      className="blog-post-meta"
                      style={{
                        textAlign: "right",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginLeft: "50px",
                      }}
                    >
                      <h1 style={{ lineHeight: "60px" }}>Rent Services</h1>
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: 500,
                          lineHeight: "35px",
                        }}
                      >
                        Book play grounds to improve your <br />
                        sports skills at your nearby places.
                      </p>

                      {/* <span>
                        <i className="icofont-clock-time"></i> january 23, 2021
                      </span> */}
                      <a
                        href="blog-detail.html"
                        title=""
                        className="button primary circle"
                      >
                        Book Now
                      </a>
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

export default ServicesAd;
