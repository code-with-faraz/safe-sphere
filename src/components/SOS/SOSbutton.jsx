const SOSButton = () => {
    return (
      <div className="  absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        {/* Animated Outer Rings */}
        <div className="absolute w-40 h-40 rounded-full border-4 border-red-600 animate-pulse"></div>
        <div className="absolute w-36 h-36 rounded-full border-4 border-red-600 animate-ping"></div>
        
        {/* Main Button */}
        <button className="w-28 h-28 bg-red-600 text-white text-2xl font-bold rounded-full shadow-lg border-4 border-white hover:bg-red-700 active:scale-95 transition transform">
          SOS
        </button>
      </div>
    );
  };
  
  export default SOSButton;
  



