import axios from "axios";
import { BASE_URL, API_KEY } from "./constants";

export const fetch = (url) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      api_key: API_KEY,
    },
  };
  return axios(`${BASE_URL}/${url}`, options);
};
