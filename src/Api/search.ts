import axios from "axios";
import {baseUrl} from '../Common/base';


export const searchApi = (title?: string, date?:string, categoryId?: number) => {
  const params = { title, date, categoryId }
  return axios.get(`${baseUrl}/`,{ params, withCredentials: true })
  .catch(err => err.response);
};