import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = getTokenFromUrl();
    if (hash !== "") {
      setToken(hash);
    }
    console.log(token);
  }, []);
  return (
    <>
      {
        token ? (<Player/>) : (<Login />)
      }
    </>
  );
}

export default App;
