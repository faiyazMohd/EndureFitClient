import React, { useState } from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Link } from "react-router-dom";
// const jwt = require("jsonwebtoken");
// import jwt from "jsonwebtoken"
// const JWT_SECRET = process.env.JWT_KEY;
const DietCard = ({ diet }) => {
  const [bookmark, setBookmark] = useState(false);
  // console.log(diet.images.REGULAR);
//   const data = {
//     diet: {
//       url: diet._links.self.href,
//     },
//   };
//   const dietToken = jwt.sign(data, JWT_SECRET);
  return (
    <div
      className="exercise-card flex m-auto justify-center items-center"
      style={{ width: "360px" }}
    >
      <div className="shadow-card flex flex-col shadow-[0px_9px_20px_13px_#90cdf4] rounded-xl bg-white bg-clip-border justify-center items-center">
        <div className="hover:-m-[0.5rem] hover:shadow-[0px_12px_22px_2px_#3182ce] rounded-lg">
          <Link
            to={`/dietdetails/${diet._links.self.href}`}
            blur-shadow-image="true"
          >
            <img
              className="w-auto rounded-lg "
              src={
                diet.recipe.images.REGULAR.url
                  ? diet.recipe.images.REGULAR.url
                  : `https://source.unsplash.com/400x300/?${diet.recipe.label}`
              }
              alt={diet.recipe.label}
            />
          </Link>
        </div>
        <div className=" capitalize mt-4 ">
          {/* <Link to={`/exercisedetails/${exercise.id}`} className=""> */}
          <p className="text-2xl text-center font-semibold">
            {diet.recipe.label}
          </p>
          <p className="text-md text-center">
            calories : {Math.floor(diet.recipe.calories)}
          </p>
          {/* </Link> */}
        </div>
        <div className="mt-4 flex justify-center items-center mb-6">
          {localStorage.getItem("endurefit-token") ? (
            <button
              className="middle none center capitalize  rounded-3xl  bg-blue-400 hover:bg-blue-300 text-black py-2 px-2 font-sans text-xs font-bold  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              // onClick={handleBookmark}
            >
              {bookmark ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />}
              {bookmark ? "Bookmarked" : "Bookmark"}
            </button>
          ) : (
            "login to bookmark"
          )}
        </div>
      </div>
    </div>
  );
};

export default DietCard;
