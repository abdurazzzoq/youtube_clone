import { Box, Typography, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFrom";
import React, { useEffect, useState } from "react";

const VideoDetail = () => {
  const [videosDetail, setVideosDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideosDetail(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!videosDetail?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videosDetail;

  return (
    <Box minHeight={"90vh"}>
      <Stack direction={{ sx: "column", md: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ width: "100%", position: "sticky", top: "70px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player  "
            />

            <Typography
              variant="h5"
              color={"white"}
              fontWeight={"semibold"}
              p={2}
            >
              {title}
            </Typography>

            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ color: "white" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  sx={{ display: "flex", alignItems: "center" }}
                  variant={"body1"}
                  color={"white"}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", ml: "5px", color: "gray" }}
                  />
                </Typography>
              </Link>

              <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box
          // width={{ xs: "80%", md: "20%" }}
          px={2}
          py={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: { sm: "column", md: "row" },
          }}
        >
          <Videos videos={videos} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
