import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/Login";
import FakeCallScreen from "./components/SOS/bottom-components/FakeCallScreen";
import UserInfo from "./components/user-info/UserInfo";

const user = true; // Replace with actual authentication logic
const hasCompletedProfile = true; // Replace with actual profile check

const App = () => {
  return ( 
    <div className="container w-[80vw] h-[80vh] bg-[#00000080] flex gap-4">
      {user ? (
        <Routes>
          {!hasCompletedProfile ? (
            <Route path="*" element={<Navigate to="/user-info" replace />} />
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/fake-call" element={<FakeCallScreen />} />
              <Route path="/user-info" element={<UserInfo />} />
            </>
          )}
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
