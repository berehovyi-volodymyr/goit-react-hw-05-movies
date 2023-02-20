import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

import styles from './searchBar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!search.trim()) {
      return alert('Please input your query');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <>
      <div className={styles.Searchbar}>
        <form onSubmit={handleSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <GoSearch color="black" size="20px" />
          </button>

          <input
            className={styles.SearchFormInput}
            name="search"
            value={search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default Searchbar;
