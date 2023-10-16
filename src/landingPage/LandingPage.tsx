
import ImageCarousel from "./Carousel/ImageCarousel";

import Services from "./services/Services";
import Ownerproperties from "./Properties/Ownerproperties";
import SearchProperty from "./Properties/SearchProperties";

import Featured from "./Properties/Featured";
import EventSpaces from "./Properties/EventSpaces";
import AgentProperties from "./agents/AgentProperties";
import RecentSearches from "./Properties/RecentSeach";
import TopProjects from "./Properties/TopPojects";
import Trending from "./Properties/Trending";
import Rent from "./Properties/Rent";
import Plots from "./Properties/Plots";
import PopularAgents from "./agents/PopularAgents";
import PopularBuilders from "./Properties/PopularBuilders";
import NewlyLaunched from "./Properties/NewlyLaunched";
import Allads from "./ads/Allads";



const LandingPage = () => {
  return (
    <div>
      <ImageCarousel />
      <SearchProperty />
      <Featured />
      <Services />
      <PopularAgents />
      <Ownerproperties />
      <EventSpaces />
      <AgentProperties />
      <Allads />
      <RecentSearches />
      <TopProjects />
      <Trending />
      <Plots />
      <Rent/>
      <PopularBuilders/>
      <NewlyLaunched/>
    </div>
  );
};

export default LandingPage;
