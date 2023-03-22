import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <CircularProgress />

      <Typography>API is abit slow ...</Typography>
    </Box>
  );
}

export default Loader;
