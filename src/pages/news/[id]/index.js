import Loader from "@/components/Loader";
import NewsItem from "@/components/NewsItem";
import { useGetNewsItem } from "@/hooks/news";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

function NewsItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: news, isLoading } = useGetNewsItem(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container sx={{ my: 10 }}>
      <NewsItem data={news.data.attributes} />
    </Container>
  );
}

export default NewsItemPage;
