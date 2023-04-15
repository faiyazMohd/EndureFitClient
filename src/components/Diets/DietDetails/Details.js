import React, { useEffect, useState } from "react";
import Nutrition from "./Nutrition";
import { Button, Stack, Typography } from "@mui/material";

const Details = ({ diet }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (diet.totalNutrients) {
      setShow(true);
      console.log(diet);
    } else {
      setShow(false);
    }
  }, [diet]);
  return (
    <div className="flex w-[90%] md:w-[80%] m-auto  flex-col md:flex-row justify-between text-[#1a2b4b]">
      <div className="dietDetails  w-full md:w-[60%] flex flex-col md:flex-row">
        <div className="left w-full">
          <img
            className="w-full rounded-br-3xl rounded-tl-3xl"
            src={
              show
                ? diet.images.REGULAR.url
                  ? diet.images.REGULAR.url
                  : `https://source.unsplash.com/400x300/?${diet.recipe.label}`
                : `loading...`
            }
            alt={diet.label}
          />
           {diet.ingredientLines
              ? diet.ingredientLines.length === 0
                ? "Ingredients not available"
                :  <div className="">
                <h3 className="text-2xl font-bold mt-4">Ingredients are </h3>
                {diet.ingredientLines.map((ingredient, index) => {
                        return (
                          <p key={index} className="text-lg capitalize mx-2 font-medium ">{index+1}{") "}{ingredient}</p>
                        );
                      })}
                </div>
              : ""}
        </div>

        <div className="right w-full mb-12 md:mb-0  md:pl-5 mt-5 md:mt-0">
          <h3 className="text-3xl font-bold">{diet.label}</h3>
          <p className="text-lg  font-medium mt-1 w-[70%]">
            see full recipe on{" "}
            <a
              href={diet.url}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              {diet.source}
            </a>
          </p>
         
            {diet.cuisineType
              ? diet.cuisineType.length === 0
                ? ""
                :  <div className="">
                <h3 className="text-2xl font-bold mt-4">Cuisines :</h3>
                {diet.cuisineType.map((cuisineType, index) => {
                        return (
                          <p key={index} className="text-xl capitalize mx-2 font-medium ">{cuisineType}</p>
                        );
                      })}
                </div>
              : ""}

          
          {diet.dietLabels
              ? diet.dietLabels.length === 0
                ? ""
                : <div className="">
                <h3 className="text-2xl font-bold mt-4">Diets :</h3>
                {diet.dietLabels.map((dietLabel, index) => {
                        return (
                          <Button
                          key={index}
                            sx={{
                              backgroundColor: "#90d197",
                              color: "#1a2b4b",
                              borderTopLeftRadius: "20%",
                              borderBottomRightRadius: "30%",
                              fontWeight: "bold",
                              fontSize: "0.6rem",
                              marginX: "0.4rem",
                              marginY: "0.2rem",
                            }}
                          >
                            {dietLabel}
                          </Button>
                        );
                      })}
                </div>
              : ""}
          
            {diet.cautions
              ? diet.cautions.length === 0
                ? ""
                : <div className="">
                <h3 className="text-2xl font-bold mt-4">Cautions :</h3>
                {diet.cautions.map((cautions, index) => {
                        return (
                          <Button
                          key={index}
                            sx={{
                              backgroundColor: "#e79a9a",
                              color: "#1a2b4b",
                              borderTopLeftRadius: "20%",
                              borderBottomRightRadius: "30%",
                              fontWeight: "bold",
                              fontSize: "0.6rem",
                              marginX: "0.4rem",
                              marginY: "0.2rem",
                            }}
                          >
                            {cautions}
                          </Button>
                        );
                      })}
                </div>
              : ""}

               {diet.mealType
              ? diet.mealType.length === 0
                ? ""
                : <div className="">
                <h3 className="text-2xl font-bold mt-4">Meal Type :</h3>
                {diet.mealType.map((mealType, index) => {
                        return (
                          <p className="text-xl capitalize mx-2 font-medium ">{mealType}</p>
                        );
                      })}
                </div>
              : ""}
              {diet.dishType
              ? diet.dishType.length === 0
                ? ""
                : <div className="">
                <h3 className="text-2xl font-bold mt-4 mb-1">Dish Type :</h3>
                {diet.dishType.map((dishType, index) => {
                        return (
                          <Button
                          key={index}
                            sx={{
                              backgroundColor: "#d8c88c",
                              color: "#1a2b4b",
                              borderTopLeftRadius: "20%",
                              borderBottomRightRadius: "30%",
                              fontWeight: "bold",
                              fontSize: "0.6rem",
                              marginX: "0.4rem",
                              marginY: "0.2rem",
                            }}
                          >
                            {dishType}
                          </Button>
                        );
                      })}
                </div>
              : ""}
              {diet.healthLabels
              ? diet.healthLabels.length === 0
                ? ""
                : <div className="">
                <h3 className="text-2xl font-bold mt-4">Health :</h3>
                {diet.healthLabels.map((healthLabels, index) => {
                        return (
                          <Button
                          key={index}
                            sx={{
                              backgroundColor: "#c6a2de",
                              color: "#1a2b4b",
                              borderTopLeftRadius: "20%",
                              borderBottomRightRadius: "30%",
                              fontWeight: "bold",
                              fontSize: "0.6rem",
                              marginX: "0.4rem",
                              marginY: "0.2rem",
                            }}
                          >
                            {healthLabels}
                          </Button>
                        );
                      })}
                </div>
              : ""}

          
        </div>
      </div>
      <div className="">
        <Nutrition diet={diet} />
      </div>
    </div>
  );
};

export default Details;
