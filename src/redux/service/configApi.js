import axios from "axios";

export const portfolioApi = axios.create({
  baseURL: "https://portfolio-back-oudh.onrender.com",
});
