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

const LandingPage = () => {
  return (
    <div>
      <ImageCarousel />
      <SearchProperty />
      <Featured />
      <Rent />
      <RecentSearches />
      <Services />
      <Ownerproperties />
      <EventSpaces />
      <PopularAgents />
      <AgentProperties />
      <Allads />
      {/* <TopProjects /> */}
      <Trending />
      <Plots />
      <NewlyLaunched />
      <PopularBuilders />
      
    </div>
  );
};

export default LandingPage;
