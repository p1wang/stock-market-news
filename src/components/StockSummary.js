import * as React from "react";
import styled from "@mui/system/styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

function StockSummary({ stockSummaryData }) {
  // console.log(stockSummaryData);
  // console.log(Object.keys(stockSummaryData));
  // console.log(Object.values(stockSummaryData));
  // console.log("Entries:", Object.entries(stockSummaryData));

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const items = {
    cash: "Cash",
    companyName: "Company Name",
    marketCap: "Market Cap",
    divRate: "Div Rate",
    divRateFwd: "Div Rate Fwd",
    divYield: "Div Yield",
    grossMargin: "Gross Margin",
    netMargin: "Net Margin",
    roe: "ROE",
    roa: "ROA",
    totalDebt: "Total Debt",
  };

  const data = Object.entries(stockSummaryData).filter((value) => {
    return Object.keys(items).includes(value[0]) && value.push(items[value[0]]);
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 10,
        flexDirection: smallScreen ? "column" : "row",
      }}
    >
      <Table padding="normal">
        <TableBody>
          {data.slice(0, data.length / 2).map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography>{item[2]}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{item[1] || "n/a"}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table padding="normal">
        <TableBody>
          {data.slice(data.length / 2, data.length - 1).map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography>{item[2]}</Typography>
              </TableCell>

              <TableCell align="right">
                <Typography>{item[1] || "n/a"}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default StockSummary;
