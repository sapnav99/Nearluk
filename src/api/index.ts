import api from "./apiServices";

/**Login API */
const login = (payload: Object) => api.post(`/api/login`, payload);
const postProperty = (payload: Object) => api.post("/property/add", payload);

const getAllProductApi = (payload: Object) =>
  api.get("/property/getAllProperty");

const Apis = {
  login,
  postProperty,
  getAllProductApi,
};

export default Apis;
