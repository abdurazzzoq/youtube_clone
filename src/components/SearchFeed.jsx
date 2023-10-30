import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFrom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"semibold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search results for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      <Box sx={{ml:{md:'100px', xs:'0px'}}}>
      <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
