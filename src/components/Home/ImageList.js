import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from "../../assets/images/img1.jpg"
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 1000, height: 750,backgroundColor:"linear-gradient(90deg, rgba(191,219,254,1) 0%, rgba(245,245,244,1) 51%, rgba(191,219,254,1) 100%)" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://source.unsplash.com/800x600/?fitness",
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/800x600/?diet',
    title: 'Burger',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/800x600/?Workouts',
    title: 'Camera',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://source.unsplash.com/800x600/?Cardio',
    title: 'Coffee',
    row:2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/800x600/?Health',
    title: 'Hats',
    row:2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/800x600/?Endurance',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/800x600/?Nutrition',
    title: 'Basketball',
  },
  {
    img: 'https://source.unsplash.com/800x600/?Fitnessgoals,fitnessmotivation',
    title: 'Fern',
  },
  {
    img: 'https://source.unsplash.com/800x600/?fitness',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/800x600/?Recovery',
    title: 'Tomato basil',
  },
  {
    img: 'https://source.unsplash.com/800x600/?Nutritionsupplements',
    title: 'Sea star',
  },
  {
    img: 'https://source.unsplash.com/800x600/?Wellness',
    title: 'Bike',
    cols: 2,
  },
];