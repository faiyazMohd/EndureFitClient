import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../../../assets/getfit-Icons/body-part.png";
import TargetImage from "../../../assets/getfit-Icons/target.png";
import EquipmentImage from "../../../assets/getfit-Icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
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
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px", md: "30px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item,index) => (
          <Stack
            key={index}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button sx={{backgroundColor:'#fff2db',borderRadius:'50%',width:'80px',height:'80px'}}>
                <img src={item.icon} alt={item.name} style={{width:'50%',height:'50%'}}/>
            </Button>
            <Typography variant="h6" textTransform="capitalize">
                {item.name}

            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
