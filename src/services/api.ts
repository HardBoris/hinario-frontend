import axios from "axios";

export const localApi = axios.create({ baseURL: "http://localhost:3050" });

export const api = axios.create({
  baseURL: "https://meu-hinario.onrender.com",
});
