import React, { useContext, useState } from "react";
import ExeBookmarksContext from "./ExeBookmarksContext";
import AlertContext from "../alerts/AlertContext";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const ExeBookmarksState = (props) => {
    const [exerciseBookmarks, setExerciseBookmarks] = useState([])
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

    const fetchAllExeBookMarks = async ()=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/userDetails/getexercisebookmark`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":authToken
            }
          });
          const json = await response.json();
        //   console.log(json.bookmarks);
          if (json.success) {
            setExerciseBookmarks(json.bookmarks);
          }
    }

    const addExerciseBookmark = async (bookmarkDetail)=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/userDetails/addexercisebookmark`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":authToken
            },
            body: JSON.stringify({ 
                bookmarkDetail:bookmarkDetail
            }),
          });
          const json = await response.json();
          if (json.success) {
            showAlert(json.success, json.msg);
            fetchAllExeBookMarks();
          }
    }
    const deleteExerciseBookmark = async (bookmarkId)=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/userDetails/deleteexercisebookmark/${bookmarkId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":authToken
            }
          });
          const json = await response.json();
          console.log(json);
          if (json.success) {
            showAlert(json.success, json.msg);
            fetchAllExeBookMarks();
          }
    }


  return (
    <ExeBookmarksContext.Provider value={{exerciseBookmarks,addExerciseBookmark,fetchAllExeBookMarks,deleteExerciseBookmark}}>
      {props.children}
    </ExeBookmarksContext.Provider>
  );
};

export default ExeBookmarksState;
