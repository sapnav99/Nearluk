import villa3 from "../../assets/images/villa3.jpg";
import villa4 from "../../assets/images/villa4.jpg";
import profile from "../../assets/images/profilePhoto.jpg";
import car from "../../assets/images/car 1.png";
import elevator from "../../assets/images/elevator 1.png";
import swimming from "../../assets/images/swimming 1.png";
// import "../Properties/EventSpace.css";
import "./AgentProperty.css";

const AgentProperties = () => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20"></div>
              <div className="col-lg-12" style={{ marginTop: "-80px" }}>
                <div className="main-title">Agent Properties</div>
                <div style={{ display: "flex", marginBottom: "-60px" }}>
                  <div className="blog-posts col-lg-6 col-sm-12 col-md-12">
                    <figure>
                      <img src={villa3} alt="" />
                    </figure>
                    <div
                      className="blog-post_meta"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div className="post-by">
                        <figure>
                          <img src={profile} alt="" />
                        </figure>
                        <div className="course-cat">
                          <span style={{ marginTop: "12px" }}>By: Sarah K</span>
                        </div>
                      </div>

                      <h4>Modern villa with pool</h4>

                      <ul className="more_details clearfix">
                        <li>
                          <img src={car} alt="" />
                          Car parking
                        </li>
                        <li>
                          <img src={elevator} alt="" />
                          Lift
                        </li>
                        <li>
                          <img src={swimming} alt="" />

                          <span>Swimming pool</span>
                        </li>
                        {/* <li>
                                  <i className="fa-solid fa-plus"></i>23 more
                                </li> */}
                      </ul>
                      {/* <span>
                        <i className="icofont-clock-time"></i> january 23, 2021
                      </span> */}
                      {/* <a
                        href="blog-detail.html"
                        title=""
                        className="button primary circle"
                      >
                        read more
                      </a> */}
                    </div>
                  </div>
                  <div className="blog-posts col-lg-6 col-sm-12 col-md-12">
                    <figure>
                      <img src={villa4} alt="" />
                    </figure>
                    <div
                      className="blog-post_meta"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <div className="post-by">
                        <figure>
                          <img src={profile} alt="" />
                        </figure>
                        <div className="course-cat">
                          <span style={{ marginTop: "12px" }}>By: Sarah K</span>
                        </div>
                      </div>

                      <h4>Modern villa with pool</h4>

                      <ul className="more_details clearfix">
                        <li>
                          <img src={car} alt="" />
                          Car parking
                        </li>
                        <li>
                          <img src={elevator} alt="" />
                          Lift
                        </li>
                        <li>
                          <img src={swimming} alt="" />

                          <span>Swimming pool</span>
                        </li>
                        {/* <li>
                                  <i className="fa-solid fa-plus"></i>23 more
                                </li> */}
                      </ul>
                      {/* <span>
                        <i className="icofont-clock-time"></i> january 23, 2021
                      </span> */}
                      {/* <a
                        href="blog-detail.html"
                        title=""
                        className="button primary circle"
                      >
                        read more
                      </a> */}
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

export default AgentProperties;
