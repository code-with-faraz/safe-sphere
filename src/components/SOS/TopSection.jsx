import Notification from "./top-components/Notification";
import Location from "./top-components/Location";
import Profile from "./top-components/Profile";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
function TopSection() {
    const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem("id")
    toast.success("Logged off")
    navigate('/login')

  }
    return (
        <div className="flex items-center justify-center w-full px-4 py-2 gap-8 sm:gap-12 mt-4">

            <Notification />
            <Location />
            <Profile />
            <button className="text-m border-2 p-2 rounded hover:bg-white hover:text-black" onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default TopSection;