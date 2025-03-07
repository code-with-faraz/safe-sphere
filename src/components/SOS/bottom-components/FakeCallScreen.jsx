import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const audioFiles = {
    police: "/audio/police.mp3",
    family: "/audio/family.mp3",
    anonymous: "/audio/anonymous.mp3",
};

const callerInfo = {
    police: { name: "Police Department", avatar: "/images/police.png" },
    family: { name: "Mom", avatar: "/images/mom.png" },
    anonymous: { name: "Unknown Caller", avatar: "/images/unknown.png" },
};

const FakeCallScreen = () => {
    const [searchParams] = useSearchParams();
    const caller = searchParams.get("caller") || "anonymous";
    const navigate = useNavigate();
    const [isRinging, setIsRinging] = useState(true);
    const [callActive, setCallActive] = useState(false);

    const ringtoneRef = useRef(new Audio("/audio/ringtone.mp3"));
    const callerAudioRef = useRef(new Audio(audioFiles[caller]));

    useEffect(() => {
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]); // Vibration for realism

        const ringtone = ringtoneRef.current;
        ringtone.loop = true;
        ringtone.play();

        return () => {
            ringtone.pause();
            ringtone.currentTime = 0;
        };
    }, []);

    const handleAnswer = () => {
        setIsRinging(false);
        setCallActive(true);
        ringtoneRef.current.pause();
        ringtoneRef.current.currentTime = 0;
        
        setTimeout(() => {
            callerAudioRef.current.play();
        }, 500);
    };

    const handleEndCall = () => {
        callerAudioRef.current.pause();
        callerAudioRef.current.currentTime = 0;
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white relative">
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"></div>

            {/* Call UI */}
            <div className="relative flex flex-col items-center">
                <img src={callerInfo[caller].avatar} alt="Caller" className="w-24 h-24 rounded-full border-4 border-gray-500 shadow-lg" />
                <h1 className="text-2xl font-semibold mt-3">{callerInfo[caller].name}</h1>
                <p className="text-gray-400">{isRinging ? "Incoming Call..." : "Call in Progress"}</p>

                {/* Buttons */}
                {isRinging ? (
                    <div className="flex gap-6 mt-6">
                        <button 
                            className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                            onClick={handleAnswer}
                        >
                            📞
                        </button>
                        <button 
                            className="bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
                            onClick={handleEndCall}
                        >
                            ❌
                        </button>
                    </div>
                ) : (
                    <div className="mt-6">
                        <button 
                            className="bg-red-500 px-6 py-2 rounded-full text-lg font-semibold active:scale-90 transition-transform"
                            onClick={handleEndCall}
                        >
                            End Call
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FakeCallScreen;
