import { CONFIG } from "@/configs/data";
import {
  ResponseDetailRestaurant,
  ResponseListRestaurant,
} from "@/types/restaurant";

const delay = async (millis: number) => {
  await new Promise((resolve) => setTimeout(resolve, millis));
};

// @TODO fetch API function
export const getListRestaurant = async (): Promise<ResponseListRestaurant> => {
  await delay(2000);

  const response = await fetch(`${CONFIG.BASE_URL_API}/list`);
  const data = await response.json();
  return data;
};

export const getDetailRestaurant = async (
  id: string
): Promise<ResponseDetailRestaurant> => {
  await delay(2000);

  const response = await fetch(`${CONFIG.BASE_URL_API}/detail/${id}`);
  const data = await response.json();
  return data;
};
