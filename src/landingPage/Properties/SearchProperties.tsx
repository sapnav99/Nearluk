

import bangalore from "../../assets/images/bangalore.png";
import hyderabad from "../../assets/images/hyderabad.png";
import mumbai from "../../assets/images/Mumbai.png";
import chennai from "../../assets/images/chennai.png";
import delhi from "../../assets/images/delhi.png";
import pune from "../../assets/images/pune.png";
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
                  <div className="col-lg-12 ">
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
                      className="row col-xs-12 page-caro"
                      style={{ marginBottom: "-30px" }}
                    >
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img className="images" alt="" src={bangalore} />
                          </figure>

                          <button className="buttons">Bangalore</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={hyderabad} alt="" className="images" />
                          </figure>

                          <button className="buttons">Hyderabad</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={delhi} alt="" className="images" />
                          </figure>

                          <button className="buttons">Delhi</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={mumbai} alt="" className="images" />
                          </figure>

                          <button className="buttons">Mumbai</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={pune} alt="" className="images" />
                          </figure>

                          <button className="buttons">Pune</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={chennai} alt="" className="images" />
                          </figure>

                          <button className="buttons">Chennai</button>
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
