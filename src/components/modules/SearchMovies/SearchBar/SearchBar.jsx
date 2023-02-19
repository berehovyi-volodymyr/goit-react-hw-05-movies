import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

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
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <GoSearch color="black" size="20px" />
        </button>

        <input
          name="search"
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Searchbar;
