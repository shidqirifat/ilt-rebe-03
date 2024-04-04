import { CONFIG } from "@/configs/data";
import axios from "axios";

const api = axios.create({
  baseURL: CONFIG.BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
