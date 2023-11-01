import axios from "axios";
import { BASE_URL } from "../utils/baseurl";
const baseURL = BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 60000,
});

// export const setJwtToken = (token: string) => {
//   axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };

export const setInterceptor = () => {
  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (err: any) => {
      const error = err.response;
      let errorMsg =
        err.response && err.response.data && err.response.data.message;
      if (error && error.status === 401) {
        errorMsg = `Your previous login session has expired. Please login again to use the platform.`;
      }
      if (error && error.status === 403) {
        if (error.request.responseType === "arraybuffer") {
          err = null;
        }
        errorMsg =
          err && err.response && err.response.data && err.response.data.message;
      }

      return Promise.reject(
        errorMsg ||
          `Sorry, some system issue. Please try again and if issue still persists, please report to our team at publir`
      );
    }
  );
};

export default axiosInstance;
