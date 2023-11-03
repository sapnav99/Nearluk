import ImageCarousel from "./Carousel/ImageCarousel";

import Services from "./Properties/services/Services";
import Ownerproperties from "./Properties/allproperties/Ownerproperties";
import SearchProperty from "./Properties/services/SearchProperties";

import Featured from "./Properties/featured/Featured";
import EventSpaces from "./Properties/event/EventSpaces";
import AgentProperties from "./agents/AgentProperties";
import RecentSearches from "./Properties/services/RecentSeach";
// import TopProjects from "./Properties/TopPojects";
import Trending from "./Properties/allproperties/Trending";
import Rent from "./Properties/services/Categories";
import Plots from "./Properties/allproperties/Plots";
import PopularAgents from "./agents/PopularAgents";
import PopularBuilders from "./agents/PopularBuilders";
import NewlyLaunched from "./Properties/allproperties/NewlyLaunched";
import Allads from "./ads/Allads";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useExternalScripts from "../hooks/useExternalScripts";
import { allpropdataactions } from "../pages/Home/redux/action";
import { searchActions } from "./navigationPages/redux/action";
const LandingPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;
  useExternalScripts({ urls: ["js/owl.carousel.min.js"] });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allpropdataactions.fetchAllProperty({ pageNumber, pageSize }));
  }, [pageNumber]);
  useEffect(()=>{
    dispatch(searchActions.fetchCategoryProperty({ pageNumber, pageSize }))
  }, [pageNumber])
  return (
    <div>
      <ImageCarousel />
      <SearchProperty />
      <Featured />
      <Rent   pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}
        />
      <RecentSearches   pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}/>
      <Services />
      <Ownerproperties />
      <EventSpaces />
      <PopularAgents />
      <AgentProperties />
      <Allads />
      {/* <TopProjects /> */}
      <Trending   pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}/>
      <Plots pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        pageSize={pageSize}/>
      <NewlyLaunched />
      <PopularBuilders />
      
    </div>
  );
};

export default LandingPage;
