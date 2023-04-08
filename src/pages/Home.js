import Navbar from "../components/Others/Navbar";
import Main from "../components/Home/Main";
import Products from "../components/Home/Products";
import AskingForSignUp from "../components/Home/AskingForSignUp";
import Testimoials from "../components/Home/Testimoials";
import Footer from "../components/Others/Footer"
import Alert from "../components/Others/Alert";
import UserContext from "../context/user/userContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const  userContext = useContext(UserContext);
  const {user} =  userContext;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <>
      <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200">
        <Navbar />
        <Alert/>
        <Main />
      </div>
      <div className="bg-gradient-to-bl from-blue-200 via-stone-100 to-blue-100">
        <Products />
        <div className="flex justify-center items-center">
          <AskingForSignUp />
        </div>
        <Testimoials />
        <Footer/>
      </div>
    </>
  );
}
