import { Link, useLocation } from 'react-router-dom';
import styles from './searchMovieList.module.css';

const SearchMovieList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default SearchMovieList;