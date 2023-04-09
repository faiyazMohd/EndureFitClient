import React, { useState } from "react";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import HeroBanner from "../components/Exercises/ExerciseHome/HeroBanner";
import SearchExercises from "../components/Exercises/ExerciseHome/SearchExercises";
import Exercises from "../components/Exercises/ExerciseHome/Exercises";

const ExercisesPage = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [searchFor, setSearchFor] = useState("")
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      <Alert />
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setSearchFor={setSearchFor}
      />

      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
        searchFor={searchFor}
      />
    </div>
    
  );
};

export default ExercisesPage;
