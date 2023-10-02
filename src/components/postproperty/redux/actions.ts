import { propertyTypes } from "./actionType";
const fetchPostProperty = (data: any) => {
  return {
    type: propertyTypes.FETCH_POST_PROPERTY,
    payload: data,
  };
};

const setPostProperty = (data: any) => {
  return {
    type: propertyTypes.SET_STEPS_DATA,
    payload: data,
  };
};

const takeStepData = (steponedata: any) => {
  return {
    type: propertyTypes.TAKE_STEP_DATA,
    payload: steponedata,
  };
};
export const propertyAction = {
  fetchPostProperty,
  setPostProperty,
  takeStepData,
};
