import { getAllpropdata } from "./type";

const initialState = {};

const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getAllpropdata.FETCH_ALL_PROPERTY:
      return {
        ...state,
        allPropertyLoader: true,
        allProperty: action.payload,
      };
    case getAllpropdata.SET_ALL_PROPERTY:
      return {
        ...state,
        allPropertyLoader: false,
        allProperty: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
