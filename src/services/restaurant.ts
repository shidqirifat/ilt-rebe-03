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

  const response: AxiosResponse<ResponseListRestaurant> = await api.get(
    "/search",
    { params: { q: keyword } }
  );
  return response.data;
};

export const getDetailRestaurant = async (
  id: string
): Promise<ResponseDetailRestaurant> => {
  await delay(2000);

  const response: AxiosResponse<ResponseDetailRestaurant> = await api.get(
    `/detail/${id}`
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
    "/review",
    payload
  );
  return response.data;
};
