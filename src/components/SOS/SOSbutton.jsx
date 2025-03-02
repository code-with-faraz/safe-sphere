import logo from "./Btn.png";
// import logo1 from ".../assets/Btn.png";

const SOSButton = () => {

    return (
      <div className="flex">

        {/* Main Button */}
          <button className="w-64 sm:w-72 h-64 sm:h-72 text-white text-2xl font-bold flex justify-center items-center shadow-lg active:scale-95 transition transform">
            <p className="absolute z-10 text-4xl sm:text-5xl">SOS</p>
            <img src={logo} alt="logo" className="w-max absolute" />
        </button>
      </div>
    );
  };
  
  export default SOSButton;
  



