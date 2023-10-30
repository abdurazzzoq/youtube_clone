import React, { useState } from "react";
import { CheckCircle } from "@mui/icons-material";
import { Box, CardMedia, Typography, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail,marginTop }) => {
  
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "356px", md: "310px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
              mb: 2,
              color: "#1e1e1e",
            }}
          />

          <Typography
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
            variant="h6"
            fontWeight={"semibold"}
          >
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
