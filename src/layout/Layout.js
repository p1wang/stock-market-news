import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="false" disableGutters>
      <Navbar />
      {children}
    </Container>
  );
}

export default Layout;
