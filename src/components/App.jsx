import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
const Home = lazy(() => import('./pages/Home/Home'));
const SingleMovie = lazy(() => import('./modules/SingleMovie/SingleMovie'));
const SearchMovies = lazy(() => import('./modules/SearchMovies/SearchMovies'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
// import Home from './pages/Home/Home';
// import SingleMovie from './modules/SingleMovie/SingleMovie';
// import SearchMovies from './modules/SearchMovies/SearchMovies';
// import Cast from './pages/Cast/Cast';
// import Reviews from './pages/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<SingleMovie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
