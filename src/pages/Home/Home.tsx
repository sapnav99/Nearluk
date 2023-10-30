import { useEffect, useState } from "react";
import Content from "../../components/content/Content";
import SearchBar from "../../components/searchbar/SearchBar";
import Sectionbar from "../../components/sectionbar/Sectionbar";
import { useDispatch, useSelector } from "react-redux";
import { allpropdataactions } from "./redux/action";
import { ThreeCircles } from "react-loader-spinner";
import "./index.css";
import useExternalScripts from "../../hooks/useExternalScripts";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;
  useExternalScripts({ urls: ["js/owl.carousel.min.js"] });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty({ pageNumber, pageSize }));
  }, [pageNumber]);

  const loader: any = useSelector(
    (state: any) => state?.homeReducer?.allPropertyLoader
  );
  const initialFetch = useSelector(
    (state: any) => state?.homeReducer?.initialFetrchComplete
  );
  // console.log(loader)
  if (loader === true && initialFetch === false)
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
      {/* <Sectionbar /> */}
      <Content
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Home;
