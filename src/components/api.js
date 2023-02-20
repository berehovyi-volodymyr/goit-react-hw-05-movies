import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
// });

export const trendingFilms = async () => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week?api_key=e80646b33583990ee01efac2e0ae1d96'
  );
  return data;
};

export const movieById = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=e80646b33583990ee01efac2e0ae1d96`
  );
  return data;
};

export const movies = async search => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=e80646b33583990ee01efac2e0ae1d96`
  );
  return data;
};

export const castDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e80646b33583990ee01efac2e0ae1d96`
  );
  return data;
};

export const reviewsDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e80646b33583990ee01efac2e0ae1d96`
  );
  return data;
};
