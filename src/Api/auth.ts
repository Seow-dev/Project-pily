import axios from "axios";
import { baseUrl } from "../Common/base";


export const oauthApi = () =>
  axios.get(`${baseUrl}/oauth`, { withCredentials: true });

export const signUpApi = (username: string) =>
  axios.post(`${baseUrl}/signup`, { username }, { withCredentials: true });


export const signOutApi = () =>
  axios.get(`${baseUrl}/signout`, { withCredentials: true });


export const vaildateUsernameApi = (nick?: string) => {
  const params = { nick }
  return axios.get(`${baseUrl}/`, {params, withCredentials: true });
}

