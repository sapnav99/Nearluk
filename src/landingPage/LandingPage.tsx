import React from "react";
import ImageCarousel from "./ImageCarousel";
import SearchBar from "../components/searchbar/SearchBar";
import Services from "./services/Services";
import Ownerproperties from "./Properties/Ownerproperties";
import SearchProperty from "./Properties/SearchProperties";
import PopularAgents from "./agents/PopularAgents";
import Featured from "./Properties/Featured";
import EventSpaces from "./Properties/EventSpaces";
import AgentProperties from "./agents/AgentProperties";
import ServicesAd from "./ads/ServicesAd";
import RecentSearches from "./Properties/RecentSeach";
import TopProjects from "./Properties/TopPojects";
import Trending from "./Properties/Trending";

import Plots from "./Properties/Plots";
import Rent from "./Properties/Rent";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <ImageCarousel />
      <SearchProperty />
      <Featured />
      <Services />
      {/* <PopularAgents /> */}
      <Ownerproperties />
      <EventSpaces />
      <AgentProperties />
      <ServicesAd />
      <RecentSearches />
      <TopProjects />
      <Trending />
      <Plots />
      {/* <Rent/> */}
      
    </div>
  );
};

export default LandingPage;
