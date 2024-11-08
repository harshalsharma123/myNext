import { LOGIN_ENDPOINT } from "./apiEndPoints";
import { post } from "./apiInstance";

// Auth API: Login
export const callLogin = async (username, password) => {
  try {
    const response = await post(LOGIN_ENDPOINT, {
      username: username.trim(),
      password: password,
    });
    // Store token in localStorage
    // localStorage.setItem(localStorageKeys.ACCESS_TOKEN, response?.data?.token);
    // localStorage.setItem(
    //   localStorageKeys.ADMIN_PROFILE_PHOTO,
    //   response?.data?.profile_img_relative_path
    // );
    // localStorage.setItem(localStorageKeys.ADMIN_EMAIL, response?.data?.email);
    // localStorage.setItem(
    //   localStorageKeys.ADMIN_FULL_NAME,
    //   response?.data?.full_name
    // );
    return response;
  } catch (error) {
    // console.error(error);
  }
};
