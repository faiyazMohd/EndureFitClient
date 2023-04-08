import React, { useContext } from "react";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AlertContext from "../../context/alerts/AlertContext";
import { useLocation } from "react-router-dom";

export default function Alert() {
    const pathname = useLocation().pathname;
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
    const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
  
  return (

    <div className="">
        {alert && (

        <div className={`ml-4 ${pathname==="/login"|| pathname==="/signup" || pathname==="/forgotpassword"  ? "":"absolute"}  rounded-[1rem] m-auto w-[90%] sm:w-[70%] md:w-[37%] ${alert.type==="error"?"shadow-[2px_7px_16px_3px_#f56565]":"shadow-[2px_7px_16px_3px_#68d391]"}`}>
        {alert && 
        (
        
        <MuiAlert
            severity={alert.type}
            sx={{
            background:`${alert.type==="error"?"linear-gradient(90deg, rgba(249,203,199,1) 0%, rgba(244,137,144,1) 59%, rgba(253,145,127,1) 100%)":"linear-gradient(90deg, rgba(222,249,199,1) 0%, rgba(141,227,172,1) 64%, rgba(170,253,127,1) 100%)"}`,
            borderRadius: "1rem",
            }}
        >
            <AlertTitle><b>{capitalize(alert.type)}</b></AlertTitle>
            <strong>{alert.message}!</strong>
        </MuiAlert>
        
        )}
        </div>
                )}
    </div>
  );
}
