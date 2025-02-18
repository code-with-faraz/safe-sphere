function BottomSection() {

    return (
        <div className="flex items-center justify-center w-full px-4 py-2 gap-28 absolute bottom-8">
            <button className="flex items-center">
                <i class="fa-solid fa-phone-volume text-3xl"></i>
            </button>

            <botton className="bg-[#fff] text-[#ff0000] rounded-full flex items-center justify-center p-3">
                {/* <span className="absolute bg-white px-2 py-1 rounded-lg text-sm hover:-top-5">Chat Bot</span> */}
                <i class="fa-solid fa-comment-medical text-3xl"></i>
            </botton>

            <botton className="flex items-center">
                <i class="fa-solid fa-gear text-3xl"></i>
            </botton>

        </div>
    );
}

export default BottomSection;