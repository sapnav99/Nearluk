import villa2 from "../../assets/images/villa2.jpg";
import profile from "../../assets/images/profilePhoto.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";

const Ownerproperties = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "-" + month + "-" + year;

  const propertyArray = Array.from({ length: 8 });

  return (
    <div className="gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="page-contents" className="row merged20">
            <div
                className="prevowner col-lg-1"
                slot="container-start"
                style={{ marginTop: "160px" }}
              >
                <img src={left} alt="" />
              </div>
              {/* <div className="d-flex justify-content-center align-items-center "> */}
              <div className="col-lg-10">
                <div className="main-title">Owner Properties</div>
                <Swiper
                  modules={[Pagination, Autoplay, Navigation, EffectFade]}
                  spaceBetween={-650}
                  slidesPerView={1}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".nextowner",
                    prevEl: ".prevowner",
                  }}
                  pagination={{ clickable: true }}
                    loop={true}
                >
                  <div className="row " style={{ marginBottom: "-80px" }}>

                    {propertyArray.map((_, index) => (
                      <SwiperSlide>
                        <div
                          className="col-lg-4 col-md-6 col-sm-6 "
                      key={index}
                        >
                          <div className="course">
                            <figure>
                              <img
                                src={villa2}
                                alt=""

                              />
                              <i
                                className="icofont-book-mark"
                                title="bookmark"
                              ></i>
                              <em>Best seller</em>
                              <span className="rate-result">
                                <i className="icofont-star"></i> 4.5
                              </span>
                            </figure>
                            <div className="course-meta">
                              <div style={{ display: "flex" }}>
                                <div className="post-by">
                                  <figure>
                                    <img src={profile} alt="" />
                                  </figure>
                                  <div
                                    style={{
                                      marginLeft: "5px",
                                      marginTop: "5px",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontWeight: "500",
                                        color: "rgba(55, 142, 108, 1)",
                                      }}
                                    >
                                      Sarah K
                                    </span>
                                    <div
                                      className="course-cat"
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        paddingBottom: "0px",
                                        paddingRight: "65px",
                                        paddingLeft: "0px",
                                        paddingTop: "0px",
                                      }}
                                    >
                                      <span>Posted on:</span>

                                      <span
                                        id="date"
                                        style={{ paddingLeft: "0px" }}
                                      >
                                        {currentDate}
                                      </span>
                                    </div>
                                   
                                  </div>
                                </div>
                                <div className="prise">
                                  <span>&#8377;30L</span>
                                </div>
                              </div>
                              <h5 className="course-title">
                                <a href="course-detail.html" title="">
                                  Modern villa with pool
                                </a>
                              </h5>
                              <p>3BHK, Gachibowli</p>
                              <div className="we-video-info">
                                <ul style={{ width: "80%" }}>
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
                                    <span
                                      title="Comments"
                                      className="Recommend"
                                    >
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
                                  {/* <li>
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
                                </li> */}
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
                                  <li>
                                    <a
                                      href="blog-detail.html"
                                      title=""
                                      className="button primary circle"
                                      style={{
                                        paddingBlock: "10px",
                                        paddingInline: "10px",
                                      }}
                                    >
                                      View Details
                                    </a>
                                  </li>
                                </ul>
                               
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>


                    ))}
                  </div>
                </Swiper>
              </div>
              {/* </div> */}
              <div
                className="nextowner col-lg-1"
                slot="container-end"
                style={{ marginTop: "160px" }}
              >
                <img src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownerproperties;
