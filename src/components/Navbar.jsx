import { Box, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";

import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction={"row"}
    p={2}
    alignItems={"center"}
    sx={{
      backgroundColor: "black",
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to={'/'} style={{display:'flex', alignItems:'center'}}><img src={logo} alt="logo" height={45} /></Link>

    <SearchBar/>
  </Stack>
);

export default Navbar;
