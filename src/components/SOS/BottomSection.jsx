import FakeCall from "./bottom-components/FakeCall";
import ChatBot from "./bottom-components/ChatBot";
import Setting from "./bottom-components/Setting";

function BottomSection() {

    return (
        <div className="flex items-center justify-center w-max px-4 py-2 gap-14 sm:gap-28 mb-4">

            <FakeCall />
            <ChatBot />
            <Setting />

        </div>
    );
}

export default BottomSection;