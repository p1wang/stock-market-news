import { getNews, getNewsBySymbol, getNewsItem } from "@/services/newsApi";
import { useQuery } from "@tanstack/react-query";

export const useGetNewsItem = (id) => {
  return useQuery({
    queryKey: ["news", id],
    queryFn: () => getNewsItem(id),
  });
};

export const useGetNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: getNews,
  });
};

export const useGetNewsBySymbol = (slug) => {
  return useQuery({
    queryKey: ["news", slug],
    queryFn: () => getNewsBySymbol(slug),
    enabled: false, // This will prevent the query from running on mount.
  });
};
