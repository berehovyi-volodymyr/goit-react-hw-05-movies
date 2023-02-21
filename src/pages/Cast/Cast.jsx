import styles from './cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { castDetails } from '../../api';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await castDetails(movieId);
        setActors(cast);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };
    fetchCast();
  }, [movieId]);

  const elements = actors.map(({ cast_id, name, character, profile_path }) => (
    <li key={cast_id} className={styles.actor}>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : 'https://fakeimg.pl/200x300'
        }
        alt={name}
      />
      <div className={styles.info}>
        <p className={styles.character}>{character}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </li>
  ));

  return (
    <>
      {error && alert('Not found page')}
      <div className={styles.bcg}>
        <h2 className={styles.title}>Cast</h2>
        <ul className={styles.list}>{elements}</ul>
      </div>
    </>
  );
};

export default Cast;
