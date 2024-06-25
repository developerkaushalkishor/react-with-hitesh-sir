import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextPorovider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextPorovider>
      <h1>Learn Context API</h1>
      <div>This is Login below</div>
      <Login />
      <div>This is profile below</div>
      <Profile />
    </UserContextPorovider>
  );
}

export default App;
