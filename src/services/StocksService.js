import api from "./configs/axiosConfig";

const StocksService = {
  getChart: async (slug, period) => {
    try {
      const res = await api.get(
        `/symbols/get-chart?symbol=${slug}&period=${period}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getDayWatch: async () => {
    try {
      const res = await api.get(`/market/get-day-watch`);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getSummary: async (slug) => {
    try {
      const res = await api.get(`/symbols/get-summary?symbols=${slug}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getRealTimeQuotes: async (slug) => {
    console.log(slug);

    try {
      const res = await api.get(`/market/get-realtime-quotes?sa_ids=${slug}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default StocksService;
