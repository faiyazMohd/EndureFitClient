import React, { useState } from "react";
import FitnessContext from "./FitnessContext";
import {  fetchData, fitnessCalculatorOptions } from "../../utils/fetchData";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const FitnessState = (props) => {
    const [fitnessDetails, setFitnessDetails] = useState({
        bmi:0
    })
  const calculateBMI = async (age, weight, height) => {
    const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";
    const usersBMI = await fetchData(
      `${fitnessCalculatorUrl}/bmi?age=${age}&weight=${weight}&height=${height}`,
      fitnessCalculatorOptions
    );
    setFitnessDetails({
        bmi:usersBMI
    })
    return usersBMI;
  };

  return (
    <FitnessContext.Provider value={{calculateBMI}}>
      {props.children}
    </FitnessContext.Provider>
  );
};

export default FitnessState;
