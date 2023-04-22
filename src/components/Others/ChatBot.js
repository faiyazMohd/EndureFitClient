import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import chatBotPng from "../../assets/png images/chatbot.png";
import chatBot2Png from "../../assets/png images/chatbot_2.png";
import chatBot3Png from "../../assets/png images/chatbot_3.png";
import typingGif from "../../assets/gif/typingBlackWhite.gif";
import typingGif1 from "../../assets/gif/typingGif_1.gif";
import CloseIcon from "@mui/icons-material/Close";
import UserContext from "../../context/user/userContext";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import { useState, useEffect, useRef } from "react";
import ChatBotContext from "../../context/chatbot/ChatBotContext";
import { useContext } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function ChatBot() {
  const userContext = React.useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { user, setUserInformation } = userContext;
  const chatBotContext = useContext(ChatBotContext);
  const { messages, updateMessages } = chatBotContext;
  const [userInput, setUserInput] = useState("");
  React.useEffect(() => {
    setUserInformation();
  }, []);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    console.log(userInput);
    const userMessageObj = {
      isAi: false,
      message: userInput,
    };
    const newmessage = messages.concat(userMessageObj);
    updateMessages(newmessage);
    const userPrompt = userInput;
    setLoading(true);
    setUserInput("");
    const response = await fetch(`${BASE_URL}/api/chatbot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: userPrompt,
      }),
    });
    const json = await response.json();
    setLoading(false);
    console.log(json.data);
    const parsedData = json.data.trim();
    if (json.success) {
      const aIMessageObi = {
        isAi: true,
        message: parsedData,
      };
      const newAiMessage = newmessage.concat(aIMessageObi);
      updateMessages(newAiMessage);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const list = (anchor) => (
    <Box
      sx={{
        width: { xm: "80%", sm: "80vw", md: "40vw", lg: "40vw", xl: "30vw" },
      }}
      role="presentation"
    >
      <div className="flex oval fixed w-full  bg-gradient-to-br from-blue-200 via-stone-100 to-blue-200 sm:items-center justify-start gap-14 md:gap-60 lg:gap-28 py-3 border-b-2 border-gray-200 ">
        <div className="relative flex items-center space-x-4">
          <div className="relative ml-4">
            <img
              src={chatBot2Png}
              alt=""
              className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex flex-col justify-start  items-center">
              <span className="text-gray-700 mr-3">EndureFit Bot</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={toggleDrawer(anchor, false)}
            className=" inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <CloseIcon sx={{ color: "blue" }} />
          </button>
        </div>
      </div>

      <div
        id="messages"
        className="flex mt-24 h-[70vh]  md:h-[75vh]  lg:h-[64vh] xl:h-[70vh] 2xl:h-[74vh]  flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {messages.map((element, index) => {
          if (element.isAi) {
            return (
              <div className="chat-message">
                <div className="flex items-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-600 text-white">
                        {element.message}
                        {/* {loading?(<img src={typingGif1} alt="" />):""} */}
                      </span>

                      {/* <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-600 text-white">
                      
                      </span> */}
                    </div>
                  </div>
                  <img
                    src={chatBot2Png}
                    alt="My profile"
                    className="w-6 h-6 rounded-full order-1"
                  />
                </div>
              </div>
            );
          } else {
            return (
              <div className="chat-message">
                <div className="flex items-end justify-end">
                  <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div>
                      <span className="px-4 py-2 rounded-lg inline-block rounded-br-none  bg-blue-300 text-black ">
                        {element.message}
                      </span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full order-2 mb-2">
                    <Avatar
                      src={user.picture}
                      sx={{ width: 30, height: 30, bgcolor: blue[400] }}
                    ></Avatar>
                  </div>
                </div>
              </div>
            );
          }
          // return chatStripe(element.isAi,element.message)
        })}
        {loading ? (
          <div className="chat-message">
            <div className="flex items-end">
              <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                <img
                  className=" w-12 h-6 mix-blend-darken"
                  src={typingGif1}
                  alt=""
                />
              </div>
              <img
                src={chatBot2Png}
                alt="My profile"
                className="w-6 h-6 rounded-full order-1"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="border-t-2 bg-white border-gray-200 px-4 pt-4 mb-2 sm:mb-3">
        <div className="relative flex">
          <textarea
            rows={1}
            cols={1}
            name="userInput"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-4 bg-gray-200 rounded-md py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 sm:flex">
            <button
              type="button"
              onClick={handleSend}
              disabled={userInput.length === 0 || loading}
              className="inline-flex items-center justify-center rounded-lg px-3 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
            >
              <span className="font-bold">Send</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none"
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              
            >
              <Typography sx={{ p: 1 }} >Need! any support<ContactSupportIcon sx={{ color: blue[600], mr: 1 }} /></Typography>
            </Popover>
          </div>
          {/* <Button onClick={toggleDrawer(anchor, true)} sx={{position:"fixed",top:{xm:"90vh",sm:"90vh",md:"90vh",lg:"90vh",xl:"90vh"},left:{xm:"90vw",sm:"90vw",md:"90vw",lg:"90vw",xl:"90vw"}}}  > </Button> */}

          {/* <button
            data-popover-target="popover-default"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Default popover
          </button>
          <div
            data-popover
            id="popover-default"
            role="tooltip"
            class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
          >
            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Popover title
              </h3>
            </div>
            <div class="px-3 py-2">
              <p>And here's some amazing content. It's very engaging. Right?</p>
            </div>
            <div data-popper-arrow></div>
          </div> */}

          <button
            className="middle none z-50 hover:scale-105 center fixed top-[88vh]  sm:top-[90vh]  md:top-[82vh] left-[82vw] sm:left-[90vw] md:left-[92vw]  rounded-lg  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={toggleDrawer(anchor, true)}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <img src={chatBotPng} className=" w-14 md:w-20 " alt="" />
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
