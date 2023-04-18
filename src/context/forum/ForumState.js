import React, { useContext, useState } from "react";
import ForumContext from "./ForumContext";
import AlertContext from "../alerts/AlertContext";


const BASE_URL = process.env.REACT_APP_BASE_URL;

const ForumState = (props) => {
    const [categories, setCategories] = useState([])
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;
    const [threads, setThreads] = useState([])
    const [comments, setComments] = useState([])
    const fetchAllCategories = async ()=>{
        const response = await fetch(`${BASE_URL}/api/forum/getallcategories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
          });
          const json = await response.json();
          if (json.success) {
            setCategories(json.category);
            // console.log(json.category);
          }
          else{
            showAlert(json.success,json.msg)
          }
          return json.category;
    }
    const fetchAllThreads = async (catId)=>{
        const response = await fetch(`${BASE_URL}/api/forum/getthreads/${catId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
          });
          const json = await response.json();
          if (json.success) {
            setThreads(json.threads,
              );
            console.log(json.threads);
          }
          else{
            showAlert(json.success,json.msg)
          }
          return json.threads;
    }
    const findThread = async (threadId)=>{
        const response = await fetch(`${BASE_URL}/api/forum/getthread/${threadId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
          });
          const json = await response.json();
          if (json.success) {
          }
          else{
            showAlert(json.success,json.msg)
          }
          return json.thread;
    }

    const addThread = async (thread,userName,userPicture)=>{
      const authToken = localStorage.getItem("endurefit-token") ;
      const response = await fetch(`${BASE_URL}/api/forum/addthreads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":authToken
          },
          body: JSON.stringify({ 
            categoryId:thread.catId,
            threadTitle:thread.title,
            threadDesc:thread.description,
            userName:userName,
            userPicture:userPicture
          }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          fetchAllThreads(thread.catId);
          showAlert(json.success,json.msg)
        }
        else{
          showAlert(json.success,json.msg)
          
        }
        return json;
  }

  const fetchAllComments = async (threadId)=>{
    const response = await fetch(`${BASE_URL}/api/forum/getcomments/${threadId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      if (json.success) {
        setComments(json.comments);
      }
      else{
        showAlert(json.success,json.msg)
      }
      return json.threads;
}
    const addComment = async (comment,userName,userPicture)=>{
      const authToken = localStorage.getItem("endurefit-token") ;
      const response = await fetch(`${BASE_URL}/api/forum/addcomment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":authToken
          },
          body: JSON.stringify({ 
            threadId:comment.threadId,
            commentContent:comment.comment,
            userName:userName,
            userPicture:userPicture
          }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          fetchAllComments(comment.threadId);
          showAlert(json.success,json.msg)
        }
        else{
          showAlert(json.success,json.msg)
          
        }
        return json;
  }

   


  return (
      <ForumContext.Provider value={{categories,fetchAllCategories,addThread,threads,fetchAllThreads,findThread,comments,fetchAllComments,addComment}}>
      {props.children}
    </ForumContext.Provider>
  );
};

export default ForumState;
