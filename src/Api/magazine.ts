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
  axios.post(`${baseUrl}/magazine/img-upload`, formData, {
    withCredentials: true,
  });

//1
export const publishMagazineApi = (data: MagazineDataTypes) =>
  axios.post(`${baseUrl}/magazine/create`, data, { withCredentials: true });

//보류
export const getMagazineDetailApi = (id: string) =>
  axios.get(`${baseUrl}/magazine/detail/${id}`, { withCredentials: true });

// 1
export const getMagazine = (
  offset: number = 15,
  page: number,
  query?: string,
  sort?: string,
  date?: string,
) => {
  const params = { offset, query, sort, date, page };
  return axios.get(`${baseUrl}/magazine/get-magazine`, {
    params,
    withCredentials: true,
  });
};
