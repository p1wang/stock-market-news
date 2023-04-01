import api from "./configs/axiosConfig";

const NewsService = {
  getNews: async () => {
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
  },
  getNewsItem: async (id) => {
    try {
      const res = await api.get(`/news/get-details?id=${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getNewsBySymbol: async (slug) => {
    try {
      const res = await api.get(`/news/v2/list-by-symbol?id=${slug}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default NewsService;
