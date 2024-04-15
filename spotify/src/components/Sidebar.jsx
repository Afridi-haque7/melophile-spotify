import { Home, Search, LibraryBig, ListMusic, Headphones } from "lucide-react";
import { useStateProvider } from "../utils/StateProvider";

const Sidebar = ({ sendPlaylistId }) => {
  const [{ playlists }, dispatch] = useStateProvider();

  // console.log(playlists);

  const handleClick = (event) => {
    const playListId = event?.id;
    sendPlaylistId(playListId);
  };

  return (
    <div className="max-w-[250px] basis-1/5 bg-black p-2 md:p-5">
      <div className="text-white/60 flex flex-col gap-1 md:gap-2 ">
        <ul className="flex gap-2 text-lg md:text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded">
          <Home className="w-5 md:w-auto" />
          Home
        </ul>
        <ul className="flex gap-2 text-lg md:text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded">
          <Search /> Search
        </ul>
        <ul className="flex gap-2 text-lg md:text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded">
          <LibraryBig /> Library
        </ul>
      </div>
      <div className="mt-5 border-t pt-5 text-white/60">
        <h3 className="pl-2 font-bold text-white flex gap-1 text-lg md:text-xl">
          {" "}
          <ListMusic /> PLAYLISTS
        </h3>
        {playlists?.items?.map((playlist, index) => (
          <ul
            key={playlist.id || index}
            className="flex gap-1 text-md md:text-lg font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded"
            onClick={() => handleClick(playlist)}
          >
            {playlist.name}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
