import React from 'react'
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
const CommentCard = ({comment}) => {
    const date = {
        date: new Date(comment.date).getDate(),
        month: new Date(comment.date).toLocaleString("default", { month: "short" }),
        year: new Date(comment.date).getFullYear(),
        time: new Date(comment.date).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      };
  return (
    
    <div class="rounded-2xl mt-6 bg-white flex flex-col justify-center w-[100%] mb-12 md:w-[50%] shadow-[0px_9px_20px_13px_#90cdf4] text-[#2a477f] border border-slate-600">
        <div class="flex gap-4 py-4 px-4">
        <Avatar src={comment.userPicture} sx={{ bgcolor: blue[400] }} />
            <div class="flex flex-col w-full">
                <div class="flex flex-row justify-between">
                    <p class="text-xl">{comment.userName}</p>
                </div>
                <p class="text-gray-400 text-sm">{date.date} {date.month}, {date.year} at {date.time}</p>
            </div>
        </div>
        <p class=" text-gray-500 py-4 px-4 -mt-6">{comment.commentContent}</p>
    </div>
    
  )
}

export default CommentCard
