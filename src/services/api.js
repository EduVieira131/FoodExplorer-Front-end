import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-3uw7.onrender.com",
  withCredentials: true,
});
