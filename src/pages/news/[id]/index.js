import Loader from "@/components/Loader";
import NewsItem from "@/components/NewsItem";
import useNews from "@/hooks/useNews";
import { Container } from "@mui/material";
import { useRouter } from "next/router";

function NewsItemPage() {
  const router = useRouter();
  const { id } = router.query;

  const { getNewsItem } = useNews();

  const { data: news, isLoading } = getNewsItem();

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
