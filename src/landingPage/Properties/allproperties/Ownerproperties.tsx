import moment from "moment";
import { useState, useEffect } from "react";
import '../../LandingPage.css'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
  Virtual,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import "swiper/css/virtual";
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import Apis from "../../../api/apiServices";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../../image/ImageComponent";

const Ownerproperties = () => {
  const navigate = useNavigate();
  const handleOwnerClick = (owner: any) => {
    navigate("./viewall", { state: { ownerProperty: owner } });
  };
  const [propertyArray, setPropertyArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get(
          "/property/propertyByCategory?sub_category=Residential"
        );

        setPropertyArray(response?.data?.data);
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


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
                <div className="main-title">
                  Owner Properties{" "}
                  <a
                    title=""
                    href="viewall"
                    onClick={()=>handleOwnerClick('ownerProperty')}
                    className="view-all"
                    style={{ fontSize: "14px" }}
                  >
                    View all
                  </a>
                </div>
                <Swiper
                  modules={[
                    Pagination,
                    Autoplay,
                    Navigation,
                    EffectFade,
                    Virtual,
                  ]}
                  spaceBetween={-680}
                  slidesPerView={1}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".nextowner",
                    prevEl: ".prevowner",
                  }}
                  pagination={{ clickable: true }}
                  loop={true}
                  virtual
                >
                  <div className="row " style={{ marginBottom: "-80px" }}>
                    {propertyArray.length > 0
                      ? propertyArray.slice(0, 5).map((item: any, i: any) => (
                          <SwiperSlide key={i}>
                            <div className="col-lg-4 col-md-6 col-sm-6 ">
                              <div className="nearluk">
                                <figure>
                                  {item?.property?.image_gallery && (
                                    <ImageComponent
                                      url={
                                        item?.property?.image_gallery[0]
                                          ?.serveruri
                                      }
                                      
                                    />
                                  )}
                                  <i
                                    className="icofont-book-mark"
                                    title="bookmark"
                                  ></i>
                                  {/* <em>Best seller</em> */}
                                  <span className="rate-result">
                                    <i className="icofont-star"></i> 4.5
                                  </span>
                                </figure>
                                <div className="course-meta">
                                  <div style={{ display: "flex" }}>
                                    <div className="post-by">
                                      <figure>
                                        <img
                                          src="public/images/profilepic/profilepic_01.jpg"
                                          alt=""
                                        />
                                      </figure>
                                      <div
                                        style={{
                                          width: "155px",
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
                                          {item?.property_owner?.fname}
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
                                            {moment(
                                              item?.property?.createdAt
                                            ).format("DD-MM-YYYY")}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="prise"
                                      style={{ height: "fit-content" }}
                                    >
                                      <span>
                                        &#8377;{item?.property?.expected_price}
                                      </span>
                                    </div>
                                  </div>
                                  <h6 className="course-title">
                                    <a href="course-detail.html" title="">
                                      {item?.property?.building_name || "N/A"}
                                    </a>
                                  </h6>
                                  <p
                                    style={{
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                    }}
                                  >
                                    {item?.property?.locality || "N/A"}
                                  </p>

                                  <div className="we-video-info">
                                    <ul style={{ width: "100%" }}>
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

                                      <li>
                                        <span
                                          className="share-pst"
                                          title="Share"
                                        >
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
                                        <button
                                          style={{
                                            marginLeft: "28px",
                                            backgroundColor: "#3FDBD1",
                                            borderRadius: "25px",
                                            paddingBlock: "5px",
                                            width: "100px",
                                          }}
                                        >
                                          View Details
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))
                      : "no data found"}
                  </div>
                </Swiper>
              </div>

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
