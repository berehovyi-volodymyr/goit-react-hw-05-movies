import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { movieById } from '../../api';

import styles from './movieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await movieById(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <>
      <button onClick={() => navigate(from)} className={styles.button}>
        Go Back
      </button>
      <div className={styles.details}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : 'http://via.placeholder.com/300'
          }
          alt={movie.title}
        />
        <div>
          <h3>{movie.title}</h3>
          <p>User score: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          <p>
            Genres:{' '}
            {movie.genres && movie?.genres.map(genre => genre.name).join(', ')}
          </p>
          <div>
            <ul className={styles.list}>
              <li>
                <Link to="cast" state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
