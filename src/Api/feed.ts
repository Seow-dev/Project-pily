import axios, { AxiosResponse } from "axios";
import { baseUrl } from "../Common/base";
import { FeedDataTypes } from "../Common/Interface";

export const getMyFeedApi = (
  offset: number,
  query?: string,
  date?: string,
  page?: number,
) => {
  const params = {
    offset: offset ? offset : 24,
    query,
    date,
    page,
  };
  return axios.get(`${baseUrl}/feed/my-feed`, {
    params,
    withCredentials: true,
  });
};

//1
export const uploadFeedImageApi = (img: FormData): Promise<AxiosResponse> => {
  return axios.post(`${baseUrl}/feed/img-upload`, img, {
    withCredentials: true,
  });
};

//1
export const submitFeedApi = (data: FeedDataTypes) => {
  return axios.post(`${baseUrl}/feed/create`, data, { withCredentials: true });
};
