import React,{useContext} from "react";
import { Box,Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu,VisibilityContext } from "react-horizontal-scrolling-menu";
// import LeftArrowIcon from '../../../assets/getfit-Icons/left-arrow.png'
// import RightArrowIcon from '../../../assets/getfit-Icons/right-arrow.png'
// import ExerciseCard from "../ExerciseHome/ExerciseCard"
import SimilarExercisesCard from "../ExerciseDetails/SimilarExercisesCard"
import ExerciseCard from "../ExerciseHome/ExerciseCard"
// import LeftArrowIcon from '../../../assets/getfit-Icons/left-arrow.png'
// import RightArrowIcon from '../../../assets/getfit-Icons/right-arrow.png'
import LeftArrowIcon from '../../../assets/icons/blue-left-arrow.png'
import RightArrowIcon from '../../../assets/icons/blue-right-arrow.png'
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow hidden sm:block absolute hover:cursor-pointer w-24 z-50 top-[100%]">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow hidden sm:block absolute hover:cursor-pointer w-24 z-50 top-[100%] sm:left-[88%] md:left-[90%] xl:left-[93%] lg:left-[95%]"> 
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart ,isBodyParts}) => {
  
  return (
    <>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          ><ExerciseCard exercise={item}/>
          </Box>
        );
      })}
    </ScrollMenu>
    </>
  );
};

export default HorizontalScrollbar;
