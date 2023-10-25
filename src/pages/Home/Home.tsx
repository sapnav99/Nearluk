import { useEffect } from "react";
import Content from "../../components/content/Content";
import SearchBar from "../../components/searchbar/SearchBar";
import Sectionbar from "../../components/sectionbar/Sectionbar";
import { useDispatch, useSelector } from "react-redux";
import { allpropdataactions } from "./redux/action";
import { ThreeCircles } from "react-loader-spinner";
import "./index.css";
import useExternalScripts from "../../hooks/useExternalScripts";

const Home = () => {
  useExternalScripts({ urls: ["js/owl.carousel.min.js"] });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);

  const allProperty = useSelector(
    (state: any) => state?.homeReducer?.allProperty
  );

  console.log(allProperty);

  const loader: any = useSelector(
    (state: any) => state?.homeReducer?.allPropertyLoader
  );
  // console.log(loader)
  if (loader)
    return (
      <div className="full-screen-loader">
        <ThreeCircles
          height="50"
          width="100"
          color="#4fa94d"
          wrapperStyle={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );

  return (
    <div>
      <SearchBar />
      <Sectionbar />
      <Content />
    </div>
  );
};

export default Home;
