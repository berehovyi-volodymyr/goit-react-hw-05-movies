import styles from './reviews.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsDetails } from '../../api';

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await reviewsDetails(movieId);
        setReview(results);
      } catch (error) {
        setError(true);
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id} className={styles.review}>
      <h3>{author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {error && alert('Not found page')}
      <div className={styles.bcg}>
        <h2 className={styles.title}>Reviews</h2>
        {!reviews.length && "We don't find any reviews"}
        {<ul>{elements}</ul>}
      </div>
    </>
  );
};

export default Reviews;
