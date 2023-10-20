import { postpropertyTypes } from "./type";

//Get City Data
const fetchCityData = (data: any) => {
  return {
    type: postpropertyTypes.FETCH_CITY_DATA,
    payload: data,
  };
};
const setCityData = (data: any) => {
  return {
    type: postpropertyTypes.SET_CITY_DATA,
    payload: data,
  };
};
// Get State Data
const fetchStateData = (data: any) => {
  return {
    type: postpropertyTypes.FETCH_STATE_DATA,
    payload: data,
  };
};
const setStateData = (data: any) => {
  return {
    type: postpropertyTypes.SET_STATE_DATA,
    payload: data,
  };
};
// Get Locality Data
const fetchLocalityData = (data: string) => {
  return {
    type: postpropertyTypes.FETCH_LOCALITY_DATA,
    payload: data,
  };
};
const setLocalityData = (data: any) => {
  return {
    type: postpropertyTypes.SET_LOCALITY_DATA,
    payload: data,
  };
};

//Setting State

const SetPropertyState = (data: any) => {
  return {
    type: postpropertyTypes.SET_PROPERTY_STATE,
    payload: data,
  };
};

export const postpropertyAction = {
  fetchCityData,
  setCityData,
  fetchStateData,
  setStateData,
  fetchLocalityData,
  setLocalityData,
  SetPropertyState,
};
