import axios from "axios";
import { baseUrl } from "../Common/base";

export const searchApi = (offset: number, query?: string, date?: string) => {
  const params = { offset: offset ? offset : 20, query, date };
  return axios.get(`${baseUrl}/magazine/get-magazine`, {
    params,
    withCredentials: true,
  });
};
