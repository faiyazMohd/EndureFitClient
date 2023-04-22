import React, { useContext, useState } from "react";
import AlertContext from "../alerts/AlertContext";
import ChatBotContext from "./ChatBotContext";

const ChatBotState = (props) => {
    const [exerciseBookmarks, setExerciseBookmarks] = useState([])
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;
    const [messages, setMessages] = useState([
        {
          isAi: true,
          message: "Hi there 👋 Got a question? \n I'm here to help 😄",
        }
      ]);

    const updateMessages = (value)=>{
        setMessages(value)
    }
    
  return (
    <ChatBotContext.Provider value={{messages,updateMessages}}>
      {props.children}
    </ChatBotContext.Provider>
  );
};

export default ChatBotState;
