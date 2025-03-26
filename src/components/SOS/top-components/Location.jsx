import { useState } from "react";

function Location() {
    const [currentAddress, setCurrentAddress] = useState("Click to get location");
    const [loading, setLoading] = useState(false);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setCurrentAddress("Geolocation is not supported by this browser.");
            return;
        }

        setLoading(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    const data = await response.json();
                    setCurrentAddress(data.display_name || "Location not found");
                } catch (error) {
                    setCurrentAddress("Failed to fetch address.");
                } finally {
                    setLoading(false);
                }
            },
            (error) => {
                setCurrentAddress("Unable to retrieve location.");
                setLoading(false);
            }
        );
    };

    return (
        <div 
            className="flex items-center gap-2 sm:gap-4 bg-[#d9d9d9] text-[#111] px-3 md:px-4 py-2 rounded-md cursor-pointer" 
            onClick={getLocation}
        >
            <p className=" text-[#111] text-sm md:text-base text-center px-3 md:px-4 py-1 md:py-2 rounded-md cursor-pointer">
                {loading ? "Fetching location..." : currentAddress}
            </p>
            <i className="fa-solid fa-location-crosshairs text-2xl sm:text-3xl active:scale-90"></i>
        </div>
    );
}

export default Location;
