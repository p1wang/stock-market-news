import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_NEWS_API_HOST,
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
});

export default api;
