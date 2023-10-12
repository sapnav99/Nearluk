import rooms from "../../assets/images/rooms.png";

import car from "../../assets/images/car 1.png";
import elevator from "../../assets/images/elevator 1.png";
import swimming from "../../assets/images/swimming 1.png";
import "./EventSpace.css";

const RecentSearches = () => {
  return (
    <div>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20"></div>
              <div className="d-flex justify-content-center align-items-center ">
                <div className="col-lg-10 ">
                  <h4 className="main-title">You Recent Searches </h4>
                  <div className="row" style={{ marginBottom: "-80px" }}>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="course">
                        <figure>
                          <img src={rooms} alt="" />
                          <i className="icofont-book-mark" title="bookmark"></i>
                          <em>Best seller</em>
                          <span className="rate-result">
                            <i className="icofont-star"></i> 4.5
                          </span>
                        </figure>
                        <div className="course-meta">
                          <div style={{ display: "flex" }}></div>
                          <h5 className="course-title">
                            <a href="course-detail.html" title="">
                              Swagath Residency
                            </a>
                          </h5>
                          <p>3BHK, Gachibowli</p>
                          <ul className="we-video-info">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="course">
                        <figure>
                          <img src={rooms} alt="" />
                          <i className="icofont-book-mark" title="bookmark"></i>
                          <em>Best seller</em>
                          <span className="rate-result">
                            <i className="icofont-star"></i> 4.5
                          </span>
                        </figure>
                        <div className="course-meta">
                          <div style={{ display: "flex" }}></div>
                          <h5 className="course-title">
                            <a href="course-detail.html" title="">
                              Swagath Residency
                            </a>
                          </h5>
                          <p>3BHK, Gachibowli</p>
                          <ul className="we-video-info">
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
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="course">
                        <figure>
                          <img src={rooms} alt="" />
                          <i className="icofont-book-mark" title="bookmark"></i>
                          <em>Best seller</em>
                          <span className="rate-result">
                            <i className="icofont-star"></i> 4.5
                          </span>
                        </figure>
                        <div className="course-meta">
                          <div style={{ display: "flex" }}></div>
                          <h5 className="course-title">
                            <a href="course-detail.html" title="">
                              Swagath Residency
                            </a>
                          </h5>
                          <p>3BHK, Gachibowli</p>
                          <ul className="we-video-info">
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
      </div>
    </div>
  );
};

export default RecentSearches;
