import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyInfo } from "../pages/MyInfo";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SongInfo } from "../pages/SongInfo";
import { Movies } from "../pages/Movies";
import { MovieInfo } from "../pages/MovieInfo";

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/my-info" element={<MyInfo />} />
    <Route path="*" element={<NotFoundPage />} />
    {/* Definition of a dynamic route here */}
    <Route path="/song/:songTitle" element={<SongInfo />} />
    {/* Movie Routes */}
    <Route path="/movie/:id" element={<MovieInfo />} />
    <Route path="/movies" element={<Movies />} />
  </>
);
