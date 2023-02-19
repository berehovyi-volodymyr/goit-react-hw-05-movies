import { Link } from 'react-router-dom';

import styles from './movieList.module.css';

const MovieList = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link className={styles.movie} to={`/movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  ));
  return (
    <>
      <h2>Trending today</h2>
      <ul>{elements}</ul>
    </>
  );
};

export default MovieList;
