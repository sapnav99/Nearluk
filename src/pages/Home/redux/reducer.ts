import { getAllpropdata } from "./type";

const initialState = {
  allProperty: [],
  allPropertyLoader: false,
  initialFetrchComplete: false,
};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getAllpropdata.FETCH_ALL_PROPERTY:
      return {
        ...state,
        allPropertyLoader: true,
      };
    case getAllpropdata.SET_ALL_PROPERTY:
      return {
        ...state,
        allPropertyLoader: false,
        initialFetrchComplete: true,
        allProperty: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
