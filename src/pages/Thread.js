import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ForumContext from "../context/forum/ForumContext";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import AlertContext from "../context/alerts/AlertContext";
import UserContext from "../context/user/userContext";
import ThreadCard from "../components/Forum/ThreadCard";

const Thread = () => {
  document.title = "EndureFit - Forum"
  const { catId } = useParams();
  const [category, setCategory] = useState({});
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const userContext = useContext(UserContext);
  const { user, setUserInformation } = userContext;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    setUserInformation();
  }, []);
  const [userThread, setUserThread] = useState({
    catId: catId,
    title: "",
    description: "",
  });
  const forumContext = useContext(ForumContext);
  const { fetchAllCategories, addThread, threads, fetchAllThreads } =
    forumContext;

  useEffect(() => {
    fetchAllThreads(catId);
  }, []);

  const handleOnChange = (event) => {
    setUserThread({ ...userThread, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (userThread.title.length > 8 && userThread.description.length > 15) {
      const userPicture = user.picture ? user.picture : "";
      addThread(userThread, user.name, userPicture);
      setUserThread({
        catId: catId,
        title: "",
        description: "",
      });
    } else {
      showAlert(
        false,
        "title must be atleast 8 characters and description must be atleast 15 characters"
      );
    }
  };
  useEffect(() => {
    (async () => {
      const cats = await fetchAllCategories();
      cats.forEach((element, index) => {
        if (element._id === catId) {
          setCategory(element);
        }
      });
    })();
  }, []);
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
        <div className="rounded-2xl py-5 px-5 text-[#2a477f] border border-slate-600 mt-6 flex flex-col  mb-6 items-start w-[90%] shadow-[0px_9px_20px_13px_#90cdf4] bg-[#e6eef6]  m-auto">
          <h1 className="text-3xl  md:text-4xl font-semibold ">
            {" "}
            Welcome to {category.categoryName} Forum Category
          </h1>
          <p className="text-xl mt-5 font-normal">{category.categoryDesc}</p>
          <hr className="border border-slate-600 mt-8 w-full" />
          <p className="text-sm mt-8">
            This is a peer to peer forum for sharing knowledge with each other.{" "}
            <br />
            No Spam / Advertising / Self-promote in the forums is not
            allowed.Remain respectful of other members at all times. <br />
            Do not PM users asking for help. <br />
            Do not cross post questions. <br />
            Do not post “offensive” posts, links or images. <br />
            Do not post copyright-infringing material.
          </p>
        </div>
      <div className="h-20 mb-8 lg:mb-2  lg:h-0 lg:flex lg:justify-center">
        <Alert />
      </div>

      {localStorage.getItem("endurefit-token") ? (
        <div className=" w-[90%] m-auto text-[#2a477f]">
          <h3 className="text-4xl font-semibold "> Ask a Question</h3>
          <form>
            <div class="mt-6">
              <label for="title" class="block mb-2 text-xl font-medium">
                Problem Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={userThread.title}
                class="bg-gray-50 border border-3 border-blue-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "
                placeholder=""
                required
                min={8}
                onChange={handleOnChange}
              />
              <label htmlFor="title" className={`text-xs -mt-7 `}>
                Keep your title as short and crisp as possible.
              </label>
            </div>
            <div className="mt-5 mb-7">
              <label for="description" class="block mb-2 text-xl font-medium ">
                Elaaborate Your Question
              </label>
              <textarea
                id="description"
                rows="4"
                min={15}
                name="description"
                value={userThread.description}
                class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-3 border-blue-500 focus:ring-blue-500 focus:border-blue-500"
                required
                onChange={handleOnChange}
              ></textarea>
            </div>
            <button
              class="middle none center mr-3 rounded-lg bg-blue-500 py-2 px-4 font-sans text-base font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <Link to="/login">
          <h3 className="text-xl italic font-semibold w-[90%] m-auto text-[#2a477f] ">
            You are not logged in. Please login to start a Discussion.
          </h3>
        </Link>
      )}

      <div className=" w-[90%] m-auto text-[#2a477f] mt-8">
        <h3 className="text-4xl font-semibold ">Browse Questions</h3>
        <div className="mt-6 mb-7">
          {threads.length===0?(<div className="rounded-2xl py-5 px-5 text-[#2a477f] border border-slate-600 mt-6 flex flex-col  mb-6 items-start w-[90%] shadow-[0px_9px_20px_13px_#90cdf4] bg-[#e6eef6] ">
          <h1 className="text-3xl  md:text-4xl font-semibold ">
            {" "}
            No Threads Found!!
          </h1>
          <hr className="border border-slate-600 mt-8 w-full" />
          <p className="text-xl mt-5 font-normal">Be the first person to ask a question.</p>
</div>): threads.map((thread, index) => {
            return <ThreadCard key={thread._id} thread={thread} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thread;
