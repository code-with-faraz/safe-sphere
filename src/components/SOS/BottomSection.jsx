function BottomSection() {

    return (
        <div className="flex items-center justify-center w-max px-4 py-2 gap-14 sm:gap-28 mb-4">
            <button className="flex items-center">
                <i class="fa-solid fa-phone-volume text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>
            </button>

            <botton className="relative bg-[#fff] w-max text-[#1570bf] rounded-full flex items-center justify-center p-3 group">
                    <span className="absolute invisible group-hover:visible w-max bg-[#1570bf] text-[#d9d9d9] px-2 py-1 rounded-md text-xs top-2 group-hover:-top-10 left-1/2 -translate-x-1/2 after:content-[''] after:w-3 after:h-3 after:bg-inherit after:rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:-z-10 transition-all duration-150 ease-in-out">Chat Bot</span>
                    {/* <i class="fa-solid fa-comment-medical text-3xl"></i> */}
                    <i class="fa-solid fa-message text-xl sm:text-2xl"></i>
            </botton>

            <botton className="flex items-center">
                <i class="fa-solid fa-gear text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>
            </botton>

        </div>
    );
}

export default BottomSection;