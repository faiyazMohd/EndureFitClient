import React, { useState } from "react";
import LoaderContext from "./LoaderContext";


const LoaderState = (props) => {
const [progress, setProgress] = useState(0) ;
const setLoadingProgress = (value)=>{
setProgress(value);
}
  return (
    <LoaderContext.Provider value={{ progress,setLoadingProgress}}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderState;
