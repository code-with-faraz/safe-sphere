import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

function FakeCall() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button className="flex items-center active:scale-90" onClick={openModal}>
                <i className="fa-solid fa-phone-volume text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
                        <h2 className="text-lg font-bold mb-4">Choose a call</h2>
                        <button onClick={() => navigate("/fake-call?caller=police")} className="block w-full p-2 bg-blue-500 text-white rounded-md mb-2">🚔 Police</button>
                        <button onClick={() => navigate('/fake-call?caller=family')} className="block w-full p-2 bg-green-500 text-white rounded-md mb-2">👨‍👩‍👧 Family</button>
                        <button onClick={() => navigate('/fake-call?caller=anonymous')} className="block w-full p-2 bg-gray-500 text-white rounded-md mb-2">📞 Unknown Caller</button>
                        <button onClick={closeModal} className="block w-full p-2 bg-red-500 text-white rounded-md">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FakeCall;