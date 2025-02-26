function Location() {

    let currentAddress = "226026, Kusri Road, Lucknow, India";

    return (
        <div className="flex items-center gap-2 sm:gap-4 bg-[#d9d9d9] text-[#111] px-3 sm:px-4 py-2 rounded-md">
            <p className="text-xs md:text-base">{currentAddress}</p>
            <i className="fa-solid fa-location-crosshairs text-2xl sm:text-3xl active:scale-90"></i>
        </div>
    );
}

export default Location;