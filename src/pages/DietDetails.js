import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, youtubeOptions } from "../utils/fetchData";
import ExerciseVideos from "../components/Exercises/ExerciseDetails/ExerciseVideos";
import Navbar from "../components/Others/Navbar";
import Footer from "../components/Others/Footer";
import DietVideos from "../components/Diets/DietDetails/DietVideos";
import Nutrition from "../components/Diets/DietDetails/Nutrition";
import Details from "../components/Diets/DietDetails/Details";
import Alert from "../components/Others/Alert";

const apiKey = process.env.REACT_APP_RAPID_API_KEY_Diets;
const apiId = process.env.REACT_APP_RAPID_API_ID;

const DietDetails = () => {
  const [dietDetails, setDietDetails] = useState({});
  const [dietVideos, setDietVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videosLoading, setVideosLoading] = useState(false);
  
  const { id } = useParams();
  const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${apiId}&app_key=${apiKey}`;
  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
  console.log(url);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  useEffect(() => {
    const fetchDietData = async ()=>{
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setLoading(false);
      setDietDetails(parsedData.recipe);
      console.log(parsedData.recipe);
      setVideosLoading(true)
      console.log("dietDetails.label is "+parsedData.recipe.label);
      const dietVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${parsedData.recipe.label}`,
        youtubeOptions
        );
        setDietVideos(dietVideosData.contents);
        setVideosLoading(false)
        // console.log(dietVideosData);
    }
    fetchDietData()
  }, [id]);
  
  return( <>
<div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      
      <Details diet={dietDetails} />
    
      <DietVideos
        dietVideos={dietVideos}
        name={dietDetails.label}
        videosLoading={videosLoading}
      />
      <Footer/>
    </div>
  </>);
};

export default DietDetails;
