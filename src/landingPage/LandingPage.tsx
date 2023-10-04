
import ImageCarousel from "./ImageCarousel";

import Services from "./services/Services";
import Ownerproperties from "./Properties/Ownerproperties";
import SearchProperty from "./Properties/SearchProperties";

import Featured from "./Properties/Featured";
import EventSpaces from "./Properties/EventSpaces";
import AgentProperties from "./agents/AgentProperties";
import ServicesAd from "./ads/ServicesAd";
import RecentSearches from "./Properties/RecentSeach";
import TopProjects from "./Properties/TopPojects";
import Trending from "./Properties/Trending";

import Plots from "./Properties/Plots";




const LandingPage = () => {
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
