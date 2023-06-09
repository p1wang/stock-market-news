import Loader from "@/components/Loader";
import NewsList from "@/components/NewsList";
import StockChart from "@/components/StockChart";
import StockSummary from "@/components/StockSummary";
import useNews from "@/hooks/useNews";
import useStocks from "@/hooks/useStocks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
const periodSelections = [
  "1D",
  "5D",
  "1M",
  "6M",
  "YTD",
  "1Y",
  "3Y",
  "5Y",
  "10Y",
  "MAX",
];

function StockPage() {
  const router = useRouter();
  const theme = useTheme();
  const { getChart, getSummary } = useStocks();
  const { getNewsBySymbol } = useNews();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { id } = router.query;

  const [activeBtn, setActiveBtn] = useState(periodSelections[1]);

  const {
    data: stockChartData,
    isLoading: stockChartDataIsLoading,
    error: stockChartDataError,
  } = getChart(id, activeBtn);

  const {
    data: stockSummaryData,
    isLoading: stockSummaryDataIsLoading,
    error: stockSummaryDataError,
  } = getSummary(id);

  const {
    data: stockNewsData,
    isLoading: stockNewsDataIsLoading,
    error: stockNewsDataError,
    refetch,
  } = getNewsBySymbol(id);

  if (stockChartDataIsLoading || stockSummaryDataIsLoading) {
    return <Loader />;
  }

  if (!stockChartData || !stockSummaryData) {
    alert("Please enter a valid stock symbol");
    router.replace("/stocks");
    return;
  }

  return (
    <Container component="main" sx={{ mt: 10 }}>
      <ButtonGroup
        variant="text"
        aria-label="outlined button group"
        sx={{ display: "flex", justifyContent: "center", mb: 4 }}
        orientation={smallScreen ? "vertical" : "horizontal"}
      >
        {periodSelections.map((item) => (
          <Button
            key={item}
            variant={activeBtn === item ? "contained" : "outlined"}
            onClick={() => {
              setActiveBtn(item);
            }}
          >
            {item}
          </Button>
        ))}
      </ButtonGroup>
      <StockChart stockChartData={stockChartData.attributes} slug={id} />
      <Box sx={{ my: 6 }}>
        <StockSummary stockSummaryData={stockSummaryData.data[0].attributes} />
      </Box>

      {!stockNewsData && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: 0,
            right: 15,
            // left: "50%",
            // transform: "translateX(-50%)",
          }}
          onClick={() => refetch()}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      )}

      {stockNewsData && <NewsList data={stockNewsData.data} />}
    </Container>
  );
}

export default StockPage;
