import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
import Home from './pages/Home/Home';
// import Movies from './pages/Movies/Movies';
import SingleMovie from './modules/SingleMovie/SingleMovie';
import SearchMovies from './modules/SearchMovies/SearchMovies';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<SingleMovie />} />
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
