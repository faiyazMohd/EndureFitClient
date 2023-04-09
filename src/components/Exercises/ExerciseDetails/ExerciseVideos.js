import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "../../Others/Loader";
const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box
      sx={{
        mt: { lg: "200px", xs: "20px", md: "150px" },
        textAlign: "center",
      }}
    >
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0", md: "50px" },
        }}
      >
        {exerciseVideos
          ? exerciseVideos.slice(0, 6).map((item, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                className="exercise-video"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />
                <Typography variant="h5" color="#000">{item.video.title}</Typography>
                <Typography variant="h6" color="#000">{item.video.channelName}</Typography>
              </a>
            ))
          : <Loader/>}
          
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
