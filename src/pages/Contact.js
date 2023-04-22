import React, { useContext, useState } from "react";
import Alert from "../components/Others/Alert";
import Footer from "../components/Others/Footer";
import Navbar from "../components/Others/Navbar";
import AlertContext from "../context/alerts/AlertContext";
import LoaderContext from "../context/loader/LoaderContext"

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Contact = () => {
  const loaderContext = useContext(LoaderContext);
  const { setLoadingProgress } = loaderContext;
  const [contact, setContact] = useState({
    query: "",
    feedbacks: "",
    concern: "",
  });
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const handleOnChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };
  const handleOnChangeForSelect = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.selectedOptions[0].text,
    });
  };

  const handleSubmit = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log(contact);
    if (contact.feedbacks.length > 0 && contact.concern.length > 0) {
    const authToken = localStorage.getItem("endurefit-token") ;
    setLoadingProgress(20);
      const response = await fetch(`${BASE_URL}/api/concerns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":authToken
        },
        body: JSON.stringify({
          userQuery: contact.query,
          userFeedbacks: contact.feedbacks,
          userConcern: contact.concern,
        }),
      });
      setLoadingProgress(50);
      const json = await response.json();
      setLoadingProgress(100);
      if (json.success) {
        setContact({
          query: "",
          feedbacks: "",
          concern: "",
        });
      }
      showAlert(json.success, json.msg);
    } else {
      showAlert(false, "fill out all the details");
    }
  };
  return (
    <div className="bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 min-h-[90vh]">
      <Navbar />
      <Alert />
      <div className="Login-Container mb-8 container rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#1a2b4b] mt-4 flex justify-center items-center w-[95%] md:w-[55%] m-auto">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block pt-5 font-sans text-4xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Contact Us
          </h4>
          <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div class="relative h-10 min-w-[200px]">
                <select
                  class="peer h-full w-full rounded-[7px] border border-[#1a2b4b] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-[#1a2b4b] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b] placeholder-shown:border-t-[#1a2b4b] empty:!bg-red-500 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-[#1a2b4b] "
                  name="query"
                  value={contact.query}
                  onChange={handleOnChangeForSelect}
                >
                  <option selected="">-</option>
                  <option value="I need help with my account">
                    I need help with my account
                  </option>
                  <option value="I have a safety concern">
                    I have a safety concern
                  </option>
                  <option value="General feedback">General feedback</option>
                  <option value="Report a bug">Report a bug</option>
                  <option value="Other">Other</option>
                </select>
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-[#1a2b4b] transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-[#1a2b4b] before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-[#1a2b4b] after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-[#1a2b4b] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-[#1a2b4b]">
                  What can we help you with?
                </label>
              </div>

              <div class=" w-80 max-w-screen-lg sm:w-96">
                <div class="relative w-full min-w-[200px]">
                  <textarea
                    class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-[#1a2b4b] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b] placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="feedbacks"
                    value={contact.feedbacks}
                    onChange={handleOnChange}
                  ></textarea>
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Feedbacks
                  </label>
                </div>
              </div>
              <div class=" w-80 max-w-screen-lg sm:w-96">
                <div class="relative w-full min-w-[200px]">
                  <textarea
                    class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-[#1a2b4b] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#1a2b4b] placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="concern"
                    value={contact.concern}
                    onChange={handleOnChange}
                  ></textarea>
                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Elaborate your concern
                  </label>
                </div>
              </div>
            </div>

            <button
              className="mt-2 mb-3 block w-full select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
