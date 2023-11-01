import FlatmateFinder from "./Flatmatefinder";
import ServicesAd from "./ServicesAd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import right from "../../assets/images/Right.png";
import left from "../../assets/images/Left.png";
const Allads = () => {
  return (
    <div className="container" style={{marginBottom:"80px"}}>
<div className="row">
      <div
        className="prevadd col-lg-1"
        slot="container-start"
        style={{ marginTop: "200px" }}
      >
        <img src={left} alt="" />
      </div>
      <div className="col-lg-10">
        <Swiper
          modules={[Pagination, Autoplay, Navigation, EffectFade]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".nextagent",
            prevEl: ".prevagent",
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
          <ServicesAd />
          </SwiperSlide>
          <SwiperSlide>
          <FlatmateFinder />
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div
        className="nextadd col-lg-1"
        slot="container-end"
        style={{ marginTop: "200px" }}
      >
        <img src={right} alt="" />
      </div>
    </div>
    </div>
    
  );
};
export default Allads;
