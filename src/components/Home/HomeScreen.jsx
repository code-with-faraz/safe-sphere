import SOSButton from "../SOS/SOSbutton";
import TopSection from "../SOS/TopSection";
import BottomSection from "../SOS/BottomSection";

const HomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full overflow-hidden">
      <TopSection />
      <SOSButton />
      <BottomSection />
    </div>
  );
};

export default HomeScreen;
