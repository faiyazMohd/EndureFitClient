import React, { useContext, useEffect, useState } from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Link } from "react-router-dom";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DietBookmarkContext from "../../../context/DietBookmarks/DietBookmarkContext";
import UserContext from "../../../context/user/userContext";
import AlertContext from "../../../context/alerts/AlertContext";

const DietCard = ({ diet }) => {
  const [bookmark, setBookmark] = useState(false)
  const [bookmarkId, setBookmarkId] = useState("")
  const dietBookmarkContext = useContext(DietBookmarkContext);
  const {dietsBookmarks,fetchAllDietBookMarks,addDietBookmark,deleteDietBookmark} = dietBookmarkContext;
  const userContext = useContext(UserContext);
  const { user} = userContext;
  const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

  useEffect(() => {
    if (localStorage.getItem("endurefit-token") ) {
      dietsBookmarks.forEach((element,index )=> {
          if (user.userId===element.userId) {
            // console.log(diet.recipe.url);
            if (element.bookmarkDetail.recipe.url === diet.recipe.url) {
              setBookmark(true)
              setBookmarkId(element._id)
              console.log("inside true");
            }
          }
        });
    }
  }, [dietsBookmarks])
  
  const handleBookmark = async ()=>{
    if (!bookmark) {
      const json = await addDietBookmark(diet)
      if (json.success) {
        setBookmark(true);
        showAlert(json.success, json.msg);

      }
    }
    else{
      const json = await deleteDietBookmark(bookmarkId);
      if (json.success) {
        setBookmark(false)
        showAlert(json.success, json.msg);

      }
    }
}
  return (
    <div
      className="exercise-card flex m-auto justify-center items-center"
      style={{ width: "340px" }}
    >
      <div className="shadow-card flex flex-col shadow-[0px_9px_20px_13px_#90cdf4] rounded-xl bg-white bg-clip-border justify-center items-center">
        <div className="hover:-m-[0.5rem] hover:shadow-[0px_12px_22px_2px_#3182ce] rounded-lg w-full">
          <Link
            to={`/dietdetails/${diet._links.self.href.substr(38,32)}`}
            blur-shadow-image="true"
            className="w-full"
          >
            <img
              className="w-[25rem] h-[20rem] rounded-t-lg"
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
          <Link to={`/dietdetails/${diet._links.self.href.substr(38,32)}`} className="">
          <p className="text-2xl text-center font-semibold">
            {diet.recipe.label}
          </p>
          <p className="text-md text-center mt-3">
            <LocalFireDepartmentSharpIcon
                    sx={{ color: "red", marginBottom: "0.4rem" }}
                  /> : {Math.floor(diet.recipe.calories)}{" "}kcal
          </p>
          <p className="text-md text-center">
            <ShoppingBasketIcon
                      sx={{ color: "blue", marginBottom: "0.4rem",marginLeft: "0.2rem" }}
                    /> : {diet.recipe.ingredients.length}
          </p>
          </Link>
        </div>
        <div className="mt-4 flex justify-center items-center mb-6">
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

export default DietCard;
