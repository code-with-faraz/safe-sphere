import logo from "./Btn.png";
// import logo1 from ".../assets/Btn.png";

const SOSButton = () => {

    return (
      <div className="flex">
        {/* Animated Outer Rings */}
        {/* <div className="absolute w-40 h-40 rounded-full border-4 border-red-600 animate-pulse"></div>
        <div className="absolute w-36 h-36 rounded-full border-4 border-red-600 animate-ping"></div> */}
        
        {/* Main Button */}
          <button className="w-52 sm:w-72 h-52 sm:h-72 text-white text-2xl font-bold flex justify-center items-center shadow-lg active:scale-95 transition transform">
            <p className="absolute z-10 text-3xl sm:text-5xl">SOS</p>
            <img src={logo} alt="logo" className="w-max absolute" />
        </button>
      </div>
    );
  };
  
  export default SOSButton;
  



