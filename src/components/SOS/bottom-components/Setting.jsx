import { useState, useEffect } from "react";

function Settings() { 
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState("");
    const [emergencyContacts, setEmergencyContacts] = useState(["", "", "", "", ""]);

    const defaultMessages = [
        "I need help, please contact me!",
        "Emergency! Please check my location.",
        "I'm in danger, send help!",
        "SOS! Please track my location.",
        "Urgent! I need assistance!"
    ];

    
    useEffect(() => {
        try {
            const storedContacts = JSON.parse(localStorage.getItem("emergencyContacts")) || ["", "", "", "", ""];
            const storedMessage = localStorage.getItem("sosMessage") || "";
            setEmergencyContacts(storedContacts);
            setSelectedMessage(storedMessage);
        } catch (error) {
            console.error("Error loading settings:", error);
        }
    }, []);

    
    const saveSettings = () => {
        try {
            localStorage.setItem("emergencyContacts", JSON.stringify(emergencyContacts));
            localStorage.setItem("sosMessage", selectedMessage);
            alert("Settings saved successfully!");
            setIsSettingsOpen(false);
        } catch (error) {
            console.error("Error saving settings:", error);
        }
    };

    return (
        <>
            {/* Gear Icon Button */}
            <button className="flex items-center active:scale-90 group relative z-0" onClick={() => setIsSettingsOpen(true)}>
                <i className="fa-solid fa-gear text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>

                <span className="absolute invisible group-hover:visible w-max bg-[#d9d9d9] text-[#111926] px-2 py-1 rounded-md text-xs top-2 group-hover:-top-9 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:-z-10 transition-all duration-150 ease-in-out">Settings</span>
            </button>

            {/* Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm bg-opacity-50 z-10 rounded-xl">
                    <div className="bg-[#111927] p-6 rounded-lg w-[350px] shadow-lg relative">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-1">
                            <h2 className="text-3xl font-semibold text-white">Settings</h2>
                            {/* <button onClick={() => setIsSettingsOpen(false)} className="text-white text-2xl">×</button> */}

                        {/* Close Button */}
                            <button onClick={() => setIsSettingsOpen(false)} type="button" title="close" className="close-btn bg-[#dfdfdf] hover:bg-[#e81022] w-6 h-6 absolute flex justify-center items-center rounded-full p-2 right-4 top-4 hover:rotate-90 duration-300 ease-in-out hover:scale-110 group neon-glow">
                                <svg className="text-[#111] group-hover:text-[#fff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </button>
                        </div>

                        {/* Emergency Contacts Section */}
                        <div className="mb-4">
                            <h3 className="text-lg text-gray-300 mb-2">Emergency Contacts</h3>
                            {emergencyContacts.map((contact, index) => (
                                <input 
                                    key={index} 
                                    type="text" 
                                    placeholder={`Contact ${index + 1}`} 
                                    value={contact} 
                                    onChange={(e) => {
                                        const updatedContacts = [...emergencyContacts];
                                        updatedContacts[index] = e.target.value;
                                        setEmergencyContacts(updatedContacts);
                                    }}
                                    className="w-full p-2 mb-2 rounded bg-gray-700 text-white border-none outline-none"
                                />
                            ))}
                        </div>

                        {/* SOS Message Selection */}
                        <div className="mb-4">
                            <h3 className="text-lg text-gray-300 mb-2">SOS Message</h3>
                            <select 
                                value={selectedMessage} 
                                onChange={(e) => setSelectedMessage(e.target.value)} 
                                className="w-full p-2 rounded bg-gray-700 text-white border-none outline-none"
                            >
                                <option value="" disabled>Select a message</option>
                                {defaultMessages.map((msg, index) => (
                                    <option key={index} value={msg}>{msg}</option>
                                ))}
                            </select>
                        </div>

                        {/* Save Button */}
                        <button 
                            className="w-full py-2 bg-[#1570bf] text-white rounded hover:bg-[#155fbf] transition-all duration-150 ease-in-out"
                            onClick={saveSettings}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Settings; 
