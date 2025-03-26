import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/Login";
import Signup from "./components/login/signup";
import UserInfo from "./components/user-info/UserInfo"
import FakeCallScreen from "./components/SOS/bottom-components/FakeCallScreen";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div className="container w-[80vw] h-[80vh] bg-[#00000080] flex gap-4">
      {/* <Toaster position="top-center" richColors /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-info" element={<UserInfo />} /> {/* UserInfo */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/fake-call" element={<FakeCallScreen />} />
      </Routes>

      {/* <HomeScreen /> */}
    </div>
  );
};

export default App;

