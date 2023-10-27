import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router-dom";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
      <Route to="/movies" element={<Movies />} />
      <Route to="/movies/:movieId" element={<MovieDetails />}>
        <Route to="cast" element={<Cast />} />
        <Route to="reviews" element={<Reviews />} />
      </Route>
      <Route to="*" element={<NotFound />} />
    </Routes>
  );
};
