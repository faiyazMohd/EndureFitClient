import React, { useContext, useEffect } from "react";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import Avatar from "@mui/material/Avatar";
import UserContext from "../context/user/userContext";
import { blue } from "@mui/material/colors";
const Profile = () => {
  const userContext = React.useContext(UserContext);
  const { user, setUserInformation, userProfile, setUserProfileInfo,setFitnessInformation,fitnessDetails } =userContext;

  useEffect(() => {
    setUserInformation();
    setUserProfileInfo();
    console.log("fitnessDetails inside profile is "+fitnessDetails.bmi);
   
  }, []);
  
  const date = {
    date: new Date(user.date).getDate(),
    month: new Date(user.date).toLocaleString("default", { month: "short" }),
    year: new Date(user.date).getFullYear(),
  };
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh]">
      <Navbar />
      <Alert />
      <div class="container mx-auto my-5 p-5 h-[140vh] md:h-[60vh] lg:h-[110vh] mb-20">
        <div class=" md:flex no-wrap md:-mx-2 ">
          {/* <!-- Left Side --> */}
          <div class="w-full md:w-3/12 md:mx-2 ">
            {/* <!-- Profile Card --> */}
            <div class="bg-white p-3 border-t-4 border-blue-400 rounded-2xl shadow-[-7px_9px_20px_4px_#63b3ed]">
              <div class="image overflow-hidden ">
                <Avatar
                  src={user.picture}
                  sx={{ width: 68, height: 68, bgcolor: blue[400] }}
                ></Avatar>
              </div>
              <h1 class="text-[#1a2b4b] font-bold text-xl leading-8 my-1">
                {user.name}
              </h1>
              <h3 class="text-blue-800 font-lg text-semibold leading-6">
                {user.email}
              </h3>
              <p class="text-sm mt-2 text-gray-500 hover:text-gray-600 leading-6">
                {userProfile.height ? userProfile.height : ""}cm tall and weighs{" "}
                {userProfile.weight ? userProfile.weight : ""}kg
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Member since</span>
                  <span class="ml-auto">
                    {" "}
                    {date.month} {date.date}, {date.year}
                  </span>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
          </div>

          {/* <!-- Right Side --> */}
          <div class="m-auto mt-8 md:mt-0 w-full md:w-9/12 lg:mx-2 h-64 rounded-2xl">
            {/* <!-- Profile tab --> */}
            {/* <!-- About Section --> */}
            <div class=" bg-white p-3  rounded-2xl border-t-4 border-blue-400 shadow-[9px_10px_20px_4px_#63b3ed]">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">User Details</span>
              </div>
              <div class="text-[#1a2b4b] ">
                <div class="grid md:grid-cols-2 text-sm gap-x-10 lg:gap-0">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Name</div>
                    <div class="px-4 py-2">{user.name}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Height</div>
                    <div class="px-4 py-2">{userProfile.height} cm</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email</div>
                    <div class="px-4 py-2 ">{user.email}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Weight</div>
                    <div class="px-4 py-2">{userProfile.weight} kg</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2 capitalize">{userProfile.gender}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Age</div>
                    <div class="px-4 py-2">{userProfile.age} years</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Acitvity-Level</div>
                    <div class="px-4 py-2">{userProfile.activityLevel}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Goal</div>
                    <div class="px-4 py-2 capitalize">{userProfile.goals}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Daily Calorie Requirements</div>
                    <div class="px-4 py-2 ">{fitnessDetails.dailyCalorieReq.BMR} calories</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Neck</div>
                    <div class="px-4 py-2 ">{userProfile.neck} cm</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Body Fat Percentage</div>
                    <div class="px-4 py-2 capitalize">{fitnessDetails.bodyFatPercentage} %</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Waist</div>
                    <div class="px-4 py-2 ">{userProfile.waist} cm</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Ideal Weight</div>
                    <div class="px-4 py-2 capitalize">{fitnessDetails.idealWeight} kg</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Hip</div>
                    <div class="px-4 py-2 ">{userProfile.hip} cm</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Diet Type</div>
                    <div class="px-4 py-2 capitalize">{userProfile.dietType}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">BMI</div>
                    <div class="px-4 py-2 capitalize">{fitnessDetails.bmi.bmi} - <b>{fitnessDetails.bmi.health}</b> <br/>healthy-bmi-range {fitnessDetails.bmi.healthy_bmi_range}</div>
                    {/* <div class="px-4 py-2"></div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of about section --> */}

            <div class="my-4"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
