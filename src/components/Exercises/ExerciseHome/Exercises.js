import React, { useContext, useEffect, useState } from "react";
import { Pagination, Typography, Box, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "../../../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "../../Others/Loader";
import ExeBookmarksContext from "../../../context/ExerciseBookmarks/ExeBookmarksContext";
import { useNavigate } from "react-router-dom";

const Exercises = ({ bodyPart, setExercises, exercises, searchFor, load ,setLoad,setShowing,showing}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bodyPartLoad, setBodyPartLoad] = useState(false)
  const exercisesPerPage = 12;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const exeBookmarksContext = useContext(ExeBookmarksContext);
  const {fetchAllExeBookMarks,exerciseBookmarks } = exeBookmarksContext;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("endurefit-token") ) {
    fetchAllExeBookMarks();
    }
  // eslint-disable-next-line
  }, [])
  
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 2300, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      setBodyPartLoad(true)
      setLoad(true)
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setShowing("bodyPart")
      setExercises(exercisesData);
      setBodyPartLoad(false)
      setLoad(false)
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div
      id="exercises"
      className=" w-[100%] md:w-[80%] flex justify-center items-center flex-col m-auto"
    >
      {load?<h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
          "Searching for the results"
        </h1>:
        Object.keys(exercises).length === 0 ? (
          <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
            {searchFor!==0 ?(<>"No Results Found for "{searchFor}</>):"Searching for the results"}
          </h1>
        ) : (
          <>
           {showing==="search"?
            <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
              Showing Results of{" "}
              {searchFor === "" ? "" : searchFor + " exercises"}
            </h1>:
            <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
              Showing Results of{" "}
              {bodyPart === "all"
                ? "all the exercises"
                : bodyPart + " exercises"}
            </h1>}
          </>
        )
        }

      {load || bodyPartLoad ? <Loader /> : ""}

      <div className="mt-20 flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 ">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="flex items-center mt-28 justify-center ">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;
