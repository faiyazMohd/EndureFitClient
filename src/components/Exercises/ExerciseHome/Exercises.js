import React, { useEffect, useState } from "react";
import { Pagination, Typography, Box, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "../../../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "../../Others/Loader";

const Exercises = ({ bodyPart,setExercises, exercises,searchFor}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 2300, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
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
      setExercises(exercisesData)
    };
    fetchExercisesData()
  }, [bodyPart]);

  return (
    <div id="exercises" className=" w-[100%] md:w-[80%] flex justify-center items-center flex-col m-auto" >
      <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
          Showing Results of {searchFor===""?bodyPart==="all"?"all the exercises":bodyPart+" exercises": searchFor+" exercises"}
      </h1>
      {currentExercises.length?"":<Loader/>}
      
      <div className="mt-20 flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 "
      >
        { currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div  className="flex items-center mt-28 justify-center ">
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
