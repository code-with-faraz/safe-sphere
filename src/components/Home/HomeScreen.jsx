import SOSButton from "../SOS/SOSbutton";
import TopSection from "../SOS/TopSection";
import BottomSection from "../SOS/BottomSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate=useNavigate();
 
  useEffect(() => {
    if(!localStorage.getItem("token"))
    {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-between w-full overflow-hidden">
      <TopSection />
      <SOSButton />
      <BottomSection />
    </div>
  );
};

export default HomeScreen;
