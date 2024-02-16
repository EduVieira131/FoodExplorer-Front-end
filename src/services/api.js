import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-3uw7.onrender.com",
  // baseURL: "http://localhost:3333",
  withCredentials: true,
});
