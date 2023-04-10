import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../context/alerts/AlertContext";
import UserContext from "../context/user/userContext";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SignUp = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
const alertContext = useContext(AlertContext);
const { showAlert } = alertContext;
const  userContext = useContext(UserContext);
const {user} =  userContext;
const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    age: 0,
    gender: "",
    weight:40,
    height:130,
    activityLevel:"level_1",
    goals:"maintain",
    dietType:"",
    neck:20,
    waist:40,
    hip:40
  });
  const handleOnChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleOnChangeForSelect = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.selectedOptions[0].value,
    });
  };
  useEffect(() => {
    console.log(userDetails);
  
  }, [userDetails])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (
      userDetails.dietType.length > 0 ||
      userDetails.gender.length > 0 
    ) {
        console.log("user name is "+user.name);
        const authToken = localStorage.getItem("endurefit-token") ;
          const response = await fetch(`${BASE_URL}/api/userDetails/storedetails`, {
            method: "POST",
            headers: {
              "auth-token":authToken,
              "Content-Type": "application/json",

            },
            body: JSON.stringify({
                "userName":"Faiyaz Mohd",
                "userDetails":userDetails
            }),
          });
          const json = await response.json();
          if (json.success) {

            navigate("/");
            setUserDetails({
                age: 0,
                gender: "",
                weight:40,
                height:130,
                activityLevel:"level_1",
                goals:"maintain",
                dietType:"",
                neck:20,
                waist:40,
                hip:40
            });
          }
          showAlert(json.success, json.msg);
        
    
    }
    else{
      showAlert(false, "Fill out all the details");
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh]">
        <Navbar />
        <Alert />
        <div className="Login-Container  mb-8 container rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#1a2b4b] mt-4 flex justify-center items-center w-[95%] md:w-[55%] m-auto">
          <div className="relative flex flex-col justify-center items-center rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <h4 className="block text-center pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Enter your details to Create Profile
            </h4>
            <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                      type="number"
                      name="age"
                      value={userDetails.age}
                      onChange={handleOnChange}
                      required
                      minLength={0}
                      maxLength={80}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                      Age
                    </label>
                  </div>
                </div>
                <label htmlFor="age" className={`text-xs -mt-6 `}>
                  age must be less than 80
                </label>

                <div className="flex justify-start items-center">
                  <label htmlFor="gender" className="font-bold">
                    Gender:
                  </label>
                  <div class="flex gap-5 ">
                    <div class="inline-flex items-center">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for="male"
                        data-ripple-dark="true"
                      >
                        <input
                          id="male"
                          name="gender"
                          type="radio"
                          value="male"
                          onChange={handleOnChange}
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#1a2b4b] text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#1a2b4b] before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-[#1a2b4b]"
                        for="male"
                      >
                        Male
                      </label>
                    </div>
                    <div class="inline-flex items-center">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for="female"
                        data-ripple-dark="true"
                      >
                        <input
                          id="female"
                          name="gender"
                          type="radio"
                        value="female"
                          onChange={handleOnChange}
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#1a2b4b] text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#1a2b4b] before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="female"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                      type="number"
                      name="weight"
                      value={userDetails.weight}
                      onChange={handleOnChange}
                      required
                      minLength={0}
                      maxLength={80}
                    />
                    <label className="before:content[' '] font-bold after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                      Weight
                    </label>
                  </div>
                </div>
                <label htmlFor="weight" className={`text-xs -mt-6 `}>
                weight must be in kg and be greater than 40 and less than 160 
                </label>
                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                      type="number"
                      name="height"
                      value={userDetails.height}
                      onChange={handleOnChange}
                      required
                      minLength={130}
                      maxLength={230}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                      Height
                    </label>
                  </div>
                </div>
                <label htmlFor="height" className={`text-xs -mt-6 `}>
                height must be in cm and greater than 130 and less than 230
                </label>

                <div class="relative h-10 min-w-[200px]">
                  <select
                    class="peer h-full w-full rounded-[7px] border border-[#1a2b4b] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#1a2b4b] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b] placeholder-shown:border-t-[#1a2b4b] empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-[#1a2b4b] "
                    name="activityLevel"
                    value={userDetails.activityLevel}
                    onChange={handleOnChangeForSelect}
                    defaultValue={"level_1"}
                  >
                    <option value="level_1">
                      level-1 : BMR
                    </option>
                    <option value="level_2">
                    level-2 : Sedentary: little or no exercise
                    </option>
                    <option value="level_3">
                    level-3 : Exercise 1-3 times/week
                    </option>
                    <option value="level_4">
                    level-4 : Exercise 4-5 times/week
                    </option>
                    <option value="level_5">
                    level-5 : Daily exercise or intense exercise 3-4 times/week
                    </option>
                    <option value="level_6">
                    level-6 : Intense exercise 6-7 times/week
                    </option>
                    <option value="level_7">
                    level-7 : Very intense exercise daily, or physical job"
                    </option>
                  </select>
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#1a2b4b] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b]">
                    Select activity level 
                  </label>
                </div>

                <div class="relative h-10 min-w-[200px]">
                  <select
                    class="peer h-full w-full rounded-[7px] border border-[#1a2b4b] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#1a2b4b] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b] placeholder-shown:border-t-[#1a2b4b] empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-[#1a2b4b] "
                    name="goals"
                    value={userDetails.goals}
                    onChange={handleOnChangeForSelect}
                    defaultValue={"maintain"}
                  >
                    <option value="maintain">
                    Maintain : maintain weight
                    </option>
                    <option value="mildlose">
                    Mildlose : Mild weight loss
                    </option>
                    <option value="weightlose">
                    Weightlose : Weight loss
                    </option>
                    <option value="extremelose">
                    Extremelose : Extreme weight loss
                    </option>
                    <option value="mildgain">
                    Mildgain : Mild weight gain
                    </option>
                    <option value="weightgain">
                    Weightgain : Weight gain
                    </option>
                    <option value="extremegain">
                    Extremegain : Extreme weight gain
                    </option>
                  </select>
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#1a2b4b] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b]">
                    Select Goals
                  </label>
                </div>

                <div className="flex justify-start items-center flex-wrap md:flex-nowrap">
                  <label htmlFor="dietType" className="font-semibold">
                  Diet Type:
                  </label>
                  <div class="flex ">
                    <div class="inline-flex items-center ">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full "
                        for="vegetarian"
                        data-ripple-dark="true"
                      >
                        <input
                          id="vegetarian"
                          name="dietType"
                          type="radio"
                          value="vegetarian"
                          onChange={handleOnChange}
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#1a2b4b] text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#1a2b4b] before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-[#1a2b4b]"
                        for="vegetarian"
                      >
                        Vegetarian
                      </label>
                    </div>

                    <div class="inline-flex items-center ">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for="nonvegetarian"
                        data-ripple-dark="true"
                      >
                        <input
                          id="nonvegetarian"
                          name="dietType"
                          type="radio"
                        value="nonvegetarian"
                          onChange={handleOnChange}
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#1a2b4b] text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#1a2b4b] before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="nonvegetarian"
                      >
                        Non Vegetarian
                      </label>
                    </div>
                    <div class="inline-flex items-center ">
                      <label
                        class="relative flex cursor-pointer items-center rounded-full p-3"
                        for="vegan"
                        data-ripple-dark="true"
                      >
                        <input
                          id="vegan"
                          name="dietType"
                          type="radio"
                           value="vegan"
                          onChange={handleOnChange}
                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-[#1a2b4b] text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#1a2b4b] before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                        />
                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-blue-500 opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <circle
                              data-name="ellipse"
                              cx="8"
                              cy="8"
                              r="8"
                            ></circle>
                          </svg>
                        </div>
                      </label>
                      <label
                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                        for="vegan"
                      >
                        Vegan
                      </label>
                    </div>
                  </div>
                </div>

                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                      type="number"
                      name="neck"
                      value={userDetails.neck}
                      onChange={handleOnChange}
                      required
                      minLength={20}
                      maxLength={80}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                    Neck
                    </label>
                  </div>
                </div>
                <label htmlFor="neck" className={`text-xs -mt-6 `}>
                neck must be in cm and greater than 20 and less than 80
                </label>


                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                      type="number"
                      name="waist"
                      value={userDetails.waist}
                      onChange={handleOnChange}
                      required
                      minLength={40}
                      maxLength={160}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                    Waist
                    </label>
                  </div>
                </div>
                <label htmlFor="waist" className={`text-xs -mt-6 `}>
                waist must be in cm and greater than 40 and less than 160
                </label>


                <div className="relative h-11 w-full min-w-[200px]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeHolder=" "
                      type="number"
                      name="hip"
                      value={userDetails.hip}
                      onChange={handleOnChange}
                      required
                      minLength={20}
                      maxLength={80}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                    Hip
                    </label>
                  </div>
                </div>
                <label htmlFor="hip" className={`text-xs -mt-6 `}>
                hip must be in cm and greater than 40 and less than 160
                </label>
              </div>

              <button
                className="mt-6 mb-6 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
