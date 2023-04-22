import React from "react";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import BookMarksTabs from "../components/Others/BookMarksTabs";


const Bookmarks = () => {
  document.title = "EndureFit - Bookmarks"
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh] ">
      <Navbar />
      <Alert />
      <div className="mt-5 mb-8">
        <h1 className="text-5xl font-bold text-[#1a2b4b] text-center">Bookmarks</h1>
      </div>

      <BookMarksTabs />
      <Footer />
    </div>
  );
};

export default Bookmarks;
