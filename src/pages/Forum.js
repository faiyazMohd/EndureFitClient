import React from "react";
import Footer from "../components/Others/Footer";
import Navbar from "../components/Others/Navbar";
import Carousel from "../components/Forum/Carousel";
import Alert from "../components/Others/Alert";
import ForumContext from "../context/forum/ForumContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import CategoryCard from "../components/Forum/CategoryCard";

const Forum = () => {
  const forumContext = useContext(ForumContext);
  const { categories, fetchAllCategories } = forumContext;
  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      <Alert />
      {/* <Carousel/> */}
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-center text-[#2a477f] md:text-4xl mt-5">
          EndureFit Forum - Browse Categories
        </h1>
        <div className="mt-20 w-[90%] flex flex-col m-auto flex-wrap justify-center items-center  gap-20 md:grid  md:grid-cols-3 xl:grid-cols-3  2xl:grid-cols-4 ">
          {categories.map((category, index) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forum;
