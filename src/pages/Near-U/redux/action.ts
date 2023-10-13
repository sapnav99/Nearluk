import { nearuTypes } from "./types";
const fetchNearudata = (data: any) => {
  return {
    type: nearuTypes.FETCH_NEARU_DATA,
    payload: data,
  };
};

const setNearudata = (data: any) => {
  return {
    type: nearuTypes.SET_NEARU_DATA,
    payload: data,
  };
};

export const nearuActions = {
  fetchNearudata,
  setNearudata,
};
