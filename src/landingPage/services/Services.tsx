import rental from "../../assets/images/Rental.png";
import packers from "../../assets/images/Packers and movers.png";
import cleaning from "../../assets/images/Cleaning.png";
import plumbing from "../../assets/images/Plumbing.png";
import electrician from "../../assets/images/electrician 1.png";
import painting from "../../assets/images/Painting.png";


const Services = () => {
  return (
    <div>
      <section>
        <div
          className="gap"
          style={{
            backgroundColor: "#eafaf1",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="page-contents" className="row merged20">
                  <div className="col-lg-12">
                    <h2
                      style={{
                        textAlign: "center",
                        marginBottom: "25px",
                        marginTop: "-30px",
                      }}
                    >
                      Nearluk exclusive services
                    </h2>
                    {/* <div className="books-caro"> */}
                    <div
                      className="row col-xs-6 "
                      style={{ marginBottom: "-30px" }}
                    >
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img alt="" src={rental} />
                          </figure>

                          <button>Rental Agreement</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={packers} alt="" />
                          </figure>

                          <button>Packers & Movers</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={cleaning} alt="" />
                          </figure>

                          <button>Cleaning Services</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={plumbing} alt="" />
                          </figure>

                          <button>Plumbing Services</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={electrician} alt="" />
                          </figure>

                          <button>Electrician</button>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-4">
                        <div className="group-box">
                          <figure>
                            <img src={painting} alt="" />
                          </figure>

                          <button>Painting Services</button>
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

export default Services;
