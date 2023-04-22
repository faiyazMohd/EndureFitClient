import React, { useContext, useState } from "react";
import DietBookmarkContext from "./DietBookmarkContext";
import AlertContext from "../alerts/AlertContext";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const DietBookmarkState = (props) => {
    const [dietsBookmarks, setDietsBookmarks] = useState([])
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;

    const fetchAllDietBookMarks = async ()=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/userDetails/getrecipebookmark`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":authToken
            }
          });
          const json = await response.json();
          if (json.success) {
            setDietsBookmarks(json.bookmarks);
          }
    }

    const addDietBookmark = async (bookmarkDetail)=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/userDetails/addrecipebookmark`, {
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
            fetchAllDietBookMarks();
          }
          return json;
    }


    const deleteDietBookmark = async (bookmarkId)=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/userDetails/deleterecipebookmark/${bookmarkId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":authToken
            }
          });
          const json = await response.json();
          if (json.success) {
            fetchAllDietBookMarks();
          }
          return json;
    }


  return (
    <DietBookmarkContext.Provider value={{dietsBookmarks,fetchAllDietBookMarks,addDietBookmark,deleteDietBookmark}}>
      {props.children}
    </DietBookmarkContext.Provider>
  );
};

export default DietBookmarkState;
