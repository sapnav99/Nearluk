import api from "./apiServices";

/**Login API */
const login = (payload: Object) => api.post(`/api/login`, payload);
const postProperty = (payload: Object) => api.post("/property/add", payload);
const userPropDetailsById = (payload: any) => {
  const params = new URLSearchParams(payload).toString();
  return api.get(`/property/one?${params}`);
};
const signup = (payload: Object) => api.post(`/users/signup`, payload);
const getAllProductApi = () => api.get("/property/getAllProperty");
const getNearuDataApi = (payload: any) => {
  const params = new URLSearchParams(payload).toString();
  return api.get(`/property/nearu?${params}`);
};

const googleCityAutoComplete = (place: any) => {
  const params = new URLSearchParams(place).toString();
  return api.get(`/property/city?${params}`);
};

const googleLocalityAutoComplete = (place: string) =>
  api.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${place}&key=AIzaSyCEDp1k2rqt67lzxkvetaemDGp7ieO3rpg`
  );

const Apis = {
  login,
  postProperty,
  getAllProductApi,
  userPropDetailsById,
  signup,
  getNearuDataApi,
  googleCityAutoComplete,
  googleLocalityAutoComplete,
};

export default Apis;
