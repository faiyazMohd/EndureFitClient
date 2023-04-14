import React, { useEffect, useState } from "react";
import DietCard from "./DietCard";
import DietLoader from "../../Others/DietLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = process.env.REACT_APP_RAPID_API_KEY_Diets;
const apiId = process.env.REACT_APP_RAPID_API_ID;

const Diets = ({ searchFor, queryFor, inputSearch, setInputSearch }) => {
  const [queryResult, setQueryResult] = useState({
    results: [],
    totalResults: 0,
    nextPage: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const fetchQueryData = async () => {
    setInputSearch(false);
    setQueryResult({
      results: [],
      totalResults: 0,
      nextPage: "",
    });
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryFor}&app_id=${apiId}&app_key=${apiKey}`;
    setLoading(true);
    console.log("query url  is " + url);
    let data = await fetch(url);
    // console.log("data is  "+data);
    let parsedData = await data.json();
    setLoading(false);

    // console.log(parsedData);
    // console.log(parsedData.count);
    // console.log(parsedData._links.next.href);
    // console.log("parsedData hits is "+parsedData);

    setQueryResult({
      results: parsedData.hits,
      totalResults: parsedData.count,
      nextPage: parsedData._links.next.href,
    });
  };

  const fetchSearchData = async () => {
    setInputSearch(true);
    setQueryResult({
      results: [],
      totalResults: 0,
      nextPage: "",
    });
    let ingredients = "";
    let diet = "";
    let cuisineType = "";
    let health = "";
    let mealType = "";
    let dishType = "";
    // if (searchFor.ingredients) {
    ingredients =
      searchFor.ingredients === 0 ? "" : `&ingr=${searchFor.ingredients}`;
    // }
    // if (searchFor.diet) {
    diet = searchFor.diet.length === 0 ? "" : `&diet=${searchFor.diet}`;
    // }
    // if (searchFor.cuisineType) {
    cuisineType =
      searchFor.cuisineType.length === 0
        ? ""
        : `&cuisineType=${searchFor.cuisineType}`;
    // }
    // if (searchFor.health) {
    health = searchFor.health.length === 0 ? "" : `&health=${searchFor.health}`;
    // }
    // if (searchFor.mealType) {
    mealType =
      searchFor.mealType.length === 0 ? "" : `&mealType=${searchFor.mealType}`;
    // }
    // if (searchFor.dishType) {
    dishType =
      searchFor.dishType.length === 0 ? "" : `&dishType=${searchFor.dishType}`;

    // }
    let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${apiId}&app_key=${apiKey}&calories=${searchFor.minCalories}-${searchFor.maxCalories}${health}${ingredients}${diet}${cuisineType}${mealType}${dishType}`;
    console.log("moddified url is " + url);
    // let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryFor}&app_id=${apiId}&app_key=${apiKey}`;
    setLoading(true);
    let data = await fetch(url);
    // console.log("data is  "+data);
    let parsedData = await data.json();
    setLoading(false);

    // console.log(parsedData);
    // console.log(parsedData.count);
    // console.log(parsedData._links.next.href);
    // console.log("parsedData hits is "+parsedData);

    setQueryResult({
      results: parsedData.hits,
      totalResults: parsedData.count,
      nextPage: parsedData._links.next.href,
    });
  };

  const fetchMoreQueryData = async () => {
    let url = queryResult.nextPage;
    console.log("url is " + url);
    setLoading(true);
    let data = await fetch(url);
    // console.log("data is  "+data);
    let parsedData = await data.json();

    setLoading(false);
    // console.log("parsedData  is "+parsedData);
    // console.log("from  is "+parsedData.from);
    // console.log("to  is "+parsedData.to);
    // console.log("parsedData hits is "+parsedData.hits);
    // console.log("parsedData count is "+parsedData.count);
    // console.log("next page link is "+parsedData._links);
    setQueryResult({
      results: queryResult.results.concat(parsedData.hits),
      totalResults: parsedData.count,
      nextPage: parsedData._links.next.href,
    });
  };

  useEffect(() => {
    fetchQueryData();
    if (queryFor.length === 0) {
      setIsFirstLoad(false);
    } else {
      setIsFirstLoad(true);
    }
  }, [queryFor]);

  useEffect(() => {
    if (searchFor.minCalories !== undefined) {
      fetchSearchData();
    }
    // if (queryFor.length === 0) {
    //   setIsFirstLoad(false);
    // } else {
    //   setIsFirstLoad(true);
    // }
  }, [searchFor]);

  return (
    <>
      <div
        id="diets"
        className=" w-[100%] md:w-[80%] flex justify-center items-center flex-col m-auto"
      >
        {inputSearch ? (
          queryResult.results.length === 0 && !loading ? (
            <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
              No results found for <br />{" "}
              <div className="flex mt-8 m-auto justify-center items-center">
                <div className=" w-auto flex flex-col rounded-xl justify-center items-center">
                  <h5 className="text-xl font-semibold" >
                    Calories ranging from {searchFor.minCalories} to{" "}
                    {searchFor.maxCalories}
                  </h5>
                  {searchFor.ingredients.length > 0 ? (
                    <h5 className="text-xl font-semibold">Ingredients upto {searchFor.ingredients}</h5>
                  ) : (
                    ""
                  )}

                  
                    {searchFor.diet.length > 0  ?(<h5 className="text-xl font-semibold">
                    Diet Type :{" "}{ searchFor.diet}
                  </h5>) : ""}


                    {searchFor.cuisineType.length > 0 
                      ? (<h5 className="text-xl font-semibold">
                      Cuisine Type :{" "}{searchFor.cuisineType}
                    </h5>)
                      : ""}
                  
                  

                    {searchFor.health.length > 0  ?(<h5 className="text-xl font-semibold">
                    Health : {" "}{ searchFor.health }
                  </h5>): ""}

                 
                    {searchFor.mealType.length > 0 ? ( <h5 className="text-xl font-semibold">
                    Meal Type :{" "}{searchFor.mealType }
                  </h5>): ""}
                    
                  
                    {searchFor.dishType.length > 0  ? (<h5 className="text-xl font-semibold">
                    Dish Type{" "}{searchFor.dishType }
                  </h5>): ""}
                </div>
              </div>
            </h1>
          ) : (
            <h1 className="text-[#1a2b4b] capitalize text-center mt-28 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
              Showing Results for <br />{" "}
              <div className="flex mt-8 m-auto justify-center items-center">
                <div className=" w-auto flex flex-col rounded-xl justify-center items-center">
                  <h5 className="text-xl font-semibold" >
                    Calories ranging from {searchFor.minCalories} to{" "}
                    {searchFor.maxCalories}
                  </h5>
                  {searchFor.ingredients.length > 0 ? (
                    <h5 className="text-xl font-semibold">Ingredients upto {searchFor.ingredients}</h5>
                  ) : (
                    ""
                  )}

                  
                    {searchFor.diet.length > 0  ?(<h5 className="text-xl font-semibold">
                    Diet Type :{" "}{ searchFor.diet}
                  </h5>) : ""}


                    {searchFor.cuisineType.length > 0 
                      ? (<h5 className="text-xl font-semibold">
                      Cuisine Type :{" "}{searchFor.cuisineType}
                    </h5>)
                      : ""}
                  
                  

                    {searchFor.health.length > 0  ?(<h5 className="text-xl font-semibold">
                    Health : {" "}{ searchFor.health }
                  </h5>): ""}

                 
                    {searchFor.mealType.length > 0 ? ( <h5 className="text-xl font-semibold">
                    Meal Type :{" "}{searchFor.mealType }
                  </h5>): ""}
                    
                  
                    {searchFor.dishType.length > 0  ? (<h5 className="text-xl font-semibold">
                    Dish Type{" "}{searchFor.dishType }
                  </h5>): ""}
                </div>
              </div>
            </h1>
          )
        ) : isFirstLoad ? (
          queryResult.results.length === 0 && !loading ? (
            <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
              No results found for {queryFor}
            </h1>
          ) : (
            <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
              Showing Results of {queryFor} diets
            </h1>
          )
        ) : (
          <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-2xl sm:text-2xl lg:text-2xl  tracking-wide ">
            "Nothing to show search above to get diets"
          </h1>
        )}
        {/* {isFirstLoad ? (
        queryResult.results.length === 0 && !loading ? (
          <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
            No results found for {queryFor}
          </h1>
        )
        
        : (
          <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
            Showing Results of {queryFor} diets
          </h1>
        )
      ) :
      
       (
        <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-2xl sm:text-2xl lg:text-2xl  tracking-wide ">
          "Nothing to show search above to get diets"
        </h1>
      )} */}
        {loading || searchFor === 0 ? <DietLoader /> : ""}

        <InfiniteScroll
          dataLength={queryResult.results.length}
          next={fetchMoreQueryData}
          hasMore={queryResult.nextPage}
          loader={<DietLoader />}
          style={{ overflow: "visible" }}
        >
          <div className="mt-20 flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-2  xl:grid-cols-3  2xl:grid-cols-4 ">
            {queryResult.results.map((diet, index) => (
              <DietCard key={index} diet={diet} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Diets;
