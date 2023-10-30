import { useEffect } from "react";
import Content from "../../components/content/Content";
import Sectionbar from "../../components/sectionbar/Sectionbar";
import { useDispatch, useSelector  } from "react-redux";
import { allpropdataactions } from "./redux/action";

import SearchBarBeforeLogin from "../../components/searchbar/SearchBar1";
import SearchBar from "../../components/searchbar/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty([]));
  }, []);
  const isLoggedIn = useSelector(
    (state: any) => state?.loginReducer?.isLoggedIn
  );
  return (
    <div>
      {isLoggedIn? <SearchBar />:<SearchBarBeforeLogin/>}
     

      <Sectionbar />
      <Content />
    </div>
  );
};

export default Home;
