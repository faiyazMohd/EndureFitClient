import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Exercises/ExerciseDetails/Detail";
import ExerciseVideos from "../components/Exercises/ExerciseDetails/ExerciseVideos";
import SimilarExercises from "../components/Exercises/ExerciseDetails/SimilarExercises";
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Navbar from "../components/Others/Navbar";
import Footer from "../components/Others/Footer"
import Alert from "../components/Others/Alert";

const ExerciseDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [exerciseLoading, setExerciseLoading] = useState(false);
  const [exerciseVideosLoading, setExerciseVideosLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      setExerciseLoading(true);
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseLoading(false);

      setExerciseVideosLoading(true)
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      // console.log(exerciseVideosData);
      setExerciseVideosLoading(false)
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideosData.contents);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);


  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      <Alert/>
      <Detail exerciseDetail={exerciseDetail} exerciseLoading={exerciseLoading}/>
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
        exerciseVideosLoading={exerciseVideosLoading}
      />
      <SimilarExercises
        equipmentExercises={equipmentExercises}
        targetMuscleExercises={targetMuscleExercises}
      />
      <Footer/>
    </div>
  );
};

export default ExerciseDetails;
