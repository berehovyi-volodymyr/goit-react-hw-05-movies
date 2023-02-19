// import styles from './searchMovies.module.css'
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movies } from '../../api';
import Searchbar from './SearchBar/SearchBar';
import SearchMovieList from './SearchMovieList/SearchMovieList';

const SearchMovies = () => {
  const [items, setItems] = useState([]);

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
        console.log(error.message);
      }
    };
    fetchMovies();
  }, [search]);

  return (
    <>
      <Searchbar onSubmit={searchFilms} />
      <SearchMovieList items={items} />
    </>
  );
};

export default SearchMovies;
