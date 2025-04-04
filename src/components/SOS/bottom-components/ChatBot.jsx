import ChatForm from "./ChatBot-Components/ChatForm";
import ChatMassage from "./ChatBot-Components/ChatMassage";
import { useEffect, useRef, useState } from "react";
import { applicationInfo } from "./ChatBot-Components/applicationInfo";
import roboticon from "./ChatBot-Components/robot.png";
import roboticonBlue from "./ChatBot-Components/robotblue.png";

import './ChatBot-Components/ChatBot-style.css';

function ChatBot() {
    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: applicationInfo
        }
    ]);
        const [showChatBot, setShowChatBot] = useState(false);
    
        const [showBtn, setShowBtn] = useState(true);
    
        const chatBotRef = useRef();
    
        const generateBotResponse = async (history) => {
    
            const updateHistory = (text, isError = false) => {
                // Helper function to update chat history with bot's response
                setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }]);
            };
    
            // Remove the "Thinking..." placeholder
            history = history.map(({role, text}) => ({role, parts: [{text}]}));
    
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: history})
            }
    
            try {
                // Make the API call to get bot's response
                const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
                const data = await response.json();
    
                if(!response.ok) {
                    throw new Error(data.error.message || "Something went wrong!");
                }
    
                console.log(data);
    
                // clean and update chat history with bot's response
                const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
                updateHistory(apiResponseText);
            } catch (error) {
                updateHistory(error.massage, true);
            }
        };
    
        // Button Change Effect
        let changeBtn = () => {
            setShowBtn(!showBtn);
            setShowChatBot(prev => !prev)
        }
    
        let condition1 = showBtn ? "show" : "not-show";
        let condition2 = showBtn ? "not-show" : "show";
    
        useEffect(() => {
            // Auto-scroll whenever chat history updates
            chatBotRef.current.scrollTo({top: chatBotRef.current.scrollHeight, behavior: "smooth"});
        }, [chatHistory]);

    return (
        // <botton className="relative bg-[#fff] hover:bg-[#d9d9d9] w-max text-[#1570bf] rounded-full flex items-center justify-center p-3 group active:scale-90">
        //     <span className="absolute invisible group-hover:visible w-max bg-[#1570bf] text-[#d9d9d9] px-2 py-1 rounded-md text-xs top-2 group-hover:-top-10 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:-z-10 transition-all duration-150 ease-in-out">Chat Bot</span>
        //     <i class="fa-solid fa-message text-xl sm:text-2xl"></i>
        // </botton>

        <div className={`container font-[poppins] ${showChatBot ? "show-chatbot" : ""} flex justify-center items-center rounded-xl z-10`}>

            <button onClick={changeBtn} className="chatbot-toggler fixed border-none cursor-pointer bg-[#fff] hover:bg-[#d9d9d9] w-max text-[#1570bf] rounded-full flex items-center justify-center p-6 group active:scale-90">
                {/* <span className={`material-symbols-outlined absolute text-[#fff] ${condition1} transition-all duration-200 ease-out`}> <img src="./Boticon.png" className="w-full" alt="logo" /> </span> */}
                {/* <i className={`fa-solid fa-message absolute text-xl ${condition1}`}></i> */}
                <img src={roboticonBlue} alt="" className={`absolute text-xl w-8 ${condition1} `} />
                <span className={`material-symbols-outlined absolute ${condition2} transition-all duration-200 ease-out`}>close</span>
                {/* <i className={`fa-solid fa-xmark absolute text-xl text-[#fff] ${condition2} transition-all duration-200 ease-in`}></i> */}

                <span className="absolute invisible group-hover:visible w-max bg-[#1570bf] text-[#d9d9d9] px-2 py-1 rounded-md text-xs top-2 group-hover:-top-9 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:-z-10 transition-all duration-150 ease-in-out">Nova</span>
            </button>

            <div className="chat-bg absolute opacity-0 pointer-events-none -bottom-10 h-[80vh] w-[90vw] md:w-[80vw] flex items-center justify-center bg-black/60 backdrop-blur-sm bg-opacity-50 rounded-xl transition-all duration-100 ease-in z-10">
                {/* ChatBot */}
                    <div className="chatbot-popup absolute opacity-0 pointer-events-none bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 w-[90vw] md:w-[60vw] h-[80vh] md:h-[95%] overflow-hidden bg-gray-800 rounded-xl md:rounded-lg shadow-lg transition-all duration-100 ease-in z-10">
                    {/* ChatBox header  */}
                    <div className="chat-header flex px-4 md:px-6 py-3 md:py-4 items-center justify-between bg-[#1570bf] rounded-t-xl md:rounded-t-none">
                        <div className="header-info flex gap-3 items-center">

                            {/* <ChatBotIcon /> */}
                            <img src={roboticonBlue} alt="" className="text-xl p-[7px] fill-[#1570bf] bg-[#fff] rounded-full w-10" />
                            <h2 className="logo-text text-[#fff] font-bold text-lg md:text-2xl">Nova</h2>

                        </div>
                        <button onClick={changeBtn} className="material-symbols-outlined h-10 w-10 border-none outline-none text-[#fff] cursor-pointer text-2xl pt-1 rounded-full -mr-2 bg-none hover:bg-[#155cbf] transition-all duration-200 ease-in-out ">keyboard_arrow_down</button>
                    </div>

                    {/* Chat body */}
                    <div ref={chatBotRef} className="chat-body h-[60vh] md:h-[72%] overflow-y-auto py-6 px-4 md:p-6 mb-16 flex flex-col gap-5 bg-gray-800">
                        <div className="massage bot-massage flex gap-3 items-center">
                            {/* <ChatBotIcon className="fill-[#fff] bg-[#6d4fc2]" /> */}
                            {/* <img src={Boticon} alt="logo" className="w-10 h-10" /> */}
                            {/* <svg className="text-xl p-2 fill-[#fff] bg-[#1570bf] rounded-full" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" /></svg> */}
                            <img src={roboticon} alt="" className="text-xl p-2 fill-[#fff] bg-[#1570bf] rounded-full w-10" />

                            <p className="massage-text px-4 py-3 max-w-[75%] text-base md:text-base bg-gray-700 text-[#fff]">
                                Hello from Nova 👋,<br /> How can i help you today?
                            </p>
                        </div>

                        {/* Render the chat history */}
                        {chatHistory.map((chat, index) => (
                            <ChatMassage key={index} chat={chat} />
                        ))}
                    </div>

                    {/* Chat footer */}
                    <div className="chat-footer absolute bottom-0 w-full pt-4 px-6 pb-5 bg-gray-800">
                        <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ChatBot;