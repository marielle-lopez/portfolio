import styles from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { useSpring, animated, config } from "@react-spring/web";

const Header = () => {
  const springs = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 50,
    config: {
      tension: 280,
      friction: 60,
    },
  });

  return (
    <animated.header className={styles.header} style={{ ...springs }}>
      <div className={[styles.header__section, styles.header__left].join(" ")}>
        <NavBar />
      </div>

      <div
        className={[styles.header__section, styles.header__centre].join(" ")}
      >
        <NavLink to="/">
          <img
            className={styles.header__logo}
            src="../src/assets/logo.png"
            alt="Marielle Lopez logo"
          />
        </NavLink>
      </div>

      <div className={[styles.header__right, styles.header__section].join(" ")}>
        <div className={styles.header__right__external_links}>
          <Link
            className={styles.header__right__link}
            to="https://github.com/marielle-lopez"
            target="_blank"
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
            target="_blank"
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
    </animated.header>
  );
};

export default Header;
