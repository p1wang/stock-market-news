import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  IconButton,
  InputBase,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

function Search() {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const onSubmit = (data) => {
    router.push(`/stocks/${data.searchTerm}`);
    reset();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        mx: smallScreen ? 0 : 2,
        display: "flex",
        width: smallScreen ? "100%" : "auto",
      }}
    >
      <InputBase
        {...register("searchTerm")}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
      />

      <Divider
        sx={{
          height: 36,
          m: 0.5,
        }}
        orientation="vertical"
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
