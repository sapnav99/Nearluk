
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import useExternalScripts from "../hooks/useExternalScripts";
import { Carousel } from "antd";
import SearchBar from "../components/searchbar/SearchBar";



const ImageCarousel = () => {
  useExternalScripts({ urls: ["js/main.min.js", "js/script.js"] });
  return (
    <div>
      {/* LandingPage
      <Link to={"/signup"}>Click here to Signup</Link> */}

      <Carousel autoplay>
        <div>
          <img
            src={banner1}
            alt=""
            style={{ height: "563px", width: "100%", objectFit: "cover" }}
          />
          {/* <h3 style={contentStyle}>1</h3> */}
        </div>
        <div>
          <img
            src={banner2}
            alt=""
            style={{ height: "563px", width: "100%", objectFit: "cover" }}
          />
          {/* <h3 style={contentStyle}>2</h3> */}
        </div>
        <div>
          <img
            src={banner3}
            alt=""
            style={{ height: "563px", width: "100%", objectFit: "cover" }}
          />
          {/* <h3 style={contentStyle}>3</h3> */}
        </div>
      </Carousel>
      <div style={{ marginTop: "-220px", marginBottom: "220px" }}>
        <SearchBar />
      </div>
    </div>
  );
};

export default ImageCarousel;
