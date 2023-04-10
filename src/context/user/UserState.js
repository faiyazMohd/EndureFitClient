import React, { useState } from "react";
import UserContext from "./userContext";
const BASE_URL = process.env.REACT_APP_BASE_URL;


const UserState = (props) => {
    const [user, setUser] = useState({});
    const setUserInformation = async ()=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        const response = await fetch(`${BASE_URL}/api/auth/getuser`, {
            method: "GET",
            headers: {
              "auth-token":authToken
            }
          });
          const json = await response.json();
          if (json.success) {
            setUser({
                userId:json.user._id,
                name:json.user.name,
                email:json.user.email,
                date:json.user.date
            });
          }
    }

  return (
    <UserContext.Provider value={{user, setUserInformation}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
