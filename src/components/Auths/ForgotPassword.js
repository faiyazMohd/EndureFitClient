import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Others/Navbar";
import Footer from "../Others/Footer";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Others/Alert";
import AlertContext from "../../context/alerts/AlertContext";
import EmailValidator from 'email-validator';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const ForgotPassword = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    const alertContext = useContext(AlertContext);
    const { showAlert } = alertContext;
    const navigate = useNavigate();
    const [color, setColor] = useState("#1a2b4b")
    const [forgotpasswordCred, setForgotpasswordCred] = useState({
      email: "",
      ques: "What is your favorite color?",
      ans: "",
      newPassword: "",
      confirmNewPassword: "",
    });
    const handleOnChange = (event) => {
        setForgotpasswordCred({ ...forgotpasswordCred, [event.target.name]: event.target.value });
    };
    const handleOnChangeForSelect = (event) => {
      console.log(event.target.selectedOptions[0].text);
      setForgotpasswordCred({
        ...forgotpasswordCred,
        [event.target.name]: event.target.selectedOptions[0].text,
      });
    };
    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        console.log(forgotpasswordCred);
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (
          forgotpasswordCred.email.length > 0 &&
          forgotpasswordCred.ans.length > 0 &&
          forgotpasswordCred.newPassword.length > 0 &&
          forgotpasswordCred.confirmNewPassword.length > 0
        ) {
        if (forgotpasswordCred.newPassword === forgotpasswordCred.confirmNewPassword) {
          
            const response = await fetch(`${BASE_URL}/api/auth/forgetpass`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: forgotpasswordCred.email,
                ques: forgotpasswordCred.ques,
                ans: forgotpasswordCred.ans,
                newPassword: forgotpasswordCred.newPassword,
              }),
            });
            const json = await response.json();
            if (json.success) {
              navigate("/login");
              setForgotpasswordCred({
                email: "",
                ques: "What is your favorite color?",
                ans: "",
                newPassword: "",
                confirmNewPassword: "",
              });
    
            }
            showAlert(json.success, json.msg);
         
        } else {
          showAlert(false, "Password and Confirm Password does not match");
        }
      }
      else{
        setColor("#b0271a")
        showAlert(false, "Fill out all the details");
      }
      };
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh]">
    <Navbar />
    <Alert />
    <div className="Login-Container mb-8 container rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#1a2b4b] mt-4 flex justify-center items-center w-[95%] md:w-[55%] m-auto">
      <div className="relative flex flex-col justify-center items-center rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block pt-5 font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Reset Password
        </h4>
        <p className="mt-4 text-lg md:text-xl block font-sans font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to reset the password.
        </p>
        <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
           
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                name="email"
                value={forgotpasswordCred.email}
                onChange={handleOnChange}
                required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                Email
              </label>
            </div>
            <label htmlFor="email" className={`text-xs -mt-6 ${color==="#1a2b4b"?"text-[#1a2b4b]":"text-red-600"} ${EmailValidator.validate(forgotpasswordCred.email) ?"hidden":""}`}>enter a valid email</label>



            <div class="relative h-10 min-w-[200px]">
              <select
                class="peer h-full w-full rounded-[7px] border border-[#1a2b4b] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#1a2b4b] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b] placeholder-shown:border-t-[#1a2b4b] empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-[#1a2b4b] "
                name="ques"
                value={forgotpasswordCred.ques}
                onChange={handleOnChangeForSelect}
                defaultValue={"What is your favorite color?"}
              >
                <option value="What is your favorite color?">
                  What is your favorite color?
                </option>
                <option value="What is the city where you were born?">
                  What is the city where you were born?
                </option>
                <option value="What is the name of your favorite sports team?">
                  What is the name of your favorite sports team?
                </option>
                <option value="What is your favorite sport to watch or play?">
                  What is your favorite sport to watch or play?
                </option>
                <option value="What is your favorite movie or TV show character?">
                  What is your favorite movie or TV show character?
                </option>
              </select>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#1a2b4b] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b]">
                Select a Security Question
              </label>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                name="ans"
                value={forgotpasswordCred.ans}
                onChange={handleOnChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b]  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                Security Question Answer
              </label>
            </div>
            <label htmlFor="ans" className={`text-xs -mt-6 ${color==="#1a2b4b"?"text-[#1a2b4b]":"text-red-600"} ${forgotpasswordCred.ans.length < 1 ?"":"hidden"}`}>answer cannot be blank</label>


            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                name="newPassword"
                value={forgotpasswordCred.newPassword}
                onChange={handleOnChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                Password
              </label>
            </div>
            <label htmlFor="password" className={`text-xs -mt-6 ${color==="#1a2b4b"?"text-[#1a2b4b]":"text-red-600"} ${forgotpasswordCred.newPassword.length < 4 ?"":"hidden"}`}>length for the password must be atleast 4 </label>


            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                name="confirmNewPassword"
                value={forgotpasswordCred.confirmNewPassword}
                onChange={handleOnChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                Confirm Password
              </label>
            </div>
            <label htmlFor="cpassword" className={`text-xs -mt-6 ${color==="#1a2b4b"?"text-[#1a2b4b]":"text-red-600"} ${forgotpasswordCred.confirmNewPassword === forgotpasswordCred.newPassword ?"hidden":""}`}>both the passwords must match</label>


          </div>


          
          <button
            className="mt-6 mb-4 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onClick={handleSignupSubmit}
          >
            Reset Pasword
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default ForgotPassword
