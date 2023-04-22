import React, { useState } from "react";
import UserContext from "./userContext";
import { calculateBMI,dailyCalorieReq,calculateBodyFat,calculateIdealWeight } from "../../utils/fitnessCalulator";
import LoaderContext from "../loader/LoaderContext"
import { useContext } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const UserState = (props) => {
  const loaderContext = useContext(LoaderContext);
  const { setLoadingProgress } = loaderContext;
    const [user, setUser] = useState({});
    const [userProfile, setUserProfile] = useState({})
    const [fitnessDetails, setFitnessDetails] = useState({
      bmi:0,
      dailyCalorieReq:0,
      bodyFatPercentage:0,
      idealWeight:0
    })
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
                picture:json.user.picture,
                email:json.user.email,
                date:json.user.date
            });
          }
    }
    const setUserProfileInfo= async ()=>{
        const authToken = localStorage.getItem("endurefit-token") ;
        setLoadingProgress(20);
        const response = await fetch(`${BASE_URL}/api/userDetails/getdetails`, {
            method: "GET",
            headers: {
              "auth-token":authToken,
              "Content-Type": "application/json"
            }
          });
          setLoadingProgress(50);
          const json = await response.json();
          setLoadingProgress(100);
          if (json.success) {
            setUserProfile(
              json.userDet.userDetails,
            );
            const userBMI = await calculateBMI(json.userDet.userDetails.age,json.userDet.userDetails.weight,json.userDet.userDetails.height);
            const usersDailyCalorieReq = await dailyCalorieReq(json.userDet.userDetails.age,json.userDet.userDetails.weight,json.userDet.userDetails.height,json.userDet.userDetails.gender,json.userDet.userDetails.activityLevel);
            const usersBodyFat = await calculateBodyFat(json.userDet.userDetails.age,json.userDet.userDetails.weight,json.userDet.userDetails.height,json.userDet.userDetails.gender,json.userDet.userDetails.neck,json.userDet.userDetails.waist,json.userDet.userDetails.hip);
            const usersIdealWeight = await calculateIdealWeight(json.userDet.userDetails.gender,json.userDet.userDetails.height);
           
            const bodyFatPercentage = Object.values(usersBodyFat.data)[3];
            setFitnessDetails({
              bmi:userBMI.data,
              dailyCalorieReq:usersDailyCalorieReq.data,
              bodyFatPercentage:bodyFatPercentage,
              idealWeight:usersIdealWeight.data.Devine
            })          
          }
    }

    const setFitnessInformation = ()=>{
      const userBMI =  calculateBMI(userProfile.age,userProfile.weight,userProfile.height);
      setFitnessDetails({
        bmi:userBMI.data
      })
    }


  return (
    <UserContext.Provider value={{user, setUserInformation,userProfile,setUserProfileInfo,setUser,setUserProfile,setFitnessInformation,fitnessDetails,setFitnessDetails}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
