import NewsService from "@/services/NewsService";
import { useQuery } from "@tanstack/react-query";

const useNews = () => {
  function getNews() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["news"],
      queryFn: NewsService.getNews,
    });
  }

  function getNewsItem(id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["news", id],
      queryFn: () => NewsService.getNewsItem(id),
    });
  }

  function getNewsBySymbol(slug) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["news", slug],
      queryFn: () => NewsService.getNewsBySymbol(slug),
      enabled: false, // This will prevent the query from running on mount.
    });
  }
  return { getNews, getNewsBySymbol, getNewsItem };
};

export default useNews;
