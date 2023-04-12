import React, { useState } from "react";

const SearchDiets = ({setSearchFor,setQueryFor}) => {
    const [query, setQuery] = useState("")
    
    const handleQuery = ()=>{
        setQueryFor(query);
        setQuery("")
    }
  return (
    <>
    <div id="exploreDiets" className=" flex flex-col justify-center items-center mt-7">
      <h1 className="text-[#1a2b4b] text-center mt-16 font-bold text-4xl sm:text-4xl lg:text-6xl mb-14 tracking-wide">
          Explore the diets 
        </h1>
    <div className="flex justify-center items-center">
      <form action="#">
        <h3 class="mb-4 text-lg font-medium leading-none text-gray-900">
          Invoice details
        </h3>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="username.example"
              required=""
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required=""
            />
          </div>{" "}
          <div>
            <label
              for="confirm-password"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required=""
            />
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next Step: Payment Info
        </button>
      </form>
    </div>


        <h1 className="text-[#1a2b4b] text-center mt-24 font-bold text-4xl sm:text-4xl lg:text-5xl mb-14 tracking-wide ">
          Search For the diets
        </h1>

        <div class="flex items-center md:w-[36%]">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
              }}
              class="shadow-[-6px_8px_10px_2px_#90cdf4] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
              placeholder="Search Exercises"
            />
          </div>
          <button
            type="button"
            onClick={handleQuery}
            class="shadow-[-4px_2px_8px_1px_#90cdf4] p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
        
      </div>
    </>

    
  );
};

export default SearchDiets;
