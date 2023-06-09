import React, { useState } from 'react'
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";

import DietsBanner from '../components/Diets/DietsHome/DietsBanner';
import SearchDiets from '../components/Diets/DietsHome/SearchDiets';
import Diets from '../components/Diets/DietsHome/Diets';

const DietsPage = () => {
  const [queryFor, setQueryFor] = useState("organic");
  const [searchFor, setSearchFor] = useState({});
  const [inputSearch, setInputSearch] = useState(false)
  document.title = "EndureFit - Diets"
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      <DietsBanner/>
      <SearchDiets setQueryFor={setQueryFor} setSearchFor={setSearchFor}/>
      <div className="my-8">
      <Alert/>

      </div>
      <Diets queryFor={queryFor} searchFor={searchFor} inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Footer />
    </div>
  )
}

export default DietsPage
