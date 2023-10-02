import { getAllpropdata } from "./type";

const fetchAllProperty = (data: any) => {
  return {
    type: getAllpropdata.FETCH_ALL_PROPERTY,
    payload: data,
  };
};

const setAllProperty = (data: any) => {
  return {
    type: getAllpropdata.SET_ALL_PROPERTY,
    payload: data,
  };
};

export const allpropdataactions = {
  fetchAllProperty,
  setAllProperty,
};
