import Loader from "@/components/Loader";
import NewsList from "@/components/NewsList";
import StockCard from "@/components/StockCard";
import { useGetNews } from "@/hooks/news";
import { useGetDayWatch, useGetRealTimeQuotes } from "@/hooks/stocks";
import { Container, Grid } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const { data: news, isLoading } = useGetNews();
  const {
    data: dayWatch,
    isLoading: isLoadingDayWatch,
    isFetched: isFetchedDayWatch,
  } = useGetDayWatch();

  const {
    data: realTimeQuotes,
    isLoading: isLoadingRealTimeQuotes,
    refetch,
  } = useGetRealTimeQuotes(
    dayWatch?.data.attributes.most_active.map((item) => item.id)
  );

  if (isFetchedDayWatch) {
    refetch();
  }

  if (isLoading || isLoadingDayWatch || isLoadingRealTimeQuotes) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container component="main">
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          sx={{ display: "flex", justifyContent: "center", mb: 6 }}
        >
          {realTimeQuotes.real_time_quotes.map((item) => (
            <Grid
              key={item.sa_id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              sx={{ textAlign: "center " }}
            >
              <StockCard data={item} />
            </Grid>
          ))}
        </Grid>
        <Container maxWidth="md">
          <NewsList data={news.data} />
        </Container>
      </Container>
    </>
  );
}