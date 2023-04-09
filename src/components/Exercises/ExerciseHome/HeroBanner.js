import React from 'react'
import { Link } from 'react-router-dom'
import bgPng from "../../../assets/png images/pngImg3.png"
const HeroBanner = () => {
  return (
      <div className="bg mx-auto flex-col justify-center ">
        <div className="bgPng relative flex flex-col justify-center items-center">
          <img className=" m-auto mix-blend-multiply z-20" src={bgPng} alt=""/>
          <div className="flex justify-between xl:justify-end items-center w-[90%] m-auto -mt-16 md:-mt-24 lg:-mt-36 z-10 ">
          <div className="w-[40%] ">
            <h1 className='text-[#848485] opacity-60  text-4xl  sm:text-6xl lg:text-8xl tracking-wide font-bold '>Elevate</h1>
          </div>
          <div className="w-[40%] ">
            <h1 className='text-[#8e8f90]  opacity-60 text-4xl  sm:text-6xl lg:text-8xl tracking-wide font-bold '> Yourself</h1>
          </div>
          </div>
        </div>

        <div className=" m-auto max-w-2xl  mt-24  flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1a2b4b] sm:text-6xl">
            Train Hard, Live Strong
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#2a477f]">
            "Train Hard, Live Strong" might emphasize the importance of intense, challenging workouts and training programs that are designed to build strength, endurance, and resilience. This could include strength training, cardio, high-intensity interval training (HIIT), and other forms of physical activity that push the limits of what the body is capable of.
            </p>
            <div className=" sm:mb-8 sm:flex sm:justify-center mt-5 w-36 m-auto">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href="#exploreExercises" className="font-bold text-[#2a477f] hover:font-extrabold">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Explore Exercises
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroBanner
