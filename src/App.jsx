import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Alert from "./components/Alert.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [myMode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (myMode === "dark") {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#0b103b";
      showAlert("Dark mode has been enabled", "primary");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        HomeText="HomeUtils"
        mode={myMode}
        toogleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Outlet />
    </>
  );
}

export default App;
