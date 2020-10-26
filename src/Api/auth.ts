import axios from "axios";
import {baseUrl} from '../Common/base'

export const signUpApi = (username: string) => 
  axios.post(`${baseUrl}/signup`, {username}, { withCredentials: true });

export const signOutApi = () => axios.get(`${baseUrl}/signout`,{ withCredentials: true });

export const searchApi = (title?: string, date?:Date, category?: string) => 
  axios.post(`${baseUrl}`,{title, date, category}, {withCredentials: true});