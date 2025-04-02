import './ChatBot-style.css';
import roboticon from "./robot.png";
import roboticonBlue from "./robot-blue.png";

function ChatMassage({ chat }) {

    return (
        !chat.hideInChat && (
            <div className={`massage ${chat.role === "model" ? "bot" : "user"}-massage ${chat.isError ? "error" : ""} flex gap-3 flex-col`}>
                {chat.role === "model" && (
                    // <svg className="text-xl p-2 fill-[#fff] bg-[#1570bf] rounded-full" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" /></svg>
                    <img src={roboticon} alt="" className="text-xl p-2 fill-[#fff] bg-[#1570bf] rounded-full w-10" />
                    
                )}
                <p className="massage-text px-4 py-3 max-w-[75%] text-[15px]">
                    {chat.text}
                </p>
            </div>
        )
    );
}

export default ChatMassage;