import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "../ExerciseHome/HorizontalScrollbar";
import Loader from "../../Others/Loader";
const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
    console.log(equipmentExercises);
    console.log(targetMuscleExercises);
  return (
    <Box sx={{ mt: { lg: "100px", md: "70px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercise that target the same muscle group
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
      <Typography variant="h3" mb={5} mt={10}>
        Exercise that target the same Equipment
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
    </Box>
  );
};

export default SimilarExercises;
