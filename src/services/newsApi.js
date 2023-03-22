import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_API_URL,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_NEWS_API_HOST,
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  },
});

export const getNews = async () => {
  const category = "market-news::top-news";
  const size = 10;

  try {
    const res = await api.get(
      `/news/v2/list?category=${category}&size=${size}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getNewsItem = async (id) => {
  try {
    const res = await api.get(`/news/get-details?id=${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getNewsBySymbol = async (slug) => {
  try {
    const res = await api.get(`/news/v2/list-by-symbol?id=${slug}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
