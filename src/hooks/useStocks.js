import StocksService from "@/services/StocksService";
import { useQuery } from "@tanstack/react-query";

function useStocks() {
  function getDayWatch() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["dayWatch"],
      queryFn: StocksService.getDayWatch,
    });
  }

  function getChart(slug, period) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["chart", slug, period],
      queryFn: () => StocksService.getChart(slug, period),
    });
  }

  function getSummary(slug) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["summary", slug],
      queryFn: () => StocksService.getSummary(slug),
    });
  }

  function getRealTimeQuotes(slug) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
      queryKey: ["quotes", slug],
      queryFn: () => StocksService.getRealTimeQuotes(slug),
      enabled: false, // This is the key to prevent the query from running on mount
    });
  }

  return { getDayWatch, getChart, getSummary, getRealTimeQuotes };
}

export default useStocks;
