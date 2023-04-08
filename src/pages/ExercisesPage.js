import React, { useState } from "react";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import HeroBanner from "../components/Exercises/HeroBanner";
import SearchExercises from "../components/Exercises/SearchExercises";
import Exercises from "../components/Exercises/Exercises";

const ExercisesPage = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      <Alert />
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        exercises={exercises}
        bodyPart={bodyPart}
        setExercises={setExercises}
      />
    </div>
    
  );
};

export default ExercisesPage;
