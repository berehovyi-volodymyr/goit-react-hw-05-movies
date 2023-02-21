import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.list}>
          <li>
            <NavLink className={styles.link} to="/">
              <span className={styles.nav}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/movies">
              <span className={styles.nav}>Movies</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
