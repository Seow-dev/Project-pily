import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../Common/base";

export const getMyFeedApi = (offset: number, query?: string, date?: string) => {
  const params = {
    offset: offset ? offset : 24,
    query,
    date,
  };
  return axios.get(`${baseUrl}/`, { params, withCredentials: true });
};

export const uploadFeedImageApi = (img: FormData): Promise<AxiosResponse> => {
  return axios.post(`${baseUrl}/feed/img-upload`, img, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
};

export const submitFeedApi = (
  title: string,
  content: string,
  subtitle?: string,
  stars?: number,
  location?: object,
) => {
  const data = {
    title,
    content,
    subtitle,
    stars,
    location,
  };
  return axios.post(`${baseUrl}/feed/create`, data, { withCredentials: true });
};
