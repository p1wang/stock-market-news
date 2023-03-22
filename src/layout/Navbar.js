import { ColorModeContext } from "@/pages/_app";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import {
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Search from "./Search";

const navItems = ["News", "Stocks"];
const drawerItems = [
  { label: "Home", icon: <HomeIcon />, to: "/" },
  { label: "Stocks", icon: <ShowChartIcon />, to: "/stocks" },
  { label: "News", icon: <NewspaperIcon />, to: "/news" },
];

function Navbar(props) {
  const router = useRouter();

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { colorMode, mode } = useContext(ColorModeContext);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const list = (anchor) => (
    <Box
      sx={{ width: 200 }}
      onClick={() => setDrawerIsOpen(false)}
      onKeyDown={() => setDrawerIsOpen(false)}
    >
      <List>
        {drawerItems.map((value, index) => (
          <ListItem key={value.label} disablePadding>
            <ListItemButton onClick={() => router.push(value.to)}>
              <ListItemIcon>{value.icon}</ListItemIcon>
              <ListItemText primary={value.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "center" }}>
          <Link
            href={"/"}
            variant="h6"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Home
          </Link>
          {smallScreen && (
            <IconButton
              onClick={() => setDrawerIsOpen(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Search />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                href={`/${item}`.toLowerCase()}
                sx={{ color: "#fff", fontWeight: 600 }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton edge="end" onClick={() => colorMode.toggleColorMode()}>
            {mode === "light" ? (
              <ToggleOffIcon fontSize="large" />
            ) : (
              <ToggleOnIcon fontSize="large" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
}

export default Navbar;
