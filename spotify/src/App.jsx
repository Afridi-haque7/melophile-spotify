import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProvider } from "./utils/StateProvider";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProvider();
  const [playlistId, setPlaylistId] = useState("");

  const handlePlaylistId = (id) => {
    setPlaylistId(id);
    // console.log("App: ", playlistId);
  };

  useEffect(() => {
    //set token
    const hash = getTokenFromUrl();
    let _token = hash;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
        const playlistIds = Object.keys(playlists);

        playlistIds.forEach((playlistId) => {
          const playlist = playlists[playlistId];
          if (playlist.url === undefined) {
            console.error("Playlist is missing URL:", playlist);
          }
        });
      });

      s.getPlaylist(playlistId ? playlistId : "2D8G2eapeO4WaL7qTRxmNG").then(
        (response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
      );

      s.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
    }
  }, [token, playlistId, dispatch]);

  return (
    <div className="m-0 p-0">
      {token ? (
        <Player spotify={s} sendPlaylistId={handlePlaylistId} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
