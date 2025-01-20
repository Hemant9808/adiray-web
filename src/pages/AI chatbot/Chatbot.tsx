import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaPaperclip, FaSignOutAlt } from "react-icons/fa";
import silverlogo from "../../new_assets/footer_logo.webp";
import send from "../../new_assets/arrowup.webp";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";

import { AiOutlineClose } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import { Helmet } from "react-helmet";

interface IntentProps {
  text: string;
}

function Indent({ text }: IntentProps) {
  return (
    <div>
      {text.split("\n").map((line: string, index: number) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
interface user {
  _id: string;
  fullname: string;
  email: string;
  password: string;
  pic: string;
  __v: number;
}

interface WebSocketResponse {
  sender: "human" | "bot";
  message: string;
  integer: number;
  type: "start" | "stream" | "end";
}

interface Chat {
  message: string;
  sender: "human" | "bot";
}

export default function Chatbot() {
  const Navigate = useNavigate();
  const [popup, setpopup] = useState(true);
  const [User, setUser] = useState<user>();

  const { t } = useTranslation();
  React.useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [open, setOpen] = useState(false);
  const library = [
    {
      id: 1,
      history: "how to get...",
    },
    {
      id: 2,
      history: "how to get...",
    },
  ];
  const handleBack = () => {
    Navigate("/");
  };

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<Chat[]>([]);
  const [streaming, setStreaming] = useState<boolean>(false);
  const [streamingResponse, setStreamingResponse] = useState<string>("");
  const containerRef = useRef(null);
  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (user != null) {
      const User: user = JSON.parse(user);
      setUser(User);
      console.log(User);
    }
  }, [user]);

  useEffect(() => {
    const ws = new WebSocket("wss://bot-f.onrender.com/ws");

    ws.onopen = () => {
      setSocket(ws);
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (socket) {
      const handleClose = () => {
        setSocket(null);
      };

      const handleError = (error: Event) => {
        console.error("WebSocket error:", error);
        setSocket(null);
      };

      // Declare handleMessage inside useEffect to ensure it uses the latest state
      const handleMessage = (event: MessageEvent) => {
        const data: WebSocketResponse = JSON.parse(event.data);
        console.log(data);
        if (data.sender === "human") {
          setChat((prev) => [
            ...prev,
            { message: data.message, sender: "human" },
          ]);
        } else if (data.sender === "bot") {
          if (data.type === "start") {
            setStreaming(true);
            setStreamingResponse("");
          } else if (data.type === "stream") {
            setStreamingResponse((prev) => prev + data.message);
          } else if (data.type === "end") {
            setStreaming(false);
            setChat((prev) => [
              ...prev,
              { message: streamingResponse, sender: "bot" },
            ]);
          }
        }
      };

      socket.addEventListener("message", handleMessage);
      socket.addEventListener("close", handleClose);
      socket.addEventListener("error", handleError);

      return () => {
        socket.removeEventListener("message", handleMessage);
        socket.removeEventListener("close", handleClose);
        socket.removeEventListener("error", handleError);
      };
    }
  }, [socket, streamingResponse]);

  const sendMessage = useCallback(async () => {
    if (socket && message.trim()) {
      socket.send(message);
      setMessage("");
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
      }
    }
  }, [socket, message]);

  useEffect(() => {
    if (containerRef.current) {
      //@ts-ignore
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  const logOut = async () => {
    localStorage.clear();

    signOut(auth)
      .then(() => {
        console.log("Logout successfully");
        Navigate("/login");
      })
      .catch((error) => {
        console.log("Error during logout", error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Adiray Global | AI Chatbot</title>
        <meta
          name="description"
          content="Adiray Global is a leading company providing top-notch services and products worldwide."
        />
        <meta
          name="keywords"
          content="Adiray Global, services, products, worldwide, leading company"
        />
        <meta name="author" content="Adiray Global" />
        <meta property="og:title" content="Adiray Global - Home" />
        <meta
          property="og:description"
          content="Adiray Global is a leading company providing top-notch services and products worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adirayglobal.com" />
      </Helmet>
      <div className="w-100vw h-screen flex overflow-hidden overflow-y-hidden">
        <div className="w-[280px] h-[100vh]  hidden  md:block bg-gradient-to-br from-blue-200 to-orange-100 justify-center items-center overflow-hidden">
          <div className="w-[243px] h-screen left-0 top-[1px] absolute">
            <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
              <div
                className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex cursor-pointer"
                onClick={() => setpopup(true)}
              >
                <div className="text-blue-950 text-base font-semibold font-Mont">
                  {t("chatbot.New Chat")}
                </div>
              </div>
              <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
                <div className="text-slate-500 font-Mont text-base font-semibold ">
                  {t("chatbot.News")}
                </div>
                <div className="">
                  <div className="text-slate-600 text-lg font-Mont font-bold mb-3">
                    {t("chatbot.Library")}
                  </div>
                  <div className="flex ml-3">
                    <div className="w-1 h-auto bg-slate-400"></div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="left-[40px] gap-2 top-[85vh] flex flex-col absolute text-blue-950 text-lg font-semibold">
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    User?.pic ||
                    "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
                  }
                  alt="U"
                />
                <p className="flex flex-wrap break-words ">{User?.fullname}</p>
              </div>
              <div
                className="flex items-center ml-2  gap-2 cursor-pointer"
                onClick={logOut}
              >
                <FaSignOutAlt size={24} />
                <span>Logout</span>
              </div>
            </div>
            <Link to="/">
              <div className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">
                {t("chatbot.Home")}
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full   flex flex-col justify-center items-center ">
          {open && (
            <div
              data-aos="fade-right"
              className="w-[280px] top-0 left-0 absolute z-50  bg-gradient-to-br from-blue-200 to-orange-100 justify-center items-center "
            >
              <div className="w-[243px] h-screen left-0 top-[1px] ">
                <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
                  <div
                    className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex cursor-pointer"
                    onClick={() => setpopup(true)}
                  >
                    <div className="text-blue-950  text-base font-semibold ">
                      {t("chatbot.New Chat")}
                    </div>
                  </div>
                  <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
                    <div className="text-slate-500 text-base font-semibold ">
                      {t("chatbot.News")}
                    </div>
                    <div className="">
                      <div className="text-slate-600 text-lg font-bold mb-3">
                        {t("chatbot.Library")}
                      </div>
                      <div className="flex ml-3">
                        <div className="w-1 h-auto bg-slate-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-[40px] gap-2 top-[85vh] flex flex-col absolute text-blue-950 text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={
                        User?.pic ||
                        "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
                      }
                      alt="U"
                    />
                    <p className="flex flex-wrap break-words max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                      {User?.fullname}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 ml-2 cursor-pointer"
                    onClick={logOut}
                  >
                    <FaSignOutAlt size={24} />
                    <span>Logout</span>
                  </div>
                </div>
                <Link to="/">
                  <div className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">
                    {t("chatbot.Home")}
                  </div>
                </Link>
              </div>
            </div>
          )}

          <button
            className=" md:hidden flex items-center absolute top-0 left-0 m-4"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose
                data-aos="fade-right"
                className="absolute top-0 left-[200px] z-50"
                style={{ fontSize: "25px" }}
              />
            ) : (
              <FiMenu style={{ fontSize: "25px" }} />
            )}
          </button>

          {/* chatbot component */}
          <div
            className={`w-full font-Mont h-screen   flex flex-col ${chat.length > 0 ? "justify-between" : "justify-center"
              } items-center`}
          >
            {chat.length == 0 && (
              <div className="flex flex-col justify-center items-center ">
                <div className="text-slate-600  text-[clamp(25px,3.5vw,2.5rem)]  font-medium mb-1">
                  {t("chatbot.Welcome to ITrade")}
                </div>
                <div className="mb-9 text-[clamp(25px,3.5vw,5rem)]">
                  <span className="text-gray-900   font-bold">
                    {t("chatbot.Start Your")}{" "}
                  </span>
                  <span className="text-blue-900   font-bold ">
                    {t("chatbot.Trade Journey")}
                  </span>
                </div>
              </div>
            )}

            {/* chatbox */}
            <div
              className={` w-[90%] md:w-[80%]  sm:w-[60%] flex  flex-col justify-center items-center ${streaming ? "sm:pb-[2.1rem] pb-[1rem]" : ""
                }   ${chat.length > 0 ? "absolute bottom-[1rem]" : ""} `}
            >
              <div
                className="w-[100%] sm:px-[5rem] max-h-[42rem] scrollbar-hide overflow-y-scroll h-auto pb-[8rem]   flex flex-col justify-start rounded-xl overflow-scroll"
                ref={containerRef}
              >
                {chat.length > 0 && (
                  <div className=" bg-white  rounded-xl custom-scrollbar  ">
                    {chat.map((data, index) => {
                      const isLastIndex = index === chat.length - 1;
                      return (
                        <div className=" ">
                          <div
                            key={index}
                            className={`w-[100%] md:w-[80%]  flex justify-start `}
                          >
                            <div className={` ${data.sender == "human" ? " flex items-center justify-center ml-4 mt-2  " : "hidden"} `}>

                              <div className={` ${data.sender == "human" ? " flex items-center justify-center bg-gray-300 rounded-full w-8 h-8  " : "hidden"} `}>
                                {User?.fullname[0]}
                              </div>

                            </div>
                            <div
                              className={`max-w-[90%] rounded-lg px-2  mx-2  ${data.sender === "human"
                                  ? " text-stone-800"
                                  : "font-Mont  text-gray-700"
                                }`}
                            >
                              {data.sender === "human" ? (
                                ""

                              ) : (
                                <div className="flex gap-2 items-start  text-[0.8rem] h-[0.6rem] text-stone-600    text-md  ">
                                  <img
                                    className="w-5"
                                    src={silverlogo}
                                    alt=""
                                  />{" "}
                                  <p>Answer</p>{" "}
                                </div>
                              )}
                              &nbsp;
                              <div
                                className={`text-slate-600 font-MontBook ${data.sender === "human"
                                    ? "text-3xl font-extrabold mt-3 mb-6"
                                    : "text-xl font-extrabold  mb-9 "
                                  } `}
                              >
                                <Indent text={data.message} />
                              </div>
                            </div>
                          </div>
                          {!isLastIndex && data.sender !== "human" && (
                            <div className="w-[100%] h-[1.1px] bg-stone-300"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
                {streaming === true && (
                  <div className="w-[100%] md:w-[80%] bg-white flex justify-start">
                    <div className="text-slate-600 mx-2  font-MontBook  rounded-lg p-2  ">
                      <div>
                        <div>
                          <Indent text={streamingResponse} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* inputfield */}

              <div
                className={` absolute h-auto shadow-md w-[100%] p-1.5  bg-white  ${chat.length > 0
                    ? " bottom-[2rem] sm:w-[61%] sm:left-[6rem]"
                    : "sm:w-[45%]"
                  }     flex  justify-start rounded-[30px]`}
              >
                <div className="w-[100%] flex bg-white justify-start pl-5 rounded-[30px] border border-[2px] border-gray-400">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    rows={1}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      adjustHeight();
                    }}
                    onKeyPress={handleKeyPress}
                    className="w-[100%]  p-3 rounded-xl  focus:outline-none focus:ring-0 scrollbar-hide resize-none "
                    placeholder={t("chatbot.Ask Anything")}
                  ></textarea>
                  <div className=" flex justify-between items-center p-3 ">
                    {chat.length > 0 ? (
                      <div
                        onClick={sendMessage}
                        className="rounded-full cursor-pointer bg-gray-200 w-9 h-9 flex justify-center items-center"
                      >
                        {" "}
                        <img className=" w-6 text-white" src={send} alt="" />
                      </div>
                    ) : (
                      <button
                        className="w-[113px] h-8 px-3 py-2 bg-blue-600 rounded-xl justify-center  items-center inline-flex text-white"
                        onClick={sendMessage}
                      >
                        {t("chatbot.Start Chat")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
