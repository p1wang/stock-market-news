// import getStockPriceChange from "@/utils/getStockPriceChange";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function StockCard({ data }) {
  const theme = useTheme();
  const router = useRouter();

  const getStockPriceChange = (last, prevClose) => {
    const change = last - prevClose;
    const changePercent = (change / prevClose) * 100;

    return changePercent;
  };

  return (
    <Card
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.grey[50],
          userSelect: "none",
          cursor: "pointer",
        },
      }}
      onClick={() => router.push(`/stocks/${data.sa_slug}`)}
    >
      <CardContent
        sx={{
          "&.MuiCardContent-root": { py: 1, px: 2 },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 500,
            textAlign: "left",
            color: theme.palette.info.main,
          }}
        >
          {data.sa_slug.toUpperCase()}
        </Typography>
        <Typography variant="h6" fontWeight={400} align="right">
          {data.last}
        </Typography>
        <Typography
          fontWeight={500}
          color={
            data.last < data.prev_close
              ? theme.palette.error.main
              : theme.palette.success.main
          }
          align="right"
        >
          {getStockPriceChange(data.last, data.prev_close).toFixed(2) + " %"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StockCard;
