import axios from "axios";
import { baseUrl } from "../Common/base";
import { MagazineDataTypes } from "../Common/Interface";

//1
export const likeApi = (id: number) =>
  axios.post(
    `${baseUrl}/user/like`,
    { magazineId: id },
    { withCredentials: true },
  );

//1
export const unlikeApi = (id: number) =>
  axios.post(
    `${baseUrl}/user/unlike`,
    { magazineId: id },
    { withCredentials: true },
  );

export const thumbnailUploadApi = (formData: FormData) =>
  axios.post(`${baseUrl}/`, formData, {
    withCredentials: true,
  });

export const publishMagazineApi = (data: MagazineDataTypes) =>
  axios.post(`${baseUrl}/`, data, { withCredentials: true });

export const getMagazineDetailApi = (id: number) =>
  axios.get(`${baseUrl}/`, { withCredentials: true });

export const getMagazine = (
  offset: number = 15,
  page: number,
  query?: string,
  sort?: string,
  date?: string,
) => {
  const params = { offset, query, sort, date, page };
  return axios.get(`${baseUrl}/`, { params, withCredentials: true });
};

export const getCategory = () =>
  axios.get(`${baseUrl}/`, { withCredentials: true });
