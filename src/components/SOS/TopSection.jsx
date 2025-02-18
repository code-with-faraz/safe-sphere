function TopSection() {

    let currentAddress = "272182, Kusri Road, Lucknow, India";

    return (
        <div className="flex items-center justify-center w-full px-4 py-2 gap-12 mt-4">
            <botton className="flex items-center">
                <i className="fa-solid fa-bell text-3xl"></i>
            </botton>

            <div className="flex items-center gap-4 bg-[#e6dbbe] text-[#183154] px-4 py-2 rounded-md">
                <p>{currentAddress}</p>
                <i className="fa-solid fa-location-crosshairs text-3xl"></i>
            </div>

            <botton className="flex items-center">
                <i className="fa-solid fa-user text-3xl"></i>
            </botton>
        </div>
    );
}

export default TopSection;