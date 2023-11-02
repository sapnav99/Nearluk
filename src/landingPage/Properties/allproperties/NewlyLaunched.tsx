import { useState, useEffect } from "react";
import "./NewlyLaunched.css";
import "../../agents/AgentProperty.css";
import Apis from "../../../api/apiServices";
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
import right from "../../../assets/images/Right.png";
import left from "../../../assets/images/Left.png";
import { useNavigate } from "react-router-dom";

const NewlyLaunched = () => {
  const navigate = useNavigate();
  const handleNewlyClick = (newLaunch: any) => {
    navigate("./viewall", { state: { newlyLaunched: newLaunch } });
  };

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get("/property/home?city=hyderabad");

        setProperties(response?.data?.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="gap" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevlaunched col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "4px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10" style={{ marginTop: "-80px" }}>
                  <div className="main-title">
                    Newly Launched Projects{" "}
                    <a
                      title=""
                      href="viewall"
                      className="view-all"
                      style={{ fontSize: "14px" }}
                      onClick={() => handleNewlyClick("newProperty")}
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
                    spaceBetween={-550}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nextlaunched",
                      prevEl: ".prevlaunched",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    virtual
                  >
                    <div style={{ display: "flex", marginBottom: "-60px" }}>
                      {properties.length > 0
                        ? properties.slice(0, 5).map((item: any, i: any) =>
                            item.newProperty.length > 0
                              ? item.newProperty.map(
                                  (newItem: any, index: any) => (
                                    <SwiperSlide key={i + index}>
                                      <div className="blogposts col-lg-6 col-sm-12 col-md-12">
                                        <figure>
                                          {newItem?.property?.image_gallery && (
                                            <img
                                              className="newlylaunchedimages"
                                              src={
                                                newItem?.property
                                                  ?.image_gallery[0]?.serveruri
                                              }
                                              alt=""
                                            />
                                          )}
                                        </figure>
                                        <div
                                          className="blogpost_meta"
                                          style={{
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "start",
                                            flexDirection: "column",
                                            width: "100%",
                                          }}
                                        >
                                          <h6
                                            style={{
                                              marginTop: "30px",
                                              width: "180px",
                                              overflow: "hidden",
                                              whiteSpace: "nowrap",
                                              textOverflow: "ellipsis",
                                            }}
                                          >
                                            {newItem?.property?.building_name ||
                                              "N/A"}
                                          </h6>
                                          <label
                                            style={{
                                              // paddingLeft: "5px",
                                              fontSize: "12px",
                                              width:"180px",
                                              overflow: "hidden",
                                              whiteSpace: "nowrap",
                                              textOverflow: "ellipsis",
                                            }}
                                          >
                                            {newItem.property.locality}
                                          </label>
                                          <div
                                            className="expprise"
                                            style={{ height: "fit-content" }}
                                          >
                                            <span>
                                              &#8377;
                                              {
                                                newItem?.property
                                                  ?.expected_price
                                              }
                                            </span>
                                          </div>
                                          <div className="we-video-info">
                                            <ul style={{ width: "100%" }}>
                                              <li>
                                                <button
                                                  style={{
                                                    // marginLeft: "20px",
                                                    // marginTop:"10px",
                                                    marginRight: "80px",
                                                    marginBottom: "10px",
                                                    backgroundColor: "#3FDBD1",
                                                    borderRadius: "25px",
                                                    paddingBlock: "5px",
                                                    width: "100px",
                                                  }}
                                                >
                                                  View Details
                                                </button>
                                              </li>
                                              <li>
                                                <span
                                                  title="views"
                                                  className="views"
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
                                                      className="feather feather-eye"
                                                    >
                                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                      <circle
                                                        cx={12}
                                                        cy={12}
                                                        r={3}
                                                      />
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
                                                      <circle
                                                        cx={18}
                                                        cy={5}
                                                        r={3}
                                                      />
                                                      <circle
                                                        cx={6}
                                                        cy={12}
                                                        r={3}
                                                      />
                                                      <circle
                                                        cx={18}
                                                        cy={19}
                                                        r={3}
                                                      />
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
                                    </SwiperSlide>
                                  )
                                )
                              : "No featured properties available"
                          )
                        : "no data found"}
                    </div>
                  </Swiper>
                </div>
                <div
                  className="nextlaunched col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "4px" }}
                >
                  <img src={right} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewlyLaunched;
