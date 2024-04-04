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

export const getListRestaurant = async (): Promise<ResponseListRestaurant> => {
  await delay(2000);

  const response: AxiosResponse<ResponseListRestaurant> = await api.get(
    `${CONFIG.BASE_URL_API}/list`
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
