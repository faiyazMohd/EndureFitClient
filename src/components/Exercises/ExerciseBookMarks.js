import React, { useContext, useEffect } from 'react';
import AlertContext from '../../context/alerts/AlertContext';
import ExeBookmarksContext from '../../context/ExerciseBookmarks/ExeBookmarksContext';
import { useNavigate } from 'react-router-dom';
import ExerciseCard from './ExerciseHome/ExerciseCard';

const ExerciseBookMarks = () => {
  const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;
    const exeBookmarksContext = useContext(ExeBookmarksContext);
    const {exerciseBookmarks, addExerciseBookmark,fetchAllExeBookMarks,deleteExerciseBookmark } = exeBookmarksContext;
    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem("endurefit-token") ) {
      fetchAllExeBookMarks();
      }
      else{
        navigate("/login");
        //show alert to login
        showAlert(true, "Please Login to add Bookmarks");
      }
          // eslint-disable-next-line
    }, [])
    
  return (
    <div className='exebookmarks'  >
     {exerciseBookmarks.length === 0 && <div className="mt-5 mb-8 m-auto">
        <h1 className="text-3xl font-bold text-[#1a2b4b] text-center">"No Bookmarks found!!"</h1>
      </div>}
      
     <div className="mt-20 flex flex-col m-auto   flex-wrap justify-center items-center  gap-20  md:grid  md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
        {exerciseBookmarks.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise.bookmarkDetail} />
        ))}
      </div>
    </div>
  )
}

export default ExerciseBookMarks
