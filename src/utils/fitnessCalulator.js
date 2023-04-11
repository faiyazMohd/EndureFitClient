import { fetchData, fitnessCalculatorOptions } from "./fetchData";

export const calculateBMI = async (age, weight, height) => {
    const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";
    const usersBMI = await fetchData(
      `${fitnessCalculatorUrl}/bmi?age=${age}&weight=${weight}&height=${height}`,
      fitnessCalculatorOptions
    );
    return usersBMI;
  };
export const dailyCalorieReq = async (age, weight, height,gender,activityLevel) => {
    const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";
    const usersDailyCalorieReq = await fetchData(
      `${fitnessCalculatorUrl}/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`,
      fitnessCalculatorOptions
    );
    return usersDailyCalorieReq;
  };

export const calculateBodyFat = async (age, weight, height,gender,neck,waist,hip) => {
    const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";
    const usersBodyFatPercentage= await fetchData(
      `${fitnessCalculatorUrl}/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`,
      fitnessCalculatorOptions
    );
    return usersBodyFatPercentage;
  };


  export const calculateIdealWeight = async (gender, height) => {
    const fitnessCalculatorUrl = "https://fitness-calculator.p.rapidapi.com";
    const usersIdealWeight = await fetchData(
      `${fitnessCalculatorUrl}/idealweight?gender=${gender}&height=${height}`,
      fitnessCalculatorOptions
    );
    return usersIdealWeight;
  };