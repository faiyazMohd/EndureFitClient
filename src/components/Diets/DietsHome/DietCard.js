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
const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("endurefit-token") ) {
      dietsBookmarks.forEach((element,index )=> {
          if (user.userId===element.userId) {
            if (element.bookmarkDetail.recipe.url === diet.recipe.url) {
              setBookmark(true)
              setBookmarkId(element._id)
            }
          }
        });
    }
  }, [dietsBookmarks])
  
  const handleBookmark = async ()=>{
    if (!bookmark) {
      setLoading(true)
      const json = await addDietBookmark(diet)
      setLoading(false)
      if (json.success) {
        setBookmark(true);
        showAlert(json.success, json.msg);

      }
    }
    else{
      setLoading(true)
      const json = await deleteDietBookmark(bookmarkId);
      setLoading(false)
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

            {loading?  <div role="status">
                  <svg
                    aria-hidden="true"
                    class="inline w-20 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>: bookmark?<BookmarkAddedIcon/>:<BookmarkAddOutlinedIcon/>}
            {loading?  "": bookmark?"Bookmarked":"Bookmark"}

          </button>:"login to bookmark"}
        </div>
      </div>
    </div>
  );
};

export default DietCard;
