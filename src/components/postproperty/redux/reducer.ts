import { propertyTypes } from "./actionType";

const initialState = {};

const postPropertyReducer = (state = initialState, action: any) => {

  switch (action.type) {
    case propertyTypes.FETCH_POST_PROPERTY:
      return {
        ...state,
        postingData: [],
        postingLoader: true,
      };
    case propertyTypes.SET_STEPS_DATA:
      return {
        ...state,
        postingData: action.payload,
        postingLoader: false,
      };

    case propertyTypes.TAKE_STEP_DATA:
      return {
        ...state,
        stepData: action.payload,
      };

    default:
      return state;
  }
};


export default postPropertyReducer;
