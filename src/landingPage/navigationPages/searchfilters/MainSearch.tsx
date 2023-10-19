import { useState } from "react";
import AdvancedSearch from "../../components/searchbar/AdvancedSearch";
import SearchResult from "./SearchResultPage";


const SearchContainer = () => {
  const [advancedSearchData, setAdvancedSearchData] = useState(null);

  const handleSearch = (data:any) => {
    setAdvancedSearchData(data);
  };

  return (
    <div>
      <AdvancedSearch onSearch={handleSearch} />
      <SearchResult advancedSearchData={advancedSearchData} />
    </div>
  );
};

export default SearchContainer;
