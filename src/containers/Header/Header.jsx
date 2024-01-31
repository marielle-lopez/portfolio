import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />
      <NavLink to="/">
        <img
          className={styles.header__logo}
          src="../src/assets/logo.png"
          alt="Marielle Lopez logo"
        />
      </NavLink>
      <div className={styles.header__right}>
        <div className={styles.header__right__external_links}>
          <Link
            className={styles.header__right__link}
            to="https://github.com/marielle-lopez"
          >
            <img
              className={styles.header__right__icon}
              src="../src/assets/github.png"
              alt="GitHub icon"
            />
          </Link>
          <Link
            className={styles.header__right__link}
            to="https://www.linkedin.com/in/marielle-lopez/"
          >
            <img
              className={styles.header__right__icon}
              src="../src/assets/linkedin.png"
              alt="LinkedIn icon"
            />
          </Link>
          <img
            className={styles.header__right__icon}
            src="../src/assets/email.png"
            alt="Email icon"
          />
        </div>
        <button className={styles.header__btn}>
          Download CV
          <img
            className={styles.header__btn__icon}
            src="../src/assets/download.png"
            alt="Download icon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
