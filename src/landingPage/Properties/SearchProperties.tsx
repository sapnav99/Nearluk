import React from "react";
import bangalore from "../../assets/images/bangalore.png";
import hyderabad from "../../assets/images/hyderabad.png";
import mumbai from "../../assets/images/Mumbai.png";
import chennai from "../../assets/images/chennai.png";
import delhi from "../../assets/images/delhi.png";
import pune from "../../assets/images/pune.png";
type Props = {};

const SearchProperty = (props: Props) => {
  return (
    <div>
      <section style={{ backgroundColor: "#eafaf1" }}>
        <div className="gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">
                  <div className="col-lg-12">
                    <h3
                      style={{
                        textAlign: "center",
                        marginBottom: "25px",
                        marginTop: "-30px",
                      }}
                    >
                      Search properties by popular cities
                    </h3>
                    {/* <div className="books-caro"> */}
                    <div
                      className="row col-xs-6 "
                      style={{ marginBottom: "-30px" }}
                    >
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img
                              alt=""
                              src={bangalore}
                              style={{ height: "65px", width: "70px" }}
                            />
                          </figure>

                          <button style={{ width: "100px" }}>Bangalore</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img
                              src={hyderabad}
                              alt=""
                              style={{ height: "65px", width: "70px" }}
                            />
                          </figure>

                          <button style={{ width: "100px" }}>Hyderabad</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img
                              src={delhi}
                              alt=""
                              style={{ height: "65px", width: "70px" }}
                            />
                          </figure>

                          <button style={{ width: "100px" }}>Delhi</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img
                              src={mumbai}
                              alt=""
                              style={{ height: "65px", width: "70px" }}
                            />
                          </figure>

                          <button style={{ width: "100px" }}>Mumbai</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img
                              src={pune}
                              alt=""
                              style={{ height: "65px", width: "70px" }}
                            />
                          </figure>

                          <button style={{ width: "100px" }}>Pune</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img
                              src={chennai}
                              alt=""
                              style={{ height: "65px", width: "70px" }}
                            />
                          </figure>

                          <button style={{ width: "100px" }}>Chennai</button>
                        </div>
                      </div>
                    </div>
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

export default SearchProperty;
