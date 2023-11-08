import { SongLists } from "../components/myInfo/songs/SongLists";

export const Home = () => {
  let title = "Rolling Stones 500 Greatest songs of All Time";

  return (
    <>
      <SongLists title={title} />
    </>
  );
};
