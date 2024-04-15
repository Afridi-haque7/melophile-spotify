import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProvider } from "./utils/StateProvider";



const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState("");
  const [{user, _token}, dispatch] = useStateProvider();



  useEffect(() => {
    const hash = getTokenFromUrl();
    if (hash) {
      setToken(hash);
      
      dispatch({
        type: "SET_TOKEN",
        _token: token,
      })
      spotify.setAccessToken(token);
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      })
    }
  }, []);



  return (
    <div className="m-0 p-0">
      {
        token ? (<Player spotify={spotify}/>) : (<Login />)
      }
    </div>
  );
}

export default App;
