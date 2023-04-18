import React, { useState } from "react";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Button from "@mui/material/Button";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalDiningIcon from "@mui/icons-material/LocalDining"; //mealtype
import KebabDiningIcon from "@mui/icons-material/KebabDining"; //cuisine
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen"; //dish
import RamenDiningIcon from "@mui/icons-material/RamenDining"; //dish alt
import EggAltIcon from "@mui/icons-material/EggAlt"; //diet
// import cookingIcon from  "../../../assets/icons/cooking(2).png"
import cookingIcon from  "../../../assets/icons/cooking.png"
import cooking2Icon from  "../../../assets/icons/flippedCooking.png"
const SearchDiets = ({ setSearchFor, setQueryFor }) => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState({
    minCalories: 300,
    maxCalories: 700,
    ingredients: 0,
    diet: "",
    cuisineType: "",
    health: "",
    mealType: "",
    dishType: "",
  });
  const handleQuery = () => {
    setQueryFor(query);

    setQuery("");
  };

  const handleSubmit = () => {
    setSearchFor(search);
    console.log(search);
    setSearch({
      minCalories: 300,
      maxCalories: 700,
      ingredients: 0,
      diet: "",
      cuisineType: "",
      health: "",
      mealType: "",
      dishType: "",
    });
  };

  const handleOnChange = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const handleOnChangeForSelect = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.selectedOptions[0].value,
    });
  };

  return (
    <>
      <div
        id="exploreDiets"
        className=" flex flex-col justify-center items-center mt-7"
      >
        <h1 className="text-[#1a2b4b] text-center mt-16 font-bold text-4xl sm:text-4xl lg:text-6xl mb-14 tracking-wide">
          Explore the diets
        </h1>
        <div className="flex justify-center items-center mt-5 w-[90%]">
          <form action="#">
            <h3 class="mb-4  text-xl md:text-2xl leading-none font-semibold text-[#1a2b4b] text-center">
              Enter the parameters to get started
            </h3>
            <div class="flex flex-col gap-4 mb-4 ">
              <div className="calories">
                <label
                  for="calories"
                  class="block mb-4 text-lg font-semibold mt-4 text-[#1a2b4b] text-center"
                >
                  Calories
                  <LocalFireDepartmentSharpIcon
                    sx={{ color: "red", marginBottom: "0.4rem" }}
                  />
                </label>
                <div className="flex justify-center items-center">
                  <div className="minCalorie justify-center items-center flex w-full">
                    <input
                      type="number"
                      name="minCalories"
                      id="minCalories"
                      value={search.minCalories}
                      max={search.maxCalories}
                      min={0}
                      onChange={handleOnChange}
                      class="bg-gray-50 w-[70%] border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block  p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <span className="text-xs ml-2">kcal</span>
                  </div>
                  <span>-</span>
                  <div className="flex justify-center items-center w-full">
                    <input
                      type="number"
                      name="maxCalories"
                      id="maxCalories"
                      value={search.maxCalories}
                      min={search.minCalories}
                      onChange={handleOnChange}
                      class="bg-gray-50 w-[70%] border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block  p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <span className="text-xs ml-2">kcal</span>
                  </div>
                </div>
              </div>
              <div className="Ingredients mt-4 flex justify-center items-center gap-4">
                <div className="flex items-center">
                  <label
                    for="ingredients"
                    class="text-md font-bold text-gray-900"
                  >
                    Ingredients{" "}
                    <ShoppingBasketIcon
                      sx={{
                        color: "#8e0eb1",
                        marginBottom: "0.4rem",
                        marginLeft: "0.2rem",
                      }}
                    />
                    {"  "}
                  </label>
                  <span>:</span>
                </div>
                <div className="">
                  <input
                    type="number"
                    name="ingredients"
                    id="ingredients"
                    min={0}
                    onChange={handleOnChange}
                    class="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={search.ingredients}
                  />
                </div>
              </div>

              <div className="dietAndCuisine flex justify-around items-center mt-4">
                <div className="diet flex flex-col justify-center items-center">
                  <div className="w-full flex justify-center">
                    <label
                      for="diet"
                      class=" text-md font-bold text-gray-900"
                    >
                      Diet{" "}
                      <EggAltIcon
                        sx={{
                          color: "#caaa2c",
                          marginBottom: "0.4rem",
                          marginLeft: "0.2rem",
                        }}
                      />{" "}
                    </label>
                    <span>:</span>
                  </div>
                  <div className="w-44">
                    <select
                      id="diet"
                      name="diet"
                      value={search.diet}
                      onChange={handleOnChangeForSelect}
                      class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected="" value="">
                        choose a diet
                      </option>

                      <option value="balanced"> balanced </option>

                      <option value="high-fiber"> high-fiber </option>

                      <option value="high-protein"> high-protein </option>

                      <option value="low-carb"> low-carb </option>

                      <option value="low-fat"> low-fat </option>

                      <option value="low-sodium"> low-sodium </option>
                    </select>
                  </div>
                </div>
                <div className="cuisine flex flex-col justify-center items-center">
                  <div className="flex justify-center">
                    <label
                      for="cuisineType"
                      class="text-md font-bold text-gray-900"
                    >
                      Cuisine{" "}
                      <KebabDiningIcon
                        sx={{
                          color: "brown",
                          marginBottom: "0.4rem",
                          marginLeft: "0.2rem",
                        }}
                      />{" "}
                    </label>
                    <span>:</span>
                  </div>
                  <div className="w-44">
                    <select
                      id="cuisineType"
                      name="cuisineType"
                      value={search.cuisineType}
                      onChange={handleOnChangeForSelect}
                      class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected="" value="">
                        choose a cuisine type
                      </option>
                      <option value="Indian"> Indian </option>
                      <option value="Italian"> Italian </option>
                      <option value="American"> American </option>

                      <option value="Chinese"> Chinese </option>
                      <option value="Japanese"> Japanese </option>

                      <option value="British"> British </option>

                      <option value="Caribbean"> Caribbean </option>

                      <option value="Central Europe"> Central Europe </option>
                      <option value="Asian"> Asian </option>

                      <option value="Eastern Europe"> Eastern Europe </option>

                      <option value="French"> French </option>

                      <option value="Kosher"> Kosher </option>

                      <option value="Mediterranean"> Mediterranean </option>

                      <option value="Mexican"> Mexican </option>

                      <option value="Middle Eastern"> Middle Eastern </option>

                      <option value="Nordic"> Nordic </option>

                      <option value="South American"> South American </option>

                      <option value="South East Asian">
                        {" "}
                        South East Asian{" "}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="Health flex justify-around items-center mt-4">
                <div className="diet flex flex-col justify-center items-center">
                  <div className="w-full flex justify-center">
                    <label
                      for="ingredients"
                      class=" text-md font-bold text-gray-900"
                    >
                      Health{" "}
                      <HealthAndSafetyIcon
                        sx={{
                          color: "#e20303",
                          marginBottom: "0.4rem",
                          marginLeft: "0.2rem",
                        }}
                      />{" "}
                    </label>
                    <span>:</span>
                  </div>
                  <div className="w-44">
                    <select
                      id="health"
                      name="health"
                      value={search.health}
                      onChange={handleOnChangeForSelect}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected="" value="">
                        choose a health
                      </option>

                      <option value="low-sugar"> low-sugar </option>

                      <option value="alcohol-free"> alcohol-free </option>

                      <option value="celery-free"> celery-free </option>

                      <option value="crustacean-free"> crustacean-free </option>

                      <option value="dairy-free"> dairy-free </option>

                      <option value="egg-free"> egg-free </option>

                      <option value="fish-free"> fish-free </option>

                      <option value="fodmap-free"> fodmap-free </option>

                      <option value="gluten-free"> gluten-free </option>

                      <option value="immuno-supportive">
                        {" "}
                        immuno-supportive{" "}
                      </option>

                      <option value="keto-friendly"> keto-friendly </option>

                      <option value="kidney-friendly"> kidney-friendly </option>

                      <option value="kosher"> kosher </option>

                      <option value="low-fat-abs"> low-fat-abs </option>

                      <option value="low-potassium"> low-potassium </option>

                      <option value="lupine-free"> lupine-free </option>

                      <option value="Mediterranean"> Mediterranean </option>

                      <option value="mollusk-free"> mollusk-free </option>

                      <option value="alcohol-cocktail">
                        {" "}
                        alcohol-cocktail{" "}
                      </option>
                      <option value="mustard-free"> mustard-free </option>

                      <option value="no-oil-added"> no-oil-added </option>

                      <option value="paleo"> paleo </option>

                      <option value="peanut-free"> peanut-free </option>

                      <option value="pescatarian"> pescatarian </option>

                      <option value="pork-free"> pork-free </option>

                      <option value="red-meat-free"> red-meat-free </option>

                      <option value="sesame-free"> sesame-free </option>

                      <option value="shellfish-free"> shellfish-free </option>

                      <option value="soy-free"> soy-free </option>

                      <option value="sugar-conscious"> sugar-conscious </option>

                      <option value="sulfite-free"> sulfite-free </option>

                      <option value="tree-nut-free"> tree-nut-free </option>

                      <option value="vegan"> vegan </option>

                      <option value="vegetarian"> vegetarian </option>

                      <option value="wheat-free"> wheat-free </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mealAndDishType flex justify-around items-center mt-4">
                <div className="meal flex flex-col justify-center items-center">
                  <div className="w-full flex justify-center">
                    <label
                      for="mealType"
                      class=" text-md font-bold text-gray-900"
                    >
                      Meal Type{" "}
                      <LocalDiningIcon
                        sx={{
                          color: "#223a59b5",
                          marginBottom: "0.4rem",
                          marginLeft: "0.2rem",
                        }}
                      />{" "}
                    </label>
                    <span>:</span>
                  </div>
                  <div className="w-44">
                    <select
                      id="mealType"
                      name="mealType"
                      value={search.mealType}
                      onChange={handleOnChangeForSelect}
                      class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected="" value="">
                        choose a meal type
                      </option>
                      <option value="Breakfast"> Breakfast </option>
                      <option value="Dinner"> Dinner </option>
                      <option value="Lunch"> Lunch </option>
                      <option value="Snack"> Snack </option>
                      <option value="Teatime"> Teatime </option>f
                    </select>
                  </div>
                </div>
                <div className="dish flex flex-col justify-center items-center">
                  <div className="flex justify-center">
                    <label
                      for="dishType"
                      class="text-md font-bold text-gray-900"
                    >
                      Dish Type{" "}
                      <RamenDiningIcon
                        sx={{
                          color: "#2c8513",
                          marginBottom: "0.4rem",
                          marginLeft: "0.2rem",
                        }}
                      />{" "}
                    </label>
                    <span>:</span>
                  </div>
                  <div className="w-44">
                    <select
                      id="dishType"
                      name="dishType"
                      value={search.dishType}
                      onChange={handleOnChangeForSelect}
                      class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option selected="" value="">
                        choose a dish type
                      </option>
                      <option value="Biscuits and cookies">
                        {" "}
                        Biscuits and cookies{" "}
                      </option>

                      <option value="Bread"> Bread </option>

                      <option value="Cereals"> Cereals </option>

                      <option value="Condiments and sauces">
                        {" "}
                        Condiments and sauces{" "}
                      </option>

                      <option value="Desserts"> Desserts </option>

                      <option value="Drinks"> Drinks </option>

                      <option value="Main course"> Main course </option>

                      <option value="Pancake"> Pancake </option>

                      <option value="Preps"> Preps </option>

                      <option value="Preserve"> Preserve </option>

                      <option value="Salad"> Salad </option>

                      <option value="Sandwiches"> Sandwiches </option>

                      <option value="Side dish"> Side dish </option>

                      <option value="Soup"> Soup </option>

                      <option value="Starter"> Starter </option>

                      <option value="Sweets"> Sweets </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> */}
            <div className="flex flex-col justify-center items-center mt-8">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2563eb",
                  textTransform: "capitalize",
                  paddingY: 1,
                }}
                href="#diets"
                onClick={handleSubmit}
                disabled={
                  search.minCalories > search.maxCalories ||
                  search.ingredients < 0
                }
              >
                <img src={cookingIcon} alt="" className="-rotate-12"/>
                <b>Search</b>
                <img src={cooking2Icon} alt="" className="rotate-12"/>
              </Button>
              <span
                className={`text-xs text-red-600 ${
                  search.minCalories > search.maxCalories ? "" : "hidden"
                }`}
              >
                please check the calories range
              </span>
              <span
                className={`text-xs text-red-600 ${
                  search.ingredients < 0 ? "" : "hidden"
                }`}
              >
                ingredients cannot be negative
              </span>
            </div>
          </form>
        </div>

        {/* search by querying */}
        <h1 className="text-[#1a2b4b] text-center mt-24 font-bold text-4xl sm:text-4xl lg:text-5xl mb-14 tracking-wide ">
          Search For the diets
        </h1>

        <div class="flex items-center md:w-[36%]">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
              }}
              class="shadow-[-6px_8px_10px_2px_#90cdf4] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
              placeholder="Search Diets"
            />
          </div>
          <button
            type="button"
            onClick={handleQuery}
            class="shadow-[-4px_2px_8px_1px_#90cdf4] p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchDiets;
