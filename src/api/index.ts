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
  console.log("from Api", payload);
  const params = new URLSearchParams(payload).toString();
  return api.get(`/property/nearu?${params}`);
};

const Apis = {
  login,
  postProperty,
  getAllProductApi,
  userPropDetailsById,
  signup,
  getNearuDataApi,
};

export default Apis;
