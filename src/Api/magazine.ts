import axios from "axios";
import { baseUrl } from "../Common/base";
import { MagazineDataTypes } from "../Common/Interface";

export const likeApi = (id: number) =>
  axios.post(`${baseUrl}/`, { magazineId: id }, { withCredentials: true });

export const unlikeApi = (id: number) =>
  axios.post(`${baseUrl}/`, { magazineId: id }, { withCredentials: true });

export const thumbnailApi = (formData: FormData) =>
  axios.post(`${baseUrl}/`, formData, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    withCredentials: true,
  });

export const publishApi = (data: MagazineDataTypes) =>
  axios.post(`${baseUrl}/`, data, { withCredentials: true });

export const getMagazineApi = (id: number) =>
  axios.get(`${baseUrl}/`, { withCredentials: true });

export const findMagazineApi = (
  offset: number,
  query?: string,
  sort?: string,
  date?: string,
) => {
  const params = { offset, query, sort, date };
  return axios.get(`${baseUrl}/`, { params, withCredentials: true });
};
