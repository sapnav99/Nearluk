import final from "../../assets/images/final letterhead 1.png";
import "./Services.css";

const ServicesAd = () => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-12">
                  <div className="blog-posts" style={{ marginBottom: "-80px" }}>
                    <div className="blog-post-meta col-lg-4 col-md-12">
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
                       <button
                        style={{
                          backgroundColor: "#3FDBD1",
                          borderRadius: "20px",
                          paddingBlock: "5px",
                          width: "100px",
                        }}
                      >
                        Book now
                      </button>
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <figure>
                        <img className="images" src={final} alt="" />
                      </figure>
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
