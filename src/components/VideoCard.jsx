import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: "none",
        width: { xs: '358px',  md: "310px" },
        // flexDirection:{xs:'column', :'row'},
        height: "290px",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#1e1e1e",
      }}
    >
      <Link
        to={videoId && `/video/${videoId}`}
      >
        <CardMedia
          sx={{ width: {xs: '358px', md: "310px"}, height: 180 }}
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", paddingBottom: "0px" }}>
        <Link to={videoId && `/video/${videoId}`}>
          <Typography
            variant="subtitle1"
            lineHeight={"18px"}
            fontWeight={"bold"}
            color={"white"}
          >
            {snippet?.title.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>

      <CardContent sx={{ backgroundColor: "#1e1e1e", padding: "0 0 0 18px" }}>
        <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
          <Typography
            variant="subtitle2"
            fontWeight={"semibold"}
            color={"gray"}
          >
            {snippet?.channelTitle.slice(0, 60)}
            <CheckCircle sx={{ ml: "5px", fontSize: 12, color: "gray" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
