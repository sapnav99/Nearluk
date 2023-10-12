import searchlocation from "../../assets/images/searchlocation.png";
import ToggleSwitch from "./Toggle";
import { useState } from "react";
import "./Searchresult.css";
type PropertyType =
  | "Commercial"
  | "Office"
  | "Residential"
  | "Playground"
  | "Parking Spaces"
  | "Hostel/PG"
  | "Event";
const SearchResult = () => {
  const [selectedItems, setSelectedItems] = useState<PropertyType[]>([]);

  const handleItemClick = (item: PropertyType) => {
    if (selectedItems.includes(item)) {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, item]);
    }
  };
  return (
    <section>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div className="col-lg-3">
                  <aside className="sidebar static left">
                    <div className="widget whitish low-opacity">
                      <img src="images/time-clock.png" alt="time clock" />
                      <div
                        className="bg-image"
                        style={{
                          backgroundImage: "url(images/resources/time-bg.jpg)",
                        }}
                      />
                      <div className="date-time">
                        <div className="realtime">
                          <span id="hours">00</span>
                          <span id="point">:</span>
                          <span id="min">00</span>
                        </div>
                        <span id="date" />
                      </div>
                    </div>
                    <div className="widget">
                      <h4 className="widget-title">Complete Your Profile</h4>
                      <span>Your Profile is missing followings!</span>
                      <div
                        data-progress="tip"
                        className="progress__outer"
                        data-value="0.67"
                      >
                        <div className="progress__inner">82%</div>
                      </div>
                      <ul className="prof-complete">
                        <li>
                          <i className="icofont-plus-square" />{" "}
                          <a href="#" title="">
                            Upload Your Picture
                          </a>
                          <em>10%</em>
                        </li>
                        <li>
                          <i className="icofont-plus-square" />{" "}
                          <a href="#" title="">
                            Your University?
                          </a>
                          <em>20%</em>
                        </li>
                        <li>
                          <i className="icofont-plus-square" />{" "}
                          <a href="#" title="">
                            Add Payment Method
                          </a>
                          <em>20%</em>
                        </li>
                      </ul>
                    </div>
                    {/* complete profile widget */}
                    <div className="advertisment-box">
                      <h4 className="">
                        <i className="icofont-info-circle" /> advertisment
                      </h4>
                      <figure>
                        <a href="#" title="Advertisment">
                          <img src="images/resources/ad-widget2.gif" alt="" />
                        </a>
                      </figure>
                    </div>
                    {/* adversment widget */}
                    <div className="widget">
                      <h4 className="widget-title">
                        <i className="icofont-flame-torch" /> Popular Courses
                      </h4>
                      <ul className="premium-course">
                        <li>
                          <figure>
                            <img src="images/resources/course-5.jpg" alt="" />
                            <span className="tag">Free</span>
                          </figure>
                          <div className="vid-course">
                            <h5>
                              <a href="course-detail.html" title="">
                                Wordpress Online video course
                              </a>
                            </h5>
                            <ins className="price">$19/M</ins>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img src="images/resources/course-3.jpg" alt="" />
                            <span className="tag">Premium</span>
                          </figure>
                          <div className="vid-course">
                            <h5>
                              <a href="course-detail.html" title="">
                                Node JS Online video course
                              </a>
                            </h5>
                            <ins className="price">$29/M</ins>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* popular courses */}
                    <div className="widget">
                      <h4 className="widget-title">
                        Recent Blogs{" "}
                        <a className="see-all" href="#" title="">
                          See All
                        </a>
                      </h4>
                      <ul className="recent-links">
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/recentlink-1.jpg"
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a title="" href="#">
                                Moira's fade reach much farther...
                              </a>
                            </h6>
                            <span>2 weeks ago </span>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/recentlink-2.jpg"
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a title="" href="#">
                                Daniel asks The voice of doomfist...
                              </a>
                            </h6>
                            <span>3 months ago </span>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              alt=""
                              src="images/resources/recentlink-3.jpg"
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a title="" href="#">
                                The socimo over watch scandals.
                              </a>
                            </h6>
                            <span>1 day before</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* recent blog */}
                    <div className="widget">
                      <h4 className="widget-title">
                        Your profile has a new Experience section
                      </h4>
                      <p>
                        Showcase your professional experience and education to
                        help potential employers and collaborators find and
                        contact you about career opportunities.
                      </p>
                      <a
                        className="main-btn"
                        href="profile.html"
                        title=""
                        data-ripple
                      >
                        view profile
                      </a>
                    </div>
                    {/* your profile */}
                    <div className="widget web-links stick-widget">
                      <h4 className="widget-title">
                        Useful Links{" "}
                        <a title="" href="#" className="see-all">
                          See All
                        </a>
                      </h4>
                      <ul>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            about
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            career
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            advertise
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            socimo Apps
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            socimo Blog
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            Help
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            socimo Gifts
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            content policy
                          </a>
                        </li>
                        <li>
                          <i className="icofont-dotted-right" />{" "}
                          <a title="" href="#">
                            User Policy
                          </a>
                        </li>
                      </ul>
                      <p>© Socimo 2020. All Rights Reserved.</p>
                    </div>
                    {/* links */}
                  </aside>
                </div>
                <div className="col-lg-9">
                  <div className="category-card">
                    <img src={searchlocation} alt="" className="icon" />
                    <div className="info">
                      <label style={{ color: "gray", paddingTop: "10px" }}>
                        Location: <span>Bachupally</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4>38 Properties near you</h4>
                    <div>
                      <ToggleSwitch Name="photos" />
                    </div>
                    <div>
                      <ul className="searchtabs">
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes(
                              "Commercial"
                            )
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Commercial")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Commercial")}
                        >
                          <a>Commercial</a>
                        </li>
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes("Event")
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Event")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Event")}
                        >
                          <a>Event</a>
                        </li>
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes("Hostel/PG")
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Hostel/PG")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Hostel/PG")}
                        >
                          <a>Hostel/PG</a>
                        </li>
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes("Office")
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Office")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Office")}
                        >
                          <a>Office</a>
                        </li>
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes(
                              "Residential"
                            )
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Residential")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Residential")}
                        >
                          <a>Residential</a>
                        </li>
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes(
                              "Playground"
                            )
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Playground")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Playground")}
                        >
                          <a>Playground</a>
                        </li>
                        <li
                          style={{
                            marginRight: "20px",
                            backgroundColor: selectedItems.includes(
                              "Parking Spaces"
                            )
                              ? "rgba(63, 219, 209, 1)"
                              : "transparent",
                            color: selectedItems.includes("Parking Spaces")
                              ? "black"
                              : "inherit",
                          }}
                          onClick={() => handleItemClick("Parking Spaces")}
                        >
                          <a>Parking Spaces</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="course">
                  <figure>
                    <img
                      src="images/propertyimages/propertyimage_01.png"
                      alt="property image"
                    />
                    <i className="icofont-book-mark" title="bookmark" />
                    <em>Verified</em>
                    <span className="rate-result">
                      <i className="icofont-star" /> 4.5
                    </span>
                  </figure>
                  <div className="course-meta">
                    <div className="post-by">
                      <figure>
                        <em>
                          <svg
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7fba00"
                              stroke="#7fba00"
                              d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                            />
                          </svg>
                        </em>
                        <img alt="" src="images/resources/user7.jpg" />
                      </figure>
                      <div className="friend-name">
                        <div className="more">
                          <div className="more-post-optns">
                            <i className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-more-horizontal"
                              >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={19} cy={12} r={1} />
                                <circle cx={5} cy={12} r={1} />
                              </svg>
                            </i>
                            <ul>
                              <li>
                                <i className="icofont-pen-alt-1" />
                                Edit Post
                                <span>Edit This Post within a Hour</span>
                              </li>
                              <li>
                                <i className="icofont-ban" />
                                Hide Post
                                <span>Hide This Post</span>
                              </li>
                              <li>
                                <i className="icofont-ui-delete" />
                                Delete Post
                                <span>If inappropriate Post By Mistake</span>
                              </li>
                              <li>
                                <i className="icofont-flag" />
                                Report
                                <span>Inappropriate content</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ins>
                          <a title="verified" href="time-line.html">
                            Andrew
                          </a>{" "}
                          Post Audio
                        </ins>
                        <span>
                          <i className="icofont-globe" /> published: Sep,15 2020
                        </span>
                      </div>
                    </div>
                    <div className="prise row">
                      <div className="col-lg-8">
                        <h5 className="course-title">
                          <a href="course-detail.html" title="course-details">
                            Rose Wood Villa
                          </a>
                        </h5>
                        <p
                          style={{
                            fontSize: "11px",
                            marginBottom: "0",
                            lineHeight: "15px",
                          }}
                        >
                          Harithavanam Colony <br />
                          Bachupally, Hyderabad
                        </p>
                        
                      </div>
                      <div className="col-lg-4 mt-2 ">
                        <span>
                          <b>
                            <span>&#8377;</span> 29 Lac
                          </b>
                        </span>
                      </div>
                    </div>
                    <div className="course-info">
                      <span className="lecturez">
                        <i className="icofont-film" /> 20 Lectures
                      </span>

                      <span className="lecturez">
                        <i className="icofont-film" /> car Parking
                      </span>
                    </div>
                    <div className="we-video-info">
                      <ul>
                        <li>
                          <span title="views" className="views">
                            <i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-eye"
                              >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                              </svg>
                            </i>
                            <ins>1.2k</ins>
                          </span>
                        </li>
                        <li>
                          <span title="Comments" className="Recommend">
                            <i>
                              <svg
                                className="feather feather-message-square"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={2}
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                height={16}
                                width={16}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              </svg>
                            </i>
                            <ins>54</ins>
                          </span>
                        </li>
                        <li>
                          <span title="follow" className="Follow">
                            <i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-star"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            </i>
                            <ins>5k</ins>
                          </span>
                        </li>
                        <li>
                          <span className="share-pst" title="Share">
                            <i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-share-2"
                              >
                                <circle cx={18} cy={5} r={3} />
                                <circle cx={6} cy={12} r={3} />
                                <circle cx={18} cy={19} r={3} />
                                <line
                                  x1="8.59"
                                  y1="13.51"
                                  x2="15.42"
                                  y2="17.49"
                                />
                                <line
                                  x1="15.41"
                                  y1="6.51"
                                  x2="8.59"
                                  y2="10.49"
                                />
                              </svg>
                            </i>
                            <ins>205</ins>
                          </span>
                        </li>
                      </ul>
                     
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content */}
    </section>
  );
};

export default SearchResult;
