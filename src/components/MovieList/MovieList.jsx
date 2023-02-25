import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './movieList.module.css';

const MovieList = ({ items }) => {
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

export default MovieList;

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
