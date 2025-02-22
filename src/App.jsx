import HomeScreen from "./components/Home/HomeScreen";
import Login from "./components/login/Login";

const App = () => {
  const user = true;

  return (
    <div className="container">
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
