import axios from "axios";
import {
  getErrorCodeByMessage,
  getErrorMessageByCode,
} from "@/utils/errorCodes";
// import localizationManager from "@/utils/LocalizationManager"; // Import the localization manager
// import Router from "next/router"; // Import Router from Next.js
import { NEXT_PUBLIC_BASE_URL } from "./apiEndPoints";
// import { pagesEndPoints } from "@/utils/Constant";
import Toster from "@/toster/Toster";

const API_BASE_URL = NEXT_PUBLIC_BASE_URL;

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // "api-key": process.env.NEXT_PUBLIC_API_KEY,
    // "device-id": process.env.NEXT_PUBLIC_DEVICE_ID,
    // "device-type": process.env.NEXT_PUBLIC_DEVICE_TYPE,
    // "device-token": process.env.NEXT_PUBLIC_DEVICE_TOKEN,
    // language: "en",
  },
});

// Add interceptors to include token and handle response codes
apiInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN); // Fetch token from local storage
    // if (token) {
    //   config.headers["access-token"] = token; // Add the 'access-token' header
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (response) => {
    // const { code } = response.data;
    const code = response.status;
    if (code != getErrorCodeByMessage("SUCCESS")) {
      //   toast.error(localizationManager.translate(getErrorMessage(code)));
      //   navigateToLogin(code);
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    console.log(error, "error");
    // if (error.response?.data?.code) {
    if (error?.status) {
      Toster(
        // localizationManager.translate(getErrorMessage(error.response.data.code))
        getErrorMessageByCode(error?.status),
        "error"
      );
      //   navigateToLogin(error.response?.data?.code);
      return Promise.reject(error);
    } else {
      const statusCode =
        error.response?.status ||
        getErrorCodeByMessage("INTERNAL_SERVER_ERROR");
      // toast.error(localizationManager.translate(getErrorMessage(statusCode)));
      //   navigateToLogin(statusCode);
      return Promise.reject(error);
    }
  }
);
const navigateToLogin = (code) => {
  if (
    code == getErrorCodeByMessage("INVALID_TOKEN") ||
    getErrorCodeByMessage("A_TOKEN_IS_REQUIRED_FOR_AUTHENTICATION")
  ) {
    // Router.push(pagesEndPoints.LOGIN);
  }
};

// API methods
export const get = async (url, params) => {
  const response = await apiInstance.get(url, { params });
  return response.data;
};

export const post = async (url, data) => {
  const response = await apiInstance.post(url, data);
  return response;
  //   return response.data;
};

export const put = async (url, data) => {
  const response = await apiInstance.put(url, data);
  return response.data;
};

export const del = async (url) => {
  const response = await apiInstance.delete(url);
  return response.data;
};
