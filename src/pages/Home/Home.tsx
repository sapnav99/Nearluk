import { useEffect } from "react";
import Content from "../../components/content/Content";
import SearchBar from "../../components/searchbar/SearchBar";
import Sectionbar from "../../components/sectionbar/Sectionbar";
// import Sectionbar from "../../components/sectionbar/__test__/Sectionbar";
import { useDispatch, useSelector } from "react-redux";
import { allpropdataactions } from "./redux/action";
import {ThreeCircles} from "react-loader-spinner"
// import "../../../dist/css/owl.carousel.css"

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);

  const loader: any = useSelector((state: any) => state?.homeReducer?.allPropertyLoader)
  // console.log(loader)
  if(loader) return <ThreeCircles
  height="50"
  width="100"
  color="#4fa94d"
  wrapperStyle={{display: "flex",alignItem: "center",justifyContent: "center"}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>

  return (
    <div>
      <SearchBar />
      <Sectionbar />
      <Content  />
    </div>
  );
};

export default Home;
