import logo from "./Btn.png";
// import logo1 from ".../assets/Btn.png";

const SOSButton = () => {

    return (
      <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {/* Animated Outer Rings */}
        {/* <div className="absolute w-40 h-40 rounded-full border-4 border-red-600 animate-pulse"></div>
        <div className="absolute w-36 h-36 rounded-full border-4 border-red-600 animate-ping"></div> */}
        
        {/* Main Button */}
        <button className="w-72 h-72 text-white text-2xl font-bold flex justify-center items-center shadow-lg active:scale-95 transition transform">
          <p className="absolute z-10 text-5xl">SOS</p>
          <img src={logo} alt="logo" className="w-max absolute" />
        </button>
      </div>
    );
  };
  
  export default SOSButton;
  



