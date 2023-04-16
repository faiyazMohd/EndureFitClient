import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Others/Navbar";
import Footer from "../Others/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Alert from "../Others/Alert";
import AlertContext from "../../context/alerts/AlertContext";
import EmailValidator from "email-validator";
import jwt_decode from "jwt-decode";
import UserContext from "../../context/user/userContext";
import LoaderContext from "../../context/loader/LoaderContext";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  // const pathname = useLocation().pathname;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const loaderContext = useContext(LoaderContext);
  const { setLoadingProgress } = loaderContext;
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const userContext = useContext(UserContext);
  const { setUserInformation } = userContext;
  const [color, setColor] = useState("#1a2b4b");
  const navigate = useNavigate();
  const [loginCred, setLoginCred] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (event) => {
    setLoginCred({ ...loginCred, [event.target.name]: event.target.value });
  };
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (loginCred.email.length > 0 && loginCred.password > 0) {
      setLoadingProgress(20);
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginCred.email,
          password: loginCred.password,
        }),
      });
      setLoadingProgress(50);
      const json = await response.json();
      setLoadingProgress(100);
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("endurefit-token", json.authToken);
        setUserInformation();
        navigate("/");
        setLoginCred({
          email: "",
          password: "",
        });
      }
      showAlert(json.success, json.msg);
    } else {
      setColor("#b0271a");
      showAlert(false, "Fill out all the details");
    }
  };

  // Addin Login with google
  const clientID = process.env.REACT_APP_CLIENT_ID;
  const handleCredentialResponse = async (googleResponse) => {
    // console.log("Encoded JWT ID token : " + response.credential);
    let userObject = jwt_decode(googleResponse.credential);
    // console.log(userObject);
    // setUserGoogle(userObject);
    const response = await fetch(`${BASE_URL}/api/auth/googlesignin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userObject.name,
        picture: userObject.picture,
        email: userObject.email,
      }),
    });
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("endurefit-token", json.authToken);
      setUserInformation();
      if (json.msg==="User Logged In Successfully") {
        navigate("/");
        
      }
      else if(json.msg==="User Created Successfully"){
        navigate("/createprofile");
      }
    }
    showAlert(json.success, json.msg);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: clientID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        scope: "profile email",
        width: 250,
        height: 80,
        longtitle: true,
        theme: "dark",
      } // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }, []);
  return (
    <>
      <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh]">
        <Navbar />
        <Alert />
        <div className="Login-Container  mb-8 container rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#1a2b4b] mt-4 flex justify-center items-center w-[95%] md:w-[55%] m-auto">
          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <h4 className="block pt-5 font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Login To EndureFit
            </h4>
            <p className="mt-4 text-xl block font-sans font-normal leading-relaxed text-gray-700 antialiased">
              Enter your details to Login
            </p>
            <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name="email"
                    value={loginCred.email}
                    onChange={handleOnChange}
                    required
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                    Email
                  </label>
                </div>
                <label
                  htmlFor="email"
                  className={`text-xs -mt-6 ${
                    color === "#1a2b4b" ? "text-[#1a2b4b]" : "text-red-600"
                  } ${
                    EmailValidator.validate(loginCred.email) ? "hidden" : ""
                  }`}
                >
                  enter a valid email
                </label>

                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type="password"
                    className="peer h-full w-full rounded-md border border-[#1a2b4b]  border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-semibold text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b]  placeholder-shown:border-t-[#1a2b4b]  focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeHolder=" "
                    name="password"
                    value={loginCred.password}
                    onChange={handleOnChange}
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b]  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b]  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-[#1a2b4b]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b] ">
                    Password
                  </label>
                </div>
                <label
                  htmlFor="password"
                  className={`text-xs -mt-6 ${
                    color === "#1a2b4b" ? "text-[#1a2b4b]" : "text-red-600"
                  } ${loginCred.password.length < 4 ? "" : "hidden"}`}
                >
                  length for the password must be atleast 4{" "}
                </label>
              </div>

              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-[#1a2b4b] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-[#1a2b4b] before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-light text-[#1a2b4b]"
                  htmlFor="checkbox"
                >
                  <p className="flex items-center font-sans text-sm font-normal leading-normal text-[#1a2b4b] antialiased">
                    Remember Me
                  </p>
                </label>
              </div>
              <button
                className="mt-6 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
                onClick={handleLoginSubmit}
              >
                Login
              </button>
              <div className="">
                <p className="mt-2 mb-4 block text-center font-sans text-base font-normal leading-relaxed text-[#1a2b4b] antialiased">
                  <Link
                    className="font-medium hover:font-semibold ml-3 text-blue-600 transition-colors hover:text-blue-700"
                    to="/forgotpassword"
                  >
                    forgot password?
                  </Link>
                </p>
                <p className="mt-1 mb-4 block text-center font-sans text-base font-normal leading-relaxed text-[#1a2b4b] antialiased">
                  Don't have an account?
                  <Link
                    className="font-medium hover:font-semibold ml-3 text-blue-600 transition-colors hover:text-blue-700"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className=" mt-2 flex flex-col justify-center items-center">
                <p>------------OR------------</p>
                <div id="signInDiv" className="mt-3 mb-4"></div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
