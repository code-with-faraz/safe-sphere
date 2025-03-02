function ChatBot() {

    return (
        <botton className="relative bg-[#fff] hover:bg-[#d9d9d9] w-max text-[#1570bf] rounded-full flex items-center justify-center p-3 group active:scale-90">
            <span className="absolute invisible group-hover:visible w-max bg-[#1570bf] text-[#d9d9d9] px-2 py-1 rounded-md text-xs top-2 group-hover:-top-10 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:-z-10 transition-all duration-150 ease-in-out">Chat Bot</span>
            <i class="fa-solid fa-message text-xl sm:text-2xl"></i>
        </botton>
    );
}

export default ChatBot;