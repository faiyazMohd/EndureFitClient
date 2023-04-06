
import React from "react";
import { Link } from "react-router-dom";
import exerciseImg from "../../assets/png images/deadliftPng.png";
import dietImg from "../../assets/png images/healthyFoodsPng.png";
import forumImg from "../..//assets/png images/forum.png"
const Products = () => {
  return (
    <>
     <h1 className="text-7xl font-bold tracking-tight text-[#1a2b4b] text-center pt-12">
          Services
        </h1>
      <div className="flex justify-around items-center flex-wrap flex-col md:flex-row pt-9 text-[#1a2b4b]">
        <div className="Product-Exercise  text-center flex flex-col justify-center items-center w-[80%] mt-6 md:mt-0 md:w-[30%]">
        <div className="exerciseImg">
          <img className="w-1/2 m-auto" src={exerciseImg} alt="" />
        </div>
          <h2 className="text-3xl font-semibold">
          Exercises
          </h2>
          <p className="mt-3 leading-5 text-[#1a2b4b] ">
            At our fitness website, we believe that your health should be your
            top priority. That's why we've dedicated ourselves to providing you
            with the best possible tools and resources to help you achieve your
            fitness goals.{" "}
          </p>
          <div className="sm:mb-8 mt-3">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <Link
                to="/exercises"
                className="font-semibold text-[#2a477f] hover:font-bold"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Exercise <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>


        <div className="Product-Diets  text-center flex flex-col justify-center items-center w-[80%] mt-6 md:mt-0 md:w-[30%]">
        <div className="dietImg">
          <img className="w-1/2 m-auto" src={dietImg} alt="healthyFoods" />
        </div>
          <h2 className=" text-3xl font-semibold">
          Diets
          </h2>
          <p className="mt-3 leading-5 text-[#1a2b4b] ">
          At EndureFit, we believe that food is one of the most powerful tools we have to promote health and well-being. but we also know that making healthy choices doesn't have to be complicated or expensive. Our mission is to provide our customers with the knowledge and resources they need to make informed food choices that will help them look and feel their best.{" "}
          </p>
          <div className="sm:mb-8 mt-3">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <Link
                to="/diets"
                className="font-semibold text-[#2a477f] hover:font-bold"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Diets <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>


        <div className="Product-Forum  text-center flex flex-col justify-center items-center w-[80%] mt-6 md:mt-0 md:w-[30%]">
        <div className="exerciseImg mt-14">
          <img className="w-[60%] m-auto" src={forumImg} alt="" />
        </div>
          <h2 className="mt-9 text-3xl font-semibold">
          Forum
          </h2>
          <p className="mt-3 leading-5 text-[#1a2b4b]">
          Our mission is to provide a supportive and informative platform for individuals to share their experiences, seek advice, and connect with others who share their fitness goals.
          Our forum is open to individuals of all fitness levels, from beginners to seasoned athletes.{" "}
          </p>
          <div className="sm:mb-8 mt-3">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <Link
                to="/forum"
                className="font-semibold text-[#2a477f] hover:font-bold"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Forum <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
