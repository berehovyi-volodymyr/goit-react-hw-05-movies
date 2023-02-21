import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movies } from '../../api';
import Searchbar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');

  const searchFilms = useCallback(
    search => {
      setSearchParams({ search });
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await movies(search);
        setItems(results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [search]);

  return (
    <>
      {error && alert('Not found page')}
      <Searchbar onSubmit={searchFilms} />
      <MovieList items={items} />
    </>
  );
};

export default Movies;
