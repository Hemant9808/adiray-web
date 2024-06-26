import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaPaperclip } from "react-icons/fa";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";

import { AiOutlineClose } from "react-icons/ai";

interface IntentProps {
  text: string;
}

function Indent({ text }: IntentProps) {

  return (
    <div>
      {text.split('\n').map((line: string, index: number) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  )
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

  return (
    <div className="w-100vw h-screen flex overflow-hidden overflow-y-hidden">
      <div className="w-[280px] h-[100vh]  hidden  md:block bg-gradient-to-br from-blue-200 to-orange-100 justify-center items-center overflow-hidden">
        <div className="w-[243px] h-screen left-0 top-[1px] absolute">
          <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
            <div
              className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex cursor-pointer"
              onClick={() => setpopup(true)}
            >
              <div className="text-blue-950 text-base font-semibold font-Mont">
                {t("charbot.New Chat")}
              </div>
            </div>
            <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
              <div className="text-slate-500 font-Mont text-base font-semibold ">
                {t("charbot.News")}
              </div>
              <div className="">
                <div className="text-slate-600 text-lg font-Mont font-bold mb-3">
                  {t("charbot.Library")}
                </div>
                <div className="flex ml-3">
                  <div className="w-1 h-auto bg-slate-400"></div>
                  <div>
                    {/* {library.map((history)=>(
                  <h4  className="text-slate-500 text-md pl-3 font-MontBook " key={history.id}>{history.history}</h4>
               
                ))} */}
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="left-[61px] top-[80vh]  absolute text-blue-950 text-lg font-semibold ">
            {t("charbot.Username")}
          </div>
          <Link to="/">
            <div className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">
              {t("charbot.Home")}
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full   flex flex-col justify-center items-center ">
        {open && (
          <div
            data-aos="slide-right"
            className="w-[280px] top-0 left-0 absolute z-50  bg-gradient-to-br from-blue-200 to-orange-100 justify-center items-center "
          >
            <div className="w-[243px] h-screen left-0 top-[1px] ">
              <div className="left-[26px] top-[93px] absolute flex-col justify-center items-start gap-6 inline-flex">
                <div
                  className="pl-5 pr-[79px] py-2.5 bg-white rounded-xl justify-start items-center gap-2.5 inline-flex cursor-pointer"
                  onClick={() => setpopup(true)}
                >
                  <div className="text-blue-950  text-base font-semibold ">
                    {t("charbot.New Chat")}
                  </div>
                </div>
                <div className="px-[21px] flex-col justify-start items-start gap-[30px] flex">
                  <div className="text-slate-500 text-base font-semibold ">
                    {t("charbot.News")}
                  </div>
                  <div className="">
                    <div className="text-slate-600 text-lg font-bold mb-3">
                      {t("charbot.Library")}
                    </div>
                    <div className="flex ml-3">
                      <div className="w-1 h-auto bg-slate-400"></div>
                      <div>
                        {/* {library.map((history)=>(
                  <h4  className="text-slate-500 text-md pl-3 " key={history.id}>{history.history}</h4>
               
                ))} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-[61px] top-[80%] absolute text-blue-950 text-lg font-semibold ">
                {t("charbot.Username")}
              </div>
              <Link to="/">
                <div className="left-[46px] top-[43px] absolute text-blue-950 text-base font-extrabold ">
                  {t("charbot.Home")}
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
              data-aos="slide-right"
              className="absolute top-0 left-[200px] z-50"
              style={{ fontSize: "25px" }}
            />
          ) : (
            <FiMenu style={{ fontSize: "25px" }} />
          )}
        </button>


           {/* chatbot component */}
        <div className={`w-full font-Mont h-screen   flex flex-col ${chat.length>0 ? "justify-between" : "justify-center" } items-center`} >
        {chat.length==0 &&  <div className="flex flex-col justify-center items-center ">
          <div className="text-slate-600  text-[clamp(25px,3.5vw,2.5rem)]  font-medium mb-1">
            {t("charbot.Welcome to ITrade")}
          </div>
          <div className="mb-9 text-[clamp(25px,3.5vw,5rem)]">
            <span className="text-gray-900   font-bold">
              {t("charbot.Start Your")}{" "}
            </span>
            <span className="text-blue-900   font-bold ">
              {t("charbot.Trade Journey")}
            </span>

          </div>
          </div>}
    
    {/* chatbox */}
    <div className= {` w-[90%] md:w-[60%] max-w-[40rem] sm:w-[60%] flex  flex-col justify-center items-center  ${chat.length>0 ? "absolute bottom-[3rem]" : "" } `} >
          <div className="w-[100%] max-h-[32rem] scrollbar-hide overflow-y-scroll h-auto    flex flex-col justify-start rounded-xl overflow-scroll" ref={containerRef}>
          {chat.length>0 && <div className=" bg-white border border-gray-400 rounded-xl custom-scrollbar  " >
          
              {chat.map((data, index) => {
                return (
                  <div className=" " >
                    <div key={index} className={`w-[100%]  flex ${data.sender === 'human' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[60%] rounded-lg p-2 border border-gray-200 mx-2 my-4 ${data.sender === 'human' ? 'bg-gradient-to-br from-blue-200 to-green-100' : 'bg-blue-400 text-gray-100'}`}>
                        <div className=" text-[12px]">
                          {data.sender === "human" ? "You" : "Bot"}&nbsp;
                        </div>
                        <div className=" text-[1rem]" >
                          <Indent text={data.message} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>}
            {streaming === true && (
              <div className="w-[100%] bg-white flex justify-start">
                <div className="bg-blue-900 text-white mx-2 my-4 rounded-lg p-5 max-w-[60%] border border-gray-200">
                  <div>
                    <div className="font-bold text-2xl">
                      Bot
                    </div>
                    <div>
                      <Indent text={streamingResponse}/>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


{/* inputfield */}
          <div className=" w-[100%] bg-white border border-gray-400 flex flex-col justify-start rounded-xl">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-[100%] p-3 rounded-xl focus:outline-none focus:ring-0 "
              placeholder={t("charbot.Ask Anything")}
            ></textarea>
            <div className=" flex justify-between items-center p-3 ">
              <div className="flex gap-2 cursor-pointer">
                <div className="w-7 h-7 relative z-[10] bg-slate-200 rounded-md justify-center items-center gap-2.5 flex cursor-pointer">
                  <FaPaperclip
                    className="absolute w-5 h-5 z-[0] cursor-pointer"
                    style={{ zIndex: "0" }}
                  />
                  <input
                    className="w-7 h-7 bg-slate-200 relative opacity-0 cursor-pointer"
                    type="file"
                  ></input>
                </div>
                <div className="text-slate-500 text-base font-semibold ">
                  {t("charbot.Attach files")}
                </div>
              </div>
              <button
                className="w-[113px] h-8 px-3 py-2 bg-blue-600 rounded-xl justify-center items-center inline-flex text-white"
                onClick={sendMessage}
              >
               {chat.length>0 ? "Send" : t("charbot.Start Chat") }  
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

