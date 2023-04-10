import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card flex m-auto justify-center items-center" to={`/exercise/${exercise.id}`} style={{width:"360px"}}>
      {/* <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"  className="rounded-3xl"/>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#f5d7d7",
            backgroundColor: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#f5d7d7",
            backgroundColor: "#fcc757",
            fontSize: "16px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
      </Stack> */}

      <div className="shadow-card flex flex-col shadow-[0px_9px_20px_13px_#90cdf4] rounded-xl bg-white bg-clip-border justify-center items-center">
        <div className="hover:-m-[0.5rem] hover:shadow-[0px_12px_22px_2px_#3182ce] rounded-lg">
          <Link to={`/exercisedetails/${exercise.id}`} blur-shadow-image="true">
            <img 
              className="w-auto rounded-lg "
              src={exercise.gifUrl}
              alt={exercise.name} 
              loading="lazy"
            />
          </Link>
        </div>
        <div className=" capitalize mt-4 ">
          <Link to={`/exercisedetails/${exercise.id}`} className="">
            <p className="text-2xl text-center font-semibold">{exercise.name}</p>
          </Link>
        </div>
         {/* <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography> */}
          <div className="mt-4 flex justify-center items-center mb-6">
          {/* <Button
            sx={{
              ml: "21px",
              color: "black",
              backgroundColor: "rgb(59 130 246 / var(--tw-bg-opacity))",
              fontSize: "16px",
              borderRadius: "20px",
              textTransform: "capitalize",
            },{":hover":{backgroundColor:"background-color: rgb(96 165 250 / var(--tw-bg-opacity))"}}}
          >
          {exercise.bodyPart}
          </Button> */}
          <button
            className="middle none center capitalize  rounded-3xl bg-blue-500 hover:bg-blue-400 hover:text-black py-3 px-3 font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
          {exercise.bodyPart}
          </button>
          <button
            className="middle none center capitalize   rounded-3xl ml-6 bg-blue-500 hover:bg-blue-400 hover:text-black py-3 px-3 font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
          Bookmark
          </button>
          </div>
      </div>




      {/* tailblocks */}
      {/* <div className="container px-5 py-24 mx-auto border border-red-800">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden w-full">
              <img alt="content" className="object-cover object-center h-full w-full" src={exercise.gifUrl}/>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{exercise.name}</h2>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">{exercise.bodyPart}</button>
          </div>
        </div>
      </div> */}
     
     
     
      {/* <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="24px"
      >
        {exercise.name}
      </Typography> */}
    </Link>
  );

  
};

export default ExerciseCard;
