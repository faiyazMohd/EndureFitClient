import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Auths/Login";
import SignUp from "./components/Auths/SignUp";
import Home from "./pages/Home";
import About from "./pages/About";
import ExercisesPage from "./pages/ExercisesPage";
import Diets from "./pages/Diets";
import Forum from "./pages/Forum";
import AlertState from "./context/alerts/AlertState";
import ForgotPassword from "./components/Auths/ForgotPassword";
import UserState from "./context/user/UserState";
import LoadingBar from "react-top-loading-bar";
import LoaderContext from "./context/loader/LoaderContext";
import ExerciseDetails from "./pages/ExerciseDetails";
import UserDetails from "./pages/UserDetails";
import Profile from "./pages/Profile";
import Bookmarks from "./pages/Bookmarks";
import FitnessState from "./context/fitness/FitnessState";
import ExeBookmarksState from "./context/ExerciseBookmarks/ExeBookmarksState";

const App = () => {
  const loaderContext = useContext(LoaderContext);
  const { progress } = loaderContext;
  return (
    <AlertState>
      <UserState>
        <ExeBookmarksState>
          <FitnessState>
            <BrowserRouter>
              <LoadingBar color="#374151" progress={progress} />
              <Routes>
                <Route>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/exercises" element={<ExercisesPage />} />
                  <Route
                    exact
                    path="/exercisedetails/:id"
                    element={<ExerciseDetails />}
                  />
                  <Route exact path="/diets" element={<Diets />} />
                  <Route exact path="/forum" element={<Forum />} />
                  <Route exact path="/signUp" element={<SignUp />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route
                    exact
                    path="/forgotpassword"
                    element={<ForgotPassword />}
                  />
                  <Route
                    exact
                    path="/createprofile"
                    element={<UserDetails />}
                  />
                  <Route exact path="/profile" element={<Profile />} />
                  <Route exact path="/bookmarks" element={<Bookmarks />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </FitnessState>
        </ExeBookmarksState>
      </UserState>
    </AlertState>
  );
};

export default App;
