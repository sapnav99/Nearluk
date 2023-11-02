import flatmate from "../../assets/images/flatmate.png";
import "./Services.css";

const FlatmateFinder = () => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-12">
                  <div
                    className="blog-posts col-lg-10"
                    style={{ marginBottom: "-80px" }}
                  >
                    <div
                      className="blog-post-meta col-lg-4 col-md-12"
                      style={{ marginTop: "50px" }}
                    >
                      <label
                        style={{
                          lineHeight: "60px",
                          marginLeft: "1px",
                          fontSize: "40px",
                          fontWeight: "700",
                        }}
                      >
                        Find your Flatmate
                      </label>
                      <p
                        style={{
                          width: "280px",
                          fontSize: "20px",
                          fontWeight: 500,
                          lineHeight: "35px",
                        }}
                      >
                        Book play grounds to improve your sports skills at your
                        nearby places.
                      </p>

                      <button
                        style={{
                          backgroundColor: "#3FDBD1",
                          borderRadius: "20px",
                          paddingBlock: "5px",
                          width: "100px",
                        }}
                      >
                        Find
                      </button>
                    </div>
                    <div className="col-lg-7 col-md-12">
                      <figure>
                        <img
                          style={{ width: "590px", marginLeft: "40px" }}
                          src={flatmate}
                          alt=""
                        />
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

export default FlatmateFinder;
