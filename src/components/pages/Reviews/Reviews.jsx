import styles from './reviews.module.css';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsDetails } from '../../api';

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await reviewsDetails(movieId);
        setReview(results);
      } catch (error) {
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
      <div className={styles.bcg}>
        <h2 className={styles.title}>Reviews</h2>
        {<ul>{elements}</ul>}
      </div>
    </>
  );
};

export default Reviews;
