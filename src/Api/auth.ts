import axios from "axios";
const baseUrl = "http://localhost:4000";

export const signUpApi = (username: string) => 
  axios.post(`${baseUrl}/signup`, {username}, { withCredentials: true });

export const signOutApi = () => axios.get(`${baseUrl}/signout`,{ withCredentials: true });
