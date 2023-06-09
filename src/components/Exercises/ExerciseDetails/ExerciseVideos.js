import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "../../Others/Loader";
const ExerciseVideos = ({ exerciseVideos, name ,exerciseVideosLoading}) => {
  return (
    <div className="text-center w-[80%] m-auto mt-24 flex-col justify-center items-center">
      <h4 className="text-[#1a2b4b] text-3xl mb-8" color="#1a2b4b">
        Watch{" "}
        <b style={{ color: "#1a2b4b", textTransform: "capitalize" }}>{name}</b>{" "}
        exercise videos
      </h4>
      {exerciseVideosLoading ? <Loader/>:""}
      <div
        className=" flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-2 xl:grid-cols-3"

      >
        {(
          exerciseVideos.slice(0, 4).map((item, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              className="md:w-[24rem] md:h-[23.813rem]"
              target="_blank"
              rel="noreferrer"
            >
            <div class="exercise-card max-w-sm bg-white border border-gray-200 rounded-lg mt-10 shadow-[0px_4px_13px_5px_#63b3ed]">

                <img
                  class="rounded-t-lg w-full"
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />

                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#1a2b4b]">
                  {item.video.title}
                  </h5>

                  <p class="mb-3 font-normal text-[#1a2b4b]">
                  {item.video.channelName}
                  </p>
                </div>

                
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default ExerciseVideos;
