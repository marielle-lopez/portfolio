import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkStyles = ({ isActive }) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__link__active}`
      : `${styles.nav__link}`;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>

      <NavLink className={linkStyles} to="/about">
        About
      </NavLink>

      <NavLink className={linkStyles} to="/skills">
        Skills
      </NavLink>

      <NavLink className={linkStyles} to="/projects">
        Projects
      </NavLink>
    </nav>
  );
};

export default NavBar;
