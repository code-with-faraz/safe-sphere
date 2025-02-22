function TopSection() {

    let currentAddress = "226026, Kusri Road, Lucknow, India";

    return (
        <div className="flex items-center justify-center w-full px-4 py-2 gap-8 sm:gap-12 mt-4">
            <botton className="flex items-center active:scale-95">
                <i className="fa-solid fa-bell text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>
            </botton>

            <div className="flex items-center gap-2 sm:gap-4 bg-[#d9d9d9] text-[#111] px-3 sm:px-4 py-2 rounded-md">
                <p className="text-xs md:text-base">{currentAddress}</p>
                <i className="fa-solid fa-location-crosshairs text-2xl sm:text-3xl active:scale-95"></i>
            </div>

            <botton className="flex items-center active:scale-95">
                <i className="fa-solid fa-user text-2xl sm:text-3xl text-[#fff] hover:text-[#d9d9d9]"></i>
            </botton>
        </div>
    );
}

export default TopSection;