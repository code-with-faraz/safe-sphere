import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/Login";
import FakeCallScreen from "./components/SOS/bottom-components/FakeCallScreen";

const App = () => {
  const user = true;

  return (
    <div className="container w-[80vw] h-[80vh] bg-[#00000080] flex gap-4">
      {user ? (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/fake-call" element={<FakeCallScreen />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
