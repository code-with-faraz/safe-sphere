import logo from "../Icons/Btn.png";

const SOSButton = () => {

    return (
      <div className="flex">
        {/* Animated Outer Rings */}
        {/* <div className="absolute w-40 h-40 rounded-full border-4 border-red-600 animate-pulse"></div>
        <div className="absolute w-36 h-36 rounded-full border-4 border-red-600 animate-ping"></div> */}
        
        {/* Main Button */}
          <button className="w-64 sm:w-72 h-64 sm:h-72 text-white text-2xl font-bold flex justify-center items-center active:scale-95 transition transform">
            {/* <div className="absolute w-44 h-44 rounded-full border-4 border-red-600 animate-pulse"></div> */}
            <div className="absolute w-36 h-36 rounded-full border-4 border-red-600 animate-ping"></div>

            <p className="absolute z-10 text-4xl sm:text-5xl font-bold">SOS</p>
            <img src={logo} alt="logo" className="w-max absolute" />
        </button>
      </div>
    );
  };
  
  export default SOSButton;