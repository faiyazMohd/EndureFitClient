import React from "react";
import runner from "../../assets/png images/runnerPng.png";
import { Link } from "react-router-dom";

const AskingForSignUp = () => {
  return (
    <div className="mt-5 flex justify-around items-center pt-9 text-[#1a2b4b] relative">
      <div className="bgPng w-[70%] ">
        <img className="xl:m-auto" src={runner} alt="" />
      </div>
      <div className="ASking for SignUp align-bottom text-center flex flex-col justify-center items-center w-[60%] mt-6 md:mt-0  md:w-[30%] md:relative md:top-32 md:right-12">
        <h4 className="text-lg font-semibold">Unlock Your Full Potential with Our Fitness and Wellness Community</h4>
        <p className="mt-3 text-sm  leading-5 text-[#1a2b4b] hidden md:block">
        Looking to take your fitness and wellness journey to the next level? Our fitness and fitness forum website is here to help you do just that.
        Sign up today and start your journey towards a healthier, happier you!</p>
        <div className="sm:mb-8 mt-3">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <Link
              to="/login"
              className="font-semibold text-[#2a477f] hover:font-bold"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskingForSignUp;
