import React, { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) => {
  const [alert, setAlert] = useState(null);
  const showAlert = (success, message) => {
    if (success) {
        setAlert({
            type:"success",
            message:message
        })
        setTimeout(() => {
            setAlert(null)
          }, 3000);
    } else {
        setAlert({
            type:"error",
            message:message
        })
        setTimeout(() => {
            setAlert(null)
          }, 3000);
    }
  };
  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
