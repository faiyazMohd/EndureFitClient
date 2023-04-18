import React from "react";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ThreadCard = ({ thread }) => {
  const date = {
    date: new Date(thread.date).getDate(),
    month: new Date(thread.date).toLocaleString("default", { month: "short" }),
    year: new Date(thread.date).getFullYear(),
    time: new Date(thread.date).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mt-5 mb-4 ">
        <div className="left flex  md:w-[80%]">
          <div className="profile flex justify-center items-center w-[15%]">
            <Avatar src={thread.userPicture} sx={{ bgcolor: blue[400] }} />
          </div>
          <div className="content md:w-[60%]">
            <p className="font-bold">{thread.userName}</p>
            <Link to={`/forum/thread/comment/${thread._id}`}>

            <h1 className="hover:underline text-[#3358a3] hover:text-[#4268b6] font-semibold" >{thread.threadTitle}</h1>
            </Link>
            <p>{thread.threadDesc}</p>
          </div>
        </div>
        <div className="other flex justify-end md:w-[20%]">
          <p className="text-xs md:text-sm" > {date.date} {date.month}, {date.year} at {date.time}</p>
          
        </div>
      </div>
      <div>
        <hr class="border-gray-500" />
      </div>
    </>
  );
};

export default ThreadCard;
