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
                <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-none bg-opacity-50 rounded-md">
                    <div className="bg-white/80 backdrop-blur-sm  py-12 px-16 rounded-lg shadow-lg text-black flex flex-col gap-1">
                        <h2 className="text-2xl font-bold mb-4">Choose a Call type</h2>
                        <button onClick={() => navigate("/fake-call?caller=police")} className="block w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out">🚔 Police</button>
                        <button onClick={() => navigate('/fake-call?caller=family')} className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out">👨‍👩‍👧 Family</button>
                        <button onClick={() => navigate('/fake-call?caller=anonymous')} className="block w-full py-2 px-4 bg-gray-400 hover:bg-gray-500 text-white rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out">📞 Unknown Caller</button>
                        <button onClick={closeModal} className="block w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-tl-xl rounded-br-xl hover:scale-105 transition-all duration-500 ease-in-out">Cancel</button>

                        {/* Close Button */}
                        <button onClick={closeModal} type="button" title="close" class="close-btn bg-[#c1c1c1] hover:bg-[#e81022] w-6 h-6 absolute flex justify-center items-center rounded-full p-2 right-4 top-4 hover:rotate-90 duration-300 ease-in-out hover:scale-105 group">
                            <svg class="text-[#111] group-hover:text-[#fff] dark:text-[#fff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FakeCall;