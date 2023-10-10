import bangalore from "../../assets/images/bangalore.png";
import hyderabad from "../../assets/images/hyderabad.png";
import mumbai from "../../assets/images/Mumbai.png";
import chennai from "../../assets/images/chennai.png";
import delhi from "../../assets/images/delhi.png";
import pune from "../../assets/images/pune.png";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
import "./SearchProperty.css";

const SearchProperty = () => {
  

  return (
    <div>
      <section style={{ backgroundColor: "#eafaf1" }}>
        <div className="gap">
          <div className="container ">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">
                  <div className="col-lg-1" style={{ marginTop: "60px" }}>
                    <img src={left} alt="" />
                  </div>
                  <div className="col-lg-10 ">
                    <h3
                      style={{
                        textAlign: "center",
                        marginBottom: "25px",
                        marginTop: "-30px",
                      }}
                    >
                      Search properties by popular cities
                    </h3>
                 
                      <div
                        className="row col-xs-12 "
                        style={{ marginBottom: "-30px" }}
                      >
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <div className="group-box">
                            <figure>
                              <img
                                className="cityImages"
                                alt=""
                                src={bangalore}
                              />
                            </figure>

                            <button className="buttons">Bangalore</button>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <div className="group-box">
                            <figure>
                              <img
                                src={hyderabad}
                                alt=""
                                className="cityImages"
                              />
                            </figure>

                            <button className="buttons">Hyderabad</button>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <div className="group-box">
                            <figure>
                              <img src={delhi} alt="" className="cityImages" />
                            </figure>

                            <button className="buttons">Delhi</button>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <div className="group-box">
                            <figure>
                              <img src={mumbai} alt="" className="cityImages" />
                            </figure>

                            <button className="buttons">Mumbai</button>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <div className="group-box">
                            <figure>
                              <img src={pune} alt="" className="cityImages" />
                            </figure>

                            <button className="buttons">Pune</button>
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4">
                          <div className="group-box">
                            <figure>
                              <img
                                src={chennai}
                                alt=""
                                className="cityImages"
                              />
                            </figure>

                            <button className="buttons">Chennai</button>
                          </div>
                        </div>
                      </div>
                   
                  </div>
                  <div className="col-lg-1" style={{ marginTop: "60px" }}>
                    <img src={right} alt="" />
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
