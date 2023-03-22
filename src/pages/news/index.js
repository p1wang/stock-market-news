import Loader from "@/components/Loader";
import NewsList from "@/components/NewsList";
import { useGetNews } from "@/hooks/news";
import { Container } from "@mui/material";

function NewsPage() {
  const { data: news, isLoading } = useGetNews();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <NewsList data={news.data} />
    </Container>
  );
}

export default NewsPage;
