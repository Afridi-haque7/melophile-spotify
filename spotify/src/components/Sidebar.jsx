import { Home, Search, LibraryBig } from "lucide-react";
import { useStateProvider } from "../utils/StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateProvider();

  console.log("Sidebar Playlist: ", playlists.items);

  return (
    <div className="max-w-[250px] basis-1/5 bg-black p-5">
      <div className="text-white/60 flex flex-col gap-2 ">
        <ul className="flex gap-2 text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded">
          <Home />
          Home
        </ul>
        <ul className="flex gap-2 text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded">
          <Search /> Search
        </ul>
        <ul className="flex gap-2 text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded">
          <LibraryBig /> Library
        </ul>
      </div>
      <div className="mt-5 border-t text-white/60">
        <h3>PLAYLISTS</h3>
        {playlists?.items?.map((playlist, index) => (
          <ul
            key={playlist.id || index}
            className="flex gap-2 text-xl font-semibold cursor-pointer transition ease-in-out duration-150 hover:text-white p-2 rounded"
          >
            {playlist.name}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
