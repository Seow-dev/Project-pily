import axios from "axios";
import {baseUrl} from '../Common/base';


export const searchApi = (title?: string, date?:string, category?: string) => {
  const params = { title, date, category }
  return axios.get(`${baseUrl}/`,{ params, withCredentials: true });
};