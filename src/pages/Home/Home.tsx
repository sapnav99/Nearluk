import { useEffect } from "react";
import Content from "../../components/content/Content";
import Sectionbar from "../../components/sectionbar/Sectionbar";
import { useDispatch } from "react-redux";
import { allpropdataactions } from "./redux/action";
import SearchBarBeforeLogin from "../../components/searchbar/SearchBar1";
// import SearchBar from "../../components/searchbar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);

  return (
    <div>
      <SearchBarBeforeLogin />

      <Sectionbar />
      <Content />
    </div>
  );
};

export default Home;
