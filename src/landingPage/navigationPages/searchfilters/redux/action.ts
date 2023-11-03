
import { allFilterData } from './type';

 const setFilters = (filters:any) => ({
  type: allFilterData.SET_FILTERS,
  payload: filters,
});



 const setSearchData = (searchData:any) => ({
  type: allFilterData.SET_SEARCH_DATA,
  payload: searchData,
});
export const filterActions={
    setFilters,
    setSearchData
}