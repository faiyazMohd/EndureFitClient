import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from './Typography';
import img1 from "../../../assets/bg images/bg1.jpg"
import neck from "../../../assets/workout Images/neck.jpg"
import shoulders from "../../../assets/workout Images/shoulders.webp"
import chest from "../../../assets/workout Images/chest.jpg"
import cardio from "../../../assets/workout Images/cardio.webp"
import back from "../../../assets/workout Images/back.jpeg.jpg"
import lowerArms from "../../../assets/workout Images/lower-arms.webp"
import upperArms from "../../../assets/workout Images/upper-arms.webp"
import waist from "../../../assets/workout Images/waist.webp"
import lowerLegs from "../../../assets/workout Images/lower-legs.jpg"
import upperLegs from "../../../assets/workout Images/upper-legs.jpg"
const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const bodyParts = [
  {
    url:img1,
    title: 'all',
    width: '40%',
  },
  {
    url: neck,
    title: 'neck',
    width: '20%',
  },
  {
    url: shoulders,
    title: 'shoulders',
    width: '40%',
  },
  {
    url: chest,
    title: 'chest',
    width: '38%',
  },
  {
    url: cardio,
    title: 'cardio',
    width: '24%',
  },
  {
    url: back,
    title: 'back',
    width: '38%',
  },
  
  {
    url: lowerArms,
    title: 'lower arms',
    width: '30%',
  },
  {
    url: waist,
    title: 'waist',
    width: '40%',
  },
  {
    url: upperArms,
    title: 'upper arms',
    width: '30%',
  },
  {
    url: lowerLegs,
    title: 'lower legs',
    width: '50%',
  },
  {
    url: upperLegs,
    title: 'upper legs',
    width: '50%',
  },
];

export default function Categories({ setBodyPart}) {
    // console.log(images.url);
  return (
    <Container component="section" sx={{ mt: 0, mb: 4 }}>
      <Box sx={{ mt: 0, display: 'flex', flexWrap: 'wrap' }}>
        {bodyParts.map((bodyPart) => (
          <ImageIconButton
            key={bodyPart.title}
            style={{
              width: bodyPart.width,
              height:"200px"
            }}
            onClick={() => {
                setBodyPart(bodyPart.title);
              }}
              href="#exercises"
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${bodyPart.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
                sx={{textTransform:"capitalize"}}
              >
                {bodyPart.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
