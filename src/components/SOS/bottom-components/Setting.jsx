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
            <button className="flex items-center active:scale-90" onClick={() => setIsSettingsOpen(true)}>
                <i className="fa-solid fa-gear text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>
            </button>

            {/* Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-[#111927] p-6 rounded-lg w-[350px] shadow-lg">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-white">Settings</h2>
                            <button onClick={() => setIsSettingsOpen(false)} className="text-white text-2xl">×</button>
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
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={saveSettings}
                        >
                            Save Settings
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Settings; 
