import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Auths/Login";
import SignUp from "./components/Auths/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import Exercises from "./pages/Exercises";
import Diets from "./pages/Diets";
import Forum from "./pages/Forum";
import AlertState from "./context/alerts/AlertState";
import Alert from "./components/Others/Alert";
import ForgotPassword from "./components/Auths/ForgotPassword";
const App = () => {
  return (

    <AlertState>
      {/* <Alert/> */}
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/exercises" element={<Exercises />} />
            <Route exact path="/diets" element={<Diets />} />
            <Route exact path="/forum" element={<Forum />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AlertState>
  );
};

export default App;
