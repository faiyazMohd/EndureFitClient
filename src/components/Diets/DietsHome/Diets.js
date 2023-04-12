import React, { useEffect, useState } from "react";
import DietCard from "../DietCard";
import DietLoader from "../../Others/DietLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const apiKey = process.env.REACT_APP_RAPID_API_KEY_Diets;
const apiId = process.env.REACT_APP_RAPID_API_ID;

const Diets = ({ searchFor, queryFor }) => {
  const [queryResult, setQueryResult] = useState({
    results: [],
    totalResults: 0,
    nextPage: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const fetchQueryData = async () => {
    setQueryResult({
      results: [],
      totalResults: 0,
      nextPage: "",
    });

    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${queryFor}&app_id=${apiId}&app_key=${apiKey}`;
    setLoading(true);
    let data = await fetch(url);
    // console.log("data is  "+data);
    let parsedData = await data.json();
    setLoading(false);
    

    // console.log(parsedData);
    // console.log(parsedData.count);
    // console.log(parsedData._links.next.href);
    console.log("parsedData hits is "+parsedData);
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
    console.log("parsedData  is "+parsedData);
    console.log("from  is "+parsedData.from);
    console.log("to  is "+parsedData.to);
    console.log("parsedData hits is "+parsedData.hits);
    console.log("parsedData count is "+parsedData.count);
    console.log("next page link is "+parsedData._links);
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

  return (
    <div
      id="exercises"
      className=" w-[100%] md:w-[80%] flex justify-center items-center flex-col m-auto"
    >
      {isFirstLoad ? (
        queryResult.results.length === 0 && !loading ? (
          <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
            No results found for {queryFor}
          </h1>
        ) : (
          <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-4xl sm:text-4xl lg:text-4xl  tracking-wide ">
            Showing Results of {queryFor}
          </h1>
        )
      ) : (
        <h1 className="text-[#1a2b4b] capitalize text-center mt-20 font-bold text-2xl sm:text-2xl lg:text-2xl  tracking-wide ">
          "Nothing to show search above to get diets"
        </h1>
      )}
      {loading ? <DietLoader /> : ""}

          <InfiniteScroll
            dataLength={queryResult.results.length}
            next={fetchMoreQueryData}
            hasMore={queryResult.nextPage}
            loader={<DietLoader />}
          >
                <div className="mt-20 flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-2  xl:grid-cols-3  2xl:grid-cols-4 ">
                    {queryResult.results.map((diet, index) => (
                        <DietCard key={index} diet={diet} />
                        ))}
                </div>
            </InfiniteScroll>
    </div>
  );
};

export default Diets;
