import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://601a1e7b7db5390017834c9c.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
  