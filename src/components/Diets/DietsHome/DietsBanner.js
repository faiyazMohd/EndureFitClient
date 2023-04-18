import React from "react";
// import bgPng from "../../../assets/png images/dietsPng1.png"
import bgPng from "../../../assets/png images/dietsPng2.png";
const DietsBanner = () => {
  return (
    <div className="bg mx-auto flex-col justify-center ">
      <div className="bgPng relative flex flex-col justify-center items-center">
        <img className=" m-auto mix-blend-multiply z-0" src={bgPng} alt="" />
        <div className="flex justify-evenly xl:justify-end 2xl:justify-around items-center w-[90%] xl:w-[70%] 2xl:w-[50%] absolute top-36 m-auto  z-10 ">
          <div className="w-[40%] ">
            <h1 className="text-[#771e1e] opacity-80  text-4xl  sm:text-6xl lg:text-8xl tracking-wide font-bold ">
              Vibrant
            </h1>
          </div>
          <div className="w-[40%] ">
            <h1 className="text-[#771e1e] opacity-80 text-4xl  sm:text-6xl lg:text-8xl tracking-wide font-bold ">
              {" "}
              Living
            </h1>
          </div>
        </div>
      </div>

      <div className=" m-auto max-w-2xl  flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a2b4b] sm:text-6xl">
            Nourish your soul, Fuel your body
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#2a477f]">
            Nourishing your soul and Fueling your body create a powerful
            combination that can help you feel your best both inside and out. A
            healthy diet that's rich in whole foods, lean proteins, and healthy
            fats can provide you with the nutrients your body needs to thrive,
            while also supporting your emotional and mental health. And when you
            prioritize self-care and emotional well-being, you're better able to
            maintain healthy eating habits and stick to your diet goals.{" "}
          </p>
          <div className=" sm:mb-8 sm:flex sm:justify-center mt-5 w-36 m-auto">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <a
                href="#exploreDiets"
                className="font-bold text-[#2a477f] hover:font-extrabold"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Explore Diets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietsBanner;
