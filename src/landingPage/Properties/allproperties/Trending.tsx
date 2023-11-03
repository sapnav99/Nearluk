import { useState, useEffect } from "react";
import Apis from "../../../api/apiServices";
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
import "../event/EventSpace.css";

import { useNavigate } from "react-router-dom";
import ImageComponent from "../../image/ImageComponent";

type trendingProps = {
  pageNumber: any;
  pageSize: number;
  setPageNumber: any;
};


const Trending = (
  {
  pageNumber,
  pageSize,
  setPageNumber,
}: trendingProps) => {
  
  const [propertyArray, setPropertyArray] = useState([]);
  
  const navigate = useNavigate();
  const handleTrendingClick = (trending: any) => {
    navigate("./viewall", { state: { propertyTrending: trending } });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Apis.get(
          `/property/getAllProperty?city=hyderabad&pageNumber=${pageNumber}&pageSize=${pageSize}`
        );

        setPropertyArray(response?.data?.data);
        setPageNumber(pageNumber)
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNumber, pageSize]);

  return (
    <div>
      <div className="gap" style={{ backgroundColor: "#E2FFFD" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prevtop col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "160px" }}
                >
                  <img src={left} alt="" />
                </div>

                <div className="col-lg-10 ">
                  <h4 className="main-title">
                    Trending in Hyderabad{" "}
                    <a
                      title=""
                      href="viewall"
                      className="view-all"
                      style={{ fontSize: "14px" }}
                      onClick={()=>handleTrendingClick("propertyTrending")}
                    >
                      View all
                    </a>
                  </h4>
                  <Swiper
                    modules={[
                      Pagination,
                      Autoplay,
                      Navigation,
                      EffectFade,
                      Virtual,
                    ]}
                    spaceBetween={-650}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".nexttop",
                      prevEl: ".prevtop",
                    }}
                    pagination={{ clickable: true }}
                    loop={true}
                    virtual
                  >
                    <div className="row" style={{ marginBottom: "-80px" }}>
                      {propertyArray.length > 0
                        ? propertyArray.slice(0, 5).map((item: any, i: any) => (
                            <SwiperSlide key={i}>

                              <div
                                className="col-lg-4 col-md-6 col-sm-6"
                                
                              >
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
                                    <div style={{ display: "flex" }}></div>
                                    <h5 className="course-title">
                                      <a href="course-detail.html" title="">
                                        {item?.property?.building_name || "N/A"}
                                      </a>
                                    </h5>
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
                                      <ul>
                                        {item?.amenities?.map(
                                          (amenity: any, index: any) => (
                                            <li key={index}>
                                              {amenity?.label}
                                            </li>
                                          )
                                        )}
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
                  className="nexttop col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "160px" }}
                >
                  <img src={right} alt="" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
