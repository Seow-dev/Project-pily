import axios from "axios";
import {baseUrl} from '../Common/base';


export const searchApi = (title?: string, date?:string) => {
  const params = { title, date }
  return axios.get(`${baseUrl}/`,{ params, withCredentials: true })
  .catch(err => err.response);
};