import {
  getChart,
  getDayWatch,
  getRealTimeQuotes,
  getSummary,
} from "@/services/stockApi";
import { useQuery } from "@tanstack/react-query";

export const useGetDayWatch = () => {
  return useQuery({
    queryKey: ["dayWatch"],
    queryFn: getDayWatch,
  });
};

export const useGetChart = (slug, period) => {
  return useQuery({
    queryKey: ["chart", slug, period],
    queryFn: () => getChart(slug, period),
  });
};

export const useGetSummary = (slug) => {
  return useQuery({
    queryKey: ["summary", slug],
    queryFn: () => getSummary(slug),
  });
};

export const useGetRealTimeQuotes = (slug) => {
  return useQuery({
    queryKey: ["quotes", slug],
    queryFn: () => getRealTimeQuotes(slug),
    enabled: false, // This is the key to prevent the query from running on mount
  });
};
