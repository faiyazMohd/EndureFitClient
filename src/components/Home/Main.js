import React from "react";
import bgPng from "../../assets/png images/pngImg2.png";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <div className="bg -mt-10 mx-auto flex-col 2xl:flex-row">
        <div className="bgPng w-[100%]">
          <img className="xl:m-auto" src={bgPng} alt=""/>
        </div>

        <div className=" md:m-auto max-w-2xl  mt-10 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1a2b4b] sm:text-6xl">
              "Endure the Challenge, Embrace the Results"
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#2a477f]">
              "Endure the Challenge, Embrace the Results" is a powerful slogan
              that speaks to the idea that success in fitness requires
              perseverance and hard work. This slogan encourages individuals to
              push themselves to their limits, to face challenges head-on, and
              to stay the course in the pursuit of their fitness goals.
            </p>
            <div className=" sm:mb-8 sm:flex sm:justify-center mt-5 ">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <Link to="/about" className="font-semibold text-[#2a477f] hover:font-bold">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Get to know more about us{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <Products /> */}
      </div>
    </>
  );
};

export default Main;
