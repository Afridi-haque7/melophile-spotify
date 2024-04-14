export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:5173/";
const clientId = "0d97434fe3cc422cbac6074d9fe44cc0";
const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


export const getTokenFromUrl = () => {
    return  window.location.hash.substring(1).split("&")[0].split("=")[1];
}
