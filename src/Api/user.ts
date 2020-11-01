import axios from "axios";
import { baseUrl } from "../Common/base";

//1
export const getUserDataApi = () =>
  axios.get(`${baseUrl}/user/my-profile`, { withCredentials: true });

//1
export const updateUserNameApi = (username: string) => {
  return axios.post(
    `${baseUrl}/user/update/username`,
    { username },
    {
      withCredentials: true,
    },
  );
};

//1
export const updateImgApi = (form: FormData) => {
  return axios.post(`${baseUrl}/user/update/profile-img`, form, {
    withCredentials: true,
  });
};

//1
export const getProfileApi = (username: string) => {
  return axios.get(`${baseUrl}/user/profile/${username}`, {
    withCredentials: true,
  });
};

//1
export const subscribeApi = (username: string) =>
  axios.post(
    `${baseUrl}/user/subscribe`,
    { username },
    { withCredentials: true },
  );

//1
export const unSubscribeApi = (username: string) =>
  axios.post(
    `${baseUrl}/user/unsubscribe`,
    { username },
    { withCredentials: true },
  );

// in mypage
export const getLikeMagazine = () => {
  return axios.get(`${baseUrl}/`, {
    params: { offset: 24 },
    withCredentials: true,
  });
};

export const getSubscribeApi = () => {
  return axios.get(`${baseUrl}/user/subscribed/info`, {
    withCredentials: true,
  });
};

export const getMyMagazine = () => {
  return axios.get(`${baseUrl}/`, {
    params: { offset: 24 },
    withCredentials: true,
  });
};
