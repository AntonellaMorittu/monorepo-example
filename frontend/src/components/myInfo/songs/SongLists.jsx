import Songs from "../../../data/songs.json";

import { Link } from "react-router-dom";

export const SongLists = ({ title }) => {
  const songs = Songs.songs;
  console.log(songs);
  return (
    <div>
      <h1>{title}</h1>
      <ul className="songCard">
        {songs.map((song) => (
          <li key={song.rank}>
            <Link to={`/song/${song.title.toLowerCase().replace(/ /g, "-")}`}>
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
