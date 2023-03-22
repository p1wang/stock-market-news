import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navbar />
      <Container component="main" sx={{ mt: smallScreen ? 10 : 15 }}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
