import React, { useContext, useEffect } from 'react'
import AlertContext from '../../context/alerts/AlertContext'
import { useNavigate } from 'react-router-dom'
import DietCard from './DietsHome/DietCard';
import DietBookmarkContext from '../../context/DietBookmarks/DietBookmarkContext';

const DietBookMarks = () => {
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const dietBookmarkContext = useContext(DietBookmarkContext);
  const {dietsBookmarks,fetchAllDietBookMarks,addDietBookmark,deleteDietBookmark} = dietBookmarkContext;
   const navigate = useNavigate();
   useEffect(() => {
    if (localStorage.getItem("endurefit-token") ) {
      fetchAllDietBookMarks();
    }
    else{
      navigate("/login");
      //show alert to login
      showAlert(true, "Please Login to add Bookmarks");
    }
        // eslint-disable-next-line
  }, [])

  return (
      <div>
     {dietsBookmarks.length === 0 && <div className="mt-5 mb-8 m-auto">
        <h1 className="text-3xl font-bold text-[#1a2b4b] text-center">"No Bookmarks found!!"</h1>
      </div>}
      
     <div className="mt-20 flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
        {dietsBookmarks.map((diet, index) => (
          <DietCard key={index} diet={diet.bookmarkDetail} />
        ))}
      </div>
    </div>
  )
}

export default DietBookMarks
