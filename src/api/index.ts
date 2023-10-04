import api from "./apiServices";

/**Login API */
const login = (payload: Object) => api.post(`/api/login`, payload);
const signup = (payload: Object) => api.post(`/users/signup`, payload);
const postProperty = (payload: Object) => api.post("/property/add", payload);

const getAllProductApi = () =>
  api.get("/property/getAllProperty");

const Apis = {
  login,
  signup,
  postProperty,
  getAllProductApi,
};

export default Apis;
