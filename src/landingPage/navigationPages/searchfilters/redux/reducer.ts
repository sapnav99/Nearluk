// filtersReducer.js
import { allFilterData } from "./type";

const initialState = {
    bhk: '',
    construction_status: '',
    posted_by: '',
    city: '',
    selectedItems: '',
    minprise: '',
    maxprise: '',
  selectedFacing: '',
  selectedFurnishing: '',
  minValue: '',
  maxValue: '',
  constructionAge: '',
};

const filtersReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case allFilterData.SET_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
      case allFilterData.SET_SEARCH_DATA:
        return{
            ...state,
            ...action.payload,
        }
    default:
      return state;
  }
};

export default filtersReducer;
