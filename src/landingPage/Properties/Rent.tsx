import "./Rent.css";
import house from "../../assets/images/House.jpg";
import villa from "../../assets/images/villa3.jpg";
import apartment from "../../assets/images/Apartment.jpg";
import office from "../../assets/images/office.jpg";
import "./EventSpace.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";

const Rent = () => {
  return (
    <div>
      <div className="gap" style={{ backgroundColor: "#E2FFFD" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="page-contents" className="row merged20">
                <div
                  className="prev col-lg-1"
                  slot="container-start"
                  style={{ marginTop: "60px" }}
                >
                  <img src={left} alt="" />
                </div>
                {/* <div className="d-flex justify-content-center align-items-center "> */}
                <div className="col-lg-10 ">

                {/* <h4 className="main-title">
                    Categories
                    <a title="" href="#" className="view-all">
                      view all
                    </a>
                  </h4> */}
                  <Swiper
                    modules={[Pagination, Autoplay, Navigation, EffectFade]}
                    spaceBetween={-750}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    navigation={{
                      nextEl: ".next",
                      prevEl: ".prev",
                    }}
                    pagination={{ clickable: true }}
                    rewind={true}
                  >
                    <div className="row" style={{ marginBottom: "-80px" }}>
                    <SwiperSlide>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <div className="rents">
                            <i>
                              <img src={house} alt="" />
                            </i>

                            <div className="overlay-text">
                              <label>Houses for Rent</label>
                              <p>1929 properties</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <div className="rents">
                            <i>
                              <img src={villa} alt="" />
                            </i>
                            <div className="overlay-text">
                              <label>Villas for Rent</label>
                              <p>1929 properties</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <div className="rents">
                            <i>
                              <img src={office} alt="" />
                            </i>
                            <div className="overlay-text">
                              <label>Commercial Spaces for Rent</label>
                              <p>1929 properties</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                          <div className="rents">
                            <i>
                              <img src={apartment} alt="" />
                            </i>
                            <div className="overlay-text">
                              <label>Apartments for Rent</label>
                              <p>1929 properties</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>


                    </div>
                  </Swiper>
                </div>
                <div
                  className="next col-lg-1"
                  slot="container-end"
                  style={{ marginTop: "60px" }}
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

export default Rent;
