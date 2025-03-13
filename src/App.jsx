import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/Login";
import FakeCallScreen from "./components/SOS/bottom-components/FakeCallScreen";
import { Toaster, toast } from 'sonner';

const App = () => {
  return (
    <div className="container w-[80vw] h-[80vh] bg-[#00000080] flex gap-4">
         <Toaster position="top-center" richColors/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/fake-call" element={<FakeCallScreen />} />
        </Routes>
    </div>
  );
};

export default App;
