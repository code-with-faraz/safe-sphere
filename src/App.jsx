import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/Login";

const App = () => {
  const user = true;

  return (
    <div className="container w-[80vw] h-[80vh] bg-[#00000080] flex gap-4">
      {user ? (
        <>
          <HomeScreen />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
