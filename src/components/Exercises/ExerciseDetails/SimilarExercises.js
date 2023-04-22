import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "../ExerciseHome/HorizontalScrollbar";
import Loader from "../../Others/Loader";
const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {

  return (
    <div className="mt-32 mb-24">
      <Typography variant="h3" mb={5} textAlign={"center"}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
        
      >
        {targetMuscleExercises.length? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ):<Loader/>}
      </Stack>
      <Typography variant="h3" mb={8} mt={15} textAlign={"center"}>
        Exercises that target the same Equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
          width:"100%"
        }}
      >
        {equipmentExercises.length? (
          <HorizontalScrollbar data={equipmentExercises} />
        ):<Loader/>}
      </Stack>
    </div>
  );
};

export default SimilarExercises;
