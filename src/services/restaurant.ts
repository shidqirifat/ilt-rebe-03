import { CONFIG } from "@/configs/data";
import {
  ResponseDetailRestaurant,
  ResponseListRestaurant,
} from "@/types/restaurant";
import api from "./api";
import { AxiosResponse } from "axios";

const delay = async (millis: number) => {
  await new Promise((resolve) => setTimeout(resolve, millis));
};

export const getListRestaurant = async (
  keyword: string
): Promise<ResponseListRestaurant> => {
  await delay(2000);

  const url = keyword ? `/search?q=${keyword}` : "/list";
  const response: AxiosResponse<ResponseListRestaurant> = await api.get(
    `${CONFIG.BASE_URL_API}${url}`
  );
  return response.data;
};

export const getDetailRestaurant = async (
  id: string
): Promise<ResponseDetailRestaurant> => {
  await delay(2000);

  const response: AxiosResponse<ResponseDetailRestaurant> = await api.get(
    `${CONFIG.BASE_URL_API}/detail/${id}`
  );
  return response.data;
};

type PayloadReview = {
  id: string;
  name: string;
  review: string;
};

export const postReview = async (payload: PayloadReview) => {
  await delay(2000);

  const response: AxiosResponse<ResponseDetailRestaurant> = await api.post(
    `${CONFIG.BASE_URL_API}/review`,
    payload
  );
  return response.data;
};
