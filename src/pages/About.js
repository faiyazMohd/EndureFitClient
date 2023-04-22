import React from "react";
import Footer from "../components/Others/Footer";
import Navbar from "../components/Others/Navbar";

const About = () => {
  document.title = "EndureFit - About"
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200">
      <Navbar />
      <div class="flex justify-center ">
        <div class="flex flex-col max-w-7xl justify-center items-center">
          {/* <div class="overflow-hidden w-3/4  shadow-[0px_9px_20px_13px_#90cdf4] rounded-2xl bg-white m-4  flex flex-col md:flex-row justify-center">
            <div class="overflow-hidden ">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?nature "
                alt=""
                class=""
              />{" "}
            </div>
            <div class="p-2 w-[60%]">
              <div class="font-bold text-lg text-black m-2 mt-10">
              About Us{" "}
              </div>
              <div class="text-gray-500 m-2 text-sm">
                At EndureFit , we're passionate about helping people live healthier, more active lifestyles. We believe that exercise and nutrition are essential components of a balanced and fulfilling life, and we're here to provide you with the resources you need to make positive changes.
                
              </div>
            </div>
          </div> */}

          <div class="overflow-hidden w-3/4  shadow-[0px_9px_20px_13px_#90cdf4] rounded-2xl bg-white m-4  flex flex-col md:flex-row justify-center">
          <div class="w-[100%] md:w-[40%] overflow-hidden ">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?fitness "
                alt=""
                class="w-full h-full"
              />{" "}
            </div>
            <div class="p-2  w-[100%] md:w-[60%]">
              <div class="font-bold text-xl text-[#2a477f] m-2 mt-10">
              About Us{" "}
              </div>
              <div class="text-[#2a477f] m-2 text-base ">
              At EndureFit , we're passionate about helping people live healthier, more active lifestyles. We believe that exercise and nutrition are essential components of a balanced and fulfilling life, and we're here to provide you with the resources you need to make positive changes.
              </div>
            </div>
            
          </div>

          <div class="overflow-hidden w-3/4  shadow-[0px_9px_20px_13px_#90cdf4] rounded-2xl bg-white m-4  flex flex-col md:flex-row justify-center">
            <div class="p-2 w-[100%] order-2 md:order-1 md:w-[60%]">
              <div class="font-bold text-xl text-[#2a477f] m-2 mt-10">
              Our Community{" "}
              </div>
              <div class="text-[#2a477f] m-2 text-base">
              We believe that a strong support system is essential for long-term success, which is why we've created a community forum section where you can connect with like-minded individuals, share your experiences, and get advice from experts. Our forum is a safe and supportive space where you can ask questions, share your progress, and celebrate your successes with others.
              </div>
            </div>
            <div class="w-[100%] md:w-[40%] order-1 md:order-2 overflow-hidden ">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?community "
                alt=""
                class="w-full h-full"
              />{" "}
            </div>
          </div>

          <div class="overflow-hidden w-3/4  shadow-[0px_9px_20px_13px_#90cdf4] rounded-2xl bg-white m-4  flex flex-col md:flex-row justify-center">
          <div class="w-[100%]   md:w-[40%] overflow-hidden ">
              {" "}
              <img
                src="https://source.unsplash.com/random/500x400/?bot "
                alt=""
                class="w-full h-full"
              />{" "}
            </div>
            <div class="p-2 w-[100%]  md:w-[60%] ">
              <div class="font-bold text-xl text-[#2a477f] m-2 mt-10">
              Our Support Bot.{" "}
              </div>
              <div class="text-[#2a477f] m-2 text-base">
              We know that starting a fitness journey can be intimidating, which is why we've created a support bot to make it easier for you to get the guidance and support you need. Our bot is available 24/7 to answer common questions and provide personalized workout and nutrition recommendations based on your goals and preferences.
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <Footer />
    </div>
  );
};

export default About;
