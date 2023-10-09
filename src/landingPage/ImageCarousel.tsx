import React from "react";
import useExternalScripts from "../hooks/useExternalScripts";
import { Carousel } from "antd";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import SearchBarBeforeLogin from "../components/searchbar/SearchBar1";


const ImageCarousel = () => {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });

  const overlayContainerStyle: React.CSSProperties = {
    position: "relative",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.1)", 
    zIndex: 1, 
  };

  const contentStyle: React.CSSProperties = {
    height: "500px",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div style={overlayContainerStyle}>
      <Carousel autoplay>
        <div>
          <div style={overlayStyle}></div>
          <img src={banner1} alt="" style={contentStyle} />
        </div>
        <div>
          <div style={overlayStyle}></div>
          <img src={banner2} alt="" style={contentStyle} />
        </div>
        <div>
          <div style={overlayStyle}></div>
          <img src={banner3} alt="" style={contentStyle} />
        </div>
      </Carousel>
      {/* SearchBar placed outside overlay-container */}
      <div style={{ marginTop: "-220px", marginBottom: "220px" }}>
        <SearchBarBeforeLogin />
      </div>
    </div>
  );
};

export default ImageCarousel;
