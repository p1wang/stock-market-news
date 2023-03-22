import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_NEWS_API_HOST,
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
});

export const getChart = async (slug, period) => {
  try {
    const res = await api.get(
      `/symbols/get-chart?symbol=${slug}&period=${period}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDayWatch = async () => {
  try {
    const res = await api.get(`/market/get-day-watch`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getSummary = async (slug) => {
  try {
    const res = await api.get(`/symbols/get-summary?symbols=${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getRealTimeQuotes = async (slug) => {
  console.log(slug);

  try {
    const res = await api.get(`/market/get-realtime-quotes?sa_ids=${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
