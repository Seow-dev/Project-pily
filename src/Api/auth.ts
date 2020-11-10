import axios from "axios";
import { baseUrl } from "../Common/base";

//1
export const oauthApi = () =>
  axios.get(`${baseUrl}/oauth`, { withCredentials: true });

//1
export const signUpApi = (username: string) =>
  axios.post(`${baseUrl}/signup`, { username }, { withCredentials: true });

//1
export const signOutApi = () =>
  axios.get(`${baseUrl}/signout`, { withCredentials: true });

//1
export const vaildateUsernameApi = (nick?: string) => {
  return axios.get(`${baseUrl}/user/available/${nick}`, {
    withCredentials: true,
  }).catch(err => err.response);
};
