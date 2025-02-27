import Notification from "./top-components/Notification";
import Location from "./top-components/Location";
import Profile from "./top-components/Profile";

function TopSection() {

    return (
        <div className="flex items-center justify-center w-full px-4 py-2 gap-8 sm:gap-12 mt-4">

            <Notification />
            <Location />
            <Profile />

        </div>
    );
}

export default TopSection;