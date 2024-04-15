import { useStateProvider } from "../utils/StateProvider";
import Header from "./Header";
import { Heart } from "lucide-react";
const Body = ({ spotify }) => {
  const [{user, discover_weekly}, dispatch] = useStateProvider();
  const tracks = discover_weekly?.tracks?.items;
  const coverImage = discover_weekly?.images[0].url;

  // console.log(discover_weekly?.images[0].url);
  function convertTime(ms) {
    let m = Math.floor(ms/60000);
    let s = ((ms % 60000)/1000).toFixed(0);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }


  return (
    <div className="h-full basis-5/6 bg-gradient-to-b from-cyan-900 to-slate-900 overflow-y-scroll">
      <Header />
      <div className="flex px-10 gap-5 items-end">
        <img
          // src="https://mosaic.scdn.co/640/ab67616d00001e02459d675aa0b6f3b211357370ab67616d00001e028a3f0a3ca7929dea23cd274cab67616d00001e02da6f73a25f4c79d0e6b4a8bdab67616d00001e02f2d671c22b70e01b78a618a8"
          alt=""
          src={coverImage}
          className="w-56 h-56"
        />
        <div className="text-white">
          <h2 className="text-5xl font-bold">{discover_weekly?.name}</h2>
          <p className="text-xl font-semibold">Made for {user?.display_name}</p>
        </div>
      </div>
      <div className="px-9 mt-10">
        {tracks?.map((track, index) => (
          <div
            key={index}
            className="text-white shadow-md flex items-center justify-between
            p-3 m-1 cursor-pointer rounded-md transition 150 ease-in hover:bg-white/10"
          >
            <div className="flex gap-2 items-center">
              <span className="font-semibold">{index + 1}. </span>

              <img
                src={track.track.album.images[0].url}
                className="w-9"
                alt=""
              />
              <div>
                <p className="font-semibold">{track.track.name}</p>
                <p className="font-semibold text-white/60">
                  {track.track.artists[0].name}
                </p>
              </div>
            </div>
            <div className="flex gap-2 text-white/60">
              <p className="font-semibold">
                {convertTime(track.track.duration_ms)}
              </p>
              <Heart />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// discover_weekly?images[0].url
// https://mosaic.scdn.co/640/ab67616d00001e02459d675aa0b6f3b211357370ab67616d00001e028a3f0a3ca7929dea23cd274cab67616d00001e02da6f73a25f4c79d0e6b4a8bdab67616d00001e02f2d671c22b70e01b78a618a8
// track.album.images[0].url
export default Body
