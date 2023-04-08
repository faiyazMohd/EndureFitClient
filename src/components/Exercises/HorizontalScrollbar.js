import React,{useContext} from "react";
import { Box,Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu,VisibilityContext } from "react-horizontal-scrolling-menu";
// import LeftArrowIcon from '../../assets/getfit-Icons/left-arrow.png'
// import RightArrowIcon from '../../assets/getfit-Icons/right-arrow.png'
import LeftArrowIcon from '../../assets/icons/blue-left-arrow.png'
import RightArrowIcon from '../../assets/icons/blue-right-arrow.png'
import ExerciseCard from "./ExerciseCard"
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollPrev()} className="w-[17%] md:w-[7%] mt-16 ">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div onClick={() => scrollNext()} className="w-[17%] md:w-[7%] mt-16 ">
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
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
          >
            {isBodyParts?<BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />:<ExerciseCard exercise={item}/>}
          </Box>
        );
      })}
    </ScrollMenu>
    </>
  );
};

export default HorizontalScrollbar;
