import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Others/Navbar";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import AlertContext from "../context/alerts/AlertContext";
import UserContext from "../context/user/userContext";
import ForumContext from "../context/forum/ForumContext";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import CommentCard from "../components/Forum/CommentCard";

const Comment = () => {
  const { threadId } = useParams();
  const [thread, setThread] = useState({});
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
  const [userComment, setUserComment] = useState({
    threadId: threadId,
    comment: "",
  });
  const forumContext = useContext(ForumContext);
  const {categories,fetchAllCategories,addThread,threads,fetchAllThreads,findThread,comments,fetchAllComments,addComment}= forumContext;

  useEffect(() => {
    fetchAllComments(threadId);
  }, []);

  const handleOnChange = (event) => {
    setUserComment({ ...userComment, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (userComment.comment.length > 10 ) {
      const userPicture = user.picture ? user.picture : "";
      addComment(userComment, user.name, userPicture);
      setUserComment({
        threadId: threadId,
        comment: "",
      });
    } else {
      showAlert(
        false,
        "comment must be atleast 10 characters"
      );
    }
  };
  useEffect(() => {
    (async () => {
      const thread = await findThread(threadId);
      setThread(thread[0]);
    })();
  }, [threads]);
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[100vh]">
      <Navbar />
      <div className="rounded-2xl py-5 px-5 text-[#2a477f] border border-slate-600 mt-6 flex flex-col  mb-6 items-start w-[90%] shadow-[0px_9px_20px_13px_#90cdf4] bg-[#e6eef6]  m-auto">
        <h1 className="text-3xl  md:text-4xl font-semibold ">
          {thread.threadTitle}
        </h1>
        <p className="text-xl mt-5 font-normal">{thread.threadDesc}</p>
        <hr className="border border-slate-600 mt-8 w-full" />
        <div className="left flex  md:w-[80%]">
          <div className="profile flex  items-center w-[100%] mt-4">
            <Avatar src={thread.userPicture} sx={{ bgcolor: blue[400] }} />
            <p className="font-bold ml-3">{thread.userName}</p>
          </div>
        </div>
      </div>
      <div className="h-20 mb-8 lg:mb-2  lg:h-0 lg:flex lg:justify-center">
        <Alert />
      </div>

      {localStorage.getItem("endurefit-token") ? (
        <div className=" w-[90%] m-auto text-[#2a477f]">
          <h3 className="text-4xl font-semibold "> </h3>
          <div class="">
            <form class="w-full  shadow-[0px_9px_20px_13px_#90cdf4] bg-white px-4 pt-2 flex items-center justify-center  mb-4 max-w-lg rounded-2xl text-[#2a477f] border border-slate-600 ">
              <div class="flex flex-wrap -mx-3 mb-6">
                <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">
                  Add a new comment
                </h2>
                <div class="w-full md:w-full px-3 mb-2 mt-2">
                  <textarea
                    class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="comment"
                    id="comment"
                    value={userComment.comment}
                    placeholder="Type Your Comment"
                    required
                    onChange={handleOnChange}
                  ></textarea>
                </div>
                <div class="w-full flex items-start md:w-full px-3">
                  <button
                    class="middle none center mr-3 rounded-lg bg-blue-500 py-2 px-4 font-sans text-base font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                    onClick={onSubmit}
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <Link to="/login">
          <h3 className="text-xl italic font-semibold w-[90%] m-auto text-[#2a477f] ">
            You are not logged in. Please login to post a comment.
          </h3>
        </Link>
      )}

      <div className=" w-[90%] m-auto text-[#2a477f] mt-8">
        <h3 className="text-4xl font-semibold ">Discussions</h3>
        <div className="mt-6 w-[100%] md:w-[90%] md:m-0 m-auto mb-12">
          {comments.map((comment, index) => {
            return <CommentCard key={comment._id} comment={comment} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comment;
