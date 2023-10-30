import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Videos, ChannelCard } from "./";

import React from "react";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFrom";

const ChannelDetail = () => {
  const { id } = useParams();

  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(videos, ChannelDetail);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box >
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <Link className="disabled-link">
        <ChannelCard marginTop="-93px" channelDetail={ChannelDetail} />
        </Link>

        <Box sx={{ display: "flex", p:2 , justifyContent:'center'}}>
            <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
