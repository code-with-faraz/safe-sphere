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
                <i className="fa-solid fa-phone-volume text-2xl sm:text-3xl text-[#39ff14] hover:text-[#00ffea] neon-glow"></i>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md">
                    <div className="bg-[#0f0f0f] py-12 px-16 rounded-lg shadow-lg text-[#39ff14] flex flex-col gap-4 neon-border">
                        <h2 className="text-3xl font-bold mb-4 text-[#00ffea] neon-text">Choose a Call Type</h2>
                        <button onClick={() => navigate("/fake-call?caller=police")} className="block w-full py-3 px-5 bg-[#ff073a] hover:bg-[#ff4567] text-white rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out neon-glow">
                            🚔 Police
                        </button>
                        <button onClick={() => navigate('/fake-call?caller=family')} className="block w-full py-3 px-5 bg-[#1e90ff] hover:bg-[#63b8ff] text-white rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out neon-glow">
                            👨‍👩‍👧 Family
                        </button>
                        <button onClick={() => navigate('/fake-call?caller=anonymous')} className="block w-full py-3 px-5 bg-[#8a2be2] hover:bg-[#9b30ff] text-white rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out neon-glow">
                            📞 Unknown Caller
                        </button>
                        <button onClick={() => navigate('/fake-call?caller=friend')} className="block w-full py-3 px-5 bg-[#ffcc00] hover:bg-[#ffd633] text-black rounded-tl-xl rounded-br-xl mb-2 hover:scale-105 transition-all duration-500 ease-in-out neon-glow">
                            👫 Friend
                        </button>

                        {/* Close Button */}
                        <button onClick={closeModal} type="button" title="close" className="close-btn bg-[#ff073a] hover:bg-[#ff4567] w-8 h-8 absolute flex justify-center items-center rounded-full p-2 right-4 top-4 hover:rotate-90 duration-300 ease-in-out hover:scale-105 group neon-glow">
                            <svg className="text-[#fff] group-hover:text-[#000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FakeCall;
