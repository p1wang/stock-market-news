import Loader from "@/components/Loader";
import NewsList from "@/components/NewsList";
import useNews from "@/hooks/useNews";
import { Container } from "@mui/material";

function NewsPage() {
  const { getNews } = useNews();

  const { data: news, isLoading } = getNews();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container component="main" sx={{ mt: 10 }}>
      <NewsList data={news.data} />
    </Container>
  );
}

export default NewsPage;
