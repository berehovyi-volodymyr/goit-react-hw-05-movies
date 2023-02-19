import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { movieById } from '../../api';

// import styles from './singleMovie.module.css'

const SingleMovie = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

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
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <p>User score: {movie.vote_average}</p>
        <p>Overview: {movie.overview}</p>
        <p>
          Genres:{' '}
          {movie.genres && movie?.genres.map(genre => genre.name).join(', ')}
        </p>
      </div>

      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleMovie;
