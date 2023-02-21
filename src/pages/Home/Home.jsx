import { useState, useEffect } from 'react';
import { trendingFilms } from '../../api';

import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const { results } = await trendingFilms();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };
    fetchTrendingFilms();
  }, []);

  return (
    <>
      {error && alert('Not found page')}
      <MovieList items={trendingMovies} />
    </>
  );
};

export default Home;
