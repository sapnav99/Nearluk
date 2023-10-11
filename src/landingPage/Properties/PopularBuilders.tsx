import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
import greenmark from "../../assets/images/Greenmark.png";
import auro from "../../assets/images/Auro.png";
import anuhar from "../../assets/images/Anuhar.png";
import lanco from "../../assets/images/lanco.png";
import smr from "../../assets/images/smr.png";
import vertex from "../../assets/images/vertex.png";
import './PopularBuilder.css'
const PopularBuilders = () => {
  return (
    <div>
      <div
        className="gap"
        style={{ backgroundColor: "rgba(226, 255, 253, 1)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="col-lg-1 prev"
                  slot="container-start"
                  style={{ marginTop: "60px" }}
                >
                  <img src={left} alt="" />
                </div>
                <div className="col-lg-10">
                <h4 className="main-title">Popular Builders</h4>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={-320}
                  slidesPerView={2}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  navigation={{
                    nextEl: ".next",
                    prevEl: ".prev",
                  }}
                >
                 
                    <SwiperSlide>
                      <div
                        className="pill col-lg-6"
                        
                      >
                        <div className="popularBuilders">
                          <figure className="figurep">
                            <img alt="" src={vertex} style={{paddingTop:"25px"}}/>
                          </figure>
                          <div style={{marginLeft:"10px"}}>
                          <div className="builders">
                            <label>Vertex Homes</label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span className="span1">
                            23 Total Projects | 15 in this city
                            </span>
                            <span className="span2">Price Range : 69.56 L to 1.5 Cr</span>
                           
                          </div>
                          </div>
                         
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="pill col-lg-6"
                        
                      >
                        <div className="popularBuilders">
                          <figure className="figurep">
                            <img alt="" src={greenmark} style={{paddingTop:"35px"}}/>
                          </figure>
                         <div style={{marginLeft:"10px"}}>
                         <div className="builders">
                            <label>Green Mark</label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span className="span1">
                            23 Total Projects | 15 in this city
                            </span>
                            <span className="span2">Price Range : 69.56 L to 1.5 Cr</span>
                           
                          </div>
                         </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="pill col-lg-6"
                        
                      >
                        <div className="popularBuilders">
                          <figure className="figurep">
                            <img alt="" src={auro} style={{paddingTop:"40px"}}/>
                          </figure>
                          <div style={{marginLeft:"10px"}}>
                          <div className="builders">
                            <label>Auro Realty</label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span className="span1">
                            23 Total Projects | 15 in this city
                            </span>
                            <span className="span2">Price Range : 69.56 L to 1.5 Cr</span>
                          </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="pill col-lg-6"
                        
                      >
                        <div className="popularBuilders">
                          <figure className="figurep">
                            <img alt="" src={anuhar} style={{paddingTop:"25px"}}/>
                          </figure>
                          <div style={{marginLeft:"10px"}}>
                          <div className="builders">
                            <label>Anuhar Homes</label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                             <span className="span1">
                            23 Total Projects | 15 in this city
                            </span>
                            <span className="span2">Price Range : 69.56 L to 1.5 Cr</span>
                          </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="pill col-lg-6"
                        
                      >
                        <div className="popularBuilders">
                          <figure className="figurep">
                            <img alt="" src={lanco} style={{paddingTop:"15px", paddingLeft:"20px"}}/>
                          </figure>
                         <div style={{marginLeft:"10px"}}>
                         <div className="builders">
                            <label>Lanco Hills</label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                             <span className="span1">
                            23 Total Projects | 15 in this city
                            </span>
                            <span className="span2">Price Range : 69.56 L to 1.5 Cr</span>
                          </div>
                         </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="pill col-lg-6"
                        
                      >
                        <div className="popularBuilders">
                          <figure className="figurep">
                            <img alt="" src={smr} style={{paddingTop:"35px"}}/>
                          </figure>
                          <div style={{marginLeft:"10px"}}>
                          <div className="builders">
                            <label>SMR Holdings</label>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "12px",
                            }}
                          >
                            <span className="span1">
                            23 Total Projects | 15 in this city
                            </span>
                            <span className="span2">Price Range : 69.56 L to 1.5 Cr</span>
                          </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    </Swiper>
                  </div>
               
                <div
                  className="next col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "60px" }}
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

export default PopularBuilders;
