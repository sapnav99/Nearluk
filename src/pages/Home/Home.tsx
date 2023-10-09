import { useEffect } from "react";
import Content from "../../components/content/Content";
// import SearchBar from "../../components/searchbar/SearchBar";
import Sectionbar from "../../components/sectionbar/Sectionbar";
import { useDispatch } from "react-redux";
import { allpropdataactions } from "./redux/action";
import SearchBarBeforeLogin from "../../components/searchbar/SearchBar1";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);

  return (
    <div>
      <SearchBarBeforeLogin />
      <Sectionbar />
      <Content  />
    </div>
  );
};

export default Home;
