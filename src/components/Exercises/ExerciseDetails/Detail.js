import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../../../assets/icons/bodyPart2.jpeg";
import TargetImage from "../../../assets/icons/target2.jpeg";
// import TargetImage from "../../../assets/icons/target.png";
import EquipmentImage from "../../../assets/icons/gym-machine(2).png";
import Loader from "../../Others/Loader";

const Detail = ({ exerciseDetail,exerciseLoading }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <div className="flex justify-center flex-col md:flex-row-reverse mt-12">
      {exerciseLoading? <Loader/>:""}
      <img src={gifUrl} alt={name} className="w-[100%] md:-mt-16 md:w-[60%] mix-blend-darken" />

      <div className="w-[80%] md:w-[40%] ml-6">
        <h3 className="text-4xl capitalize font-bold text-[#1a2b4b] ">{name}</h3>
        <h1 className="text-xl font-bold tracking-tight text-[#364e7a] mt-4">
          Regular exercise can help you maintain independence and mobility as
          you age.Exercises keep you strong. <b className="text-[#1a2b4b]">{name}</b> is one of the best exercises
          to target your <b className="text-[#1a2b4b]">{target}</b>. It will help you improve your mood and gain
          energy.
        </h1>
        {extraDetail.map((item, index) => (
          <div key={index} className="flex justify-start items-center mt-6">
            <Button
              sx={{
                backgroundColor: "#8aa7de",
                borderRadius: "50%",
                width: "5rem",
                height: "5rem",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="mix-blend-darken"
                style={{ width: "100%", height: "100%", }}
              />
            </Button>
            <h6 className="text-2xl capitalize ml-4">
              {item.name}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
