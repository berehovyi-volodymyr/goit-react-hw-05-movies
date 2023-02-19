import { useState, useEffect } from 'react';
import { trendingFilms } from '../../api';

import MovieList from 'components/modules/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const { results } = await trendingFilms();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTrendingFilms();
  }, []);

  return <MovieList items={trendingMovies} />;
};

export default Home;
