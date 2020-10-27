import axios from "axios";
import { baseUrl } from "../Common/base";

export const getUserDataApi = () =>
  axios.get(`${baseUrl}/user/my-profile`, { withCredentials: true });

export const updateUserNameApi = (username: string) => {
  return axios.post(
    `${baseUrl}/user/update/username`,
    { username },
    {
      withCredentials: true,
    },
  );
};
export const updateImgApi = (form: FormData) => {
  return axios.post(`${baseUrl}/user/update/profile-img`, form, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getProfileApi = (username: string) => {
  return axios.get(`${baseUrl}/profile/${username}`, {
    withCredentials: true,
  });
};
export const subscribeApi = (username: string) =>
  axios.post(`${baseUrl}/`, { username }, { withCredentials: true });

export const unSubscribeApi = (username: string) =>
  axios.post(`${baseUrl}/`, { username }, { withCredentials: true });

