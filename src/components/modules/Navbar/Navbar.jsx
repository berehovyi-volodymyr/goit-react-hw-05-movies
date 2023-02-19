import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
