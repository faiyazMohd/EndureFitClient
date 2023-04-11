import { Button, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ExeBookmarksContext from "../../../context/ExerciseBookmarks/ExeBookmarksContext";
import AlertContext from "../../../context/alerts/AlertContext";
import UserContext from "../../../context/user/userContext";

const ExerciseCard = ({ exercise }) => {
  const [bookmark, setBookmark] = useState(false)
  const [bookmarkId, setBookmarkId] = useState("")
  const exeBookmarksContext = useContext(ExeBookmarksContext);
  const {exerciseBookmarks, addExerciseBookmark,fetchAllExeBookMarks,deleteExerciseBookmark } = exeBookmarksContext;
  const userContext = useContext(UserContext);
  const { user} = userContext;
  // console.log(exercise);

  useEffect(() => {
    if (localStorage.getItem("endurefit-token") ) {
      // console.log(exerciseBookmarks);
        exerciseBookmarks.forEach((element,index )=> {
          if (user.userId===element.userId) {
            if (element.bookmarkDetail.id === exercise.id) {
              setBookmark(true)
              setBookmarkId(element._id)
              console.log("inside true");
            }
          }
        });
    }
  }, [exerciseBookmarks])
  
  const handleBookmark = ()=>{
        if (!bookmark) {
          addExerciseBookmark(exercise)
          setBookmark(true);
        }
        else{
          // console.log("deleteExerciseBookmark is "+deleteExerciseBookmark );
          // console.log("addExerciseBookmark is "+addExerciseBookmark );
          deleteExerciseBookmark(bookmarkId);
          setBookmark(false)
        }
  }
  return (
    <div className="exercise-card flex m-auto justify-center items-center" style={{width:"360px"}}>

      <div className="shadow-card flex flex-col shadow-[0px_9px_20px_13px_#90cdf4] rounded-xl bg-white bg-clip-border justify-center items-center">
        <div className="hover:-m-[0.5rem] hover:shadow-[0px_12px_22px_2px_#3182ce] rounded-lg">
          <Link to={`/exercisedetails/${exercise.id}`} blur-shadow-image="true">
            <img 
              className="w-auto rounded-lg "
              src={exercise.gifUrl}
              alt={exercise.name} 
              loading="lazy"
            />
          </Link>
        </div>
        <div className=" capitalize mt-4 ">
          <Link to={`/exercisedetails/${exercise.id}`} className="">
            <p className="text-2xl text-center font-semibold">{exercise.name}</p>
          </Link>
        </div>
          <div className="mt-4 flex justify-center items-center mb-6">
          {/* <button
            className="middle none center capitalize  rounded-3xl bg-blue-500 hover:bg-blue-400 hover:text-black py-3 px-3 font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
          {exercise.bodyPart}
          </button> */}
          {localStorage.getItem("endurefit-token") ?<button
            className="middle none center capitalize  rounded-3xl  bg-blue-400 hover:bg-blue-300 text-black py-2 px-2 font-sans text-xs font-bold  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={handleBookmark}
          >
            {bookmark?<BookmarkAddedIcon/>:<BookmarkAddOutlinedIcon/>}
            {bookmark?"Bookmarked":"Bookmark"}
          
          </button>:"login to bookmark"}
          
          </div>
      </div>


    </div>
  );

  
};

export default ExerciseCard;
