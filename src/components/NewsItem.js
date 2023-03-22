import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import Image from "next/image";

function NewsItem({ data }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const processHtmlString = (htmlString) => {
    const parser = new DOMParser();

    const doc = parser.parseFromString(
      htmlString.replace(/<img .*?>/g, ""),
      "text/html"
    );

    doc.querySelectorAll("a").forEach((a) => {
      a.style.textDecoration = "none";
      a.style.color = theme.palette.primary.main;
    });
    return doc.body.innerHTML;
  };

  return (
    <Box>
      <Typography
        variant="h3"
        align="left"
        mb={2}
        fontFamily="Cormorant Garamond"
      >
        {data.title}
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        {moment(data.publishOn).format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: smallScreen ? "100%" : "80%",
          height: smallScreen ? "300px" : "500px",
          mx: "auto",
          my: smallScreen ? 0 : 4,
        }}
      >
        <Image
          src={data.gettyImageUrl || "/news.jpg"}
          alt="news image"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Typography
        variant="h7"
        fontWeight={300}
        dangerouslySetInnerHTML={{
          __html: processHtmlString(data.content),
        }}
      />
    </Box>
  );
}

export default NewsItem;
