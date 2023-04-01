import DayWatchList from "@/components/DayWatchList";
import Loader from "@/components/Loader";
import useStocks from "@/hooks/useStocks";
import { Container, Grid } from "@mui/material";

function StocksPage() {
  const { getDayWatch } = useStocks();
  const { data: dayWatch, isLoading, error } = getDayWatch();

  if (isLoading) {
    return <Loader />;
  }

  // console.log("dayWatch", dayWatch.data.attributes);
  // console.log("dayWatch", Object.keys(dayWatch.data.attributes));
  // console.log("dayWatch", Object.values(dayWatch.data.attributes));
  // console.log("dayWatch", Object.entries(dayWatch.data.attributes));

  return (
    <Container sx={{ flexGrow: 1, mt: 10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Object.entries(dayWatch.data.attributes).map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DayWatchList
              data={value[1]}
              title={value[0].replace(/[_]/g, " ").toUpperCase()}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default StocksPage;
