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
      <div className={styles.header_small}>
        <NavLink to="/">
          <img
            className={styles.header_small__logo}
            src="../src/assets/logo.png"
            alt="Marielle Lopez logo"
          />
        </NavLink>
      </div>

      <div className={styles.header_large}>
        <div
          className={[
            styles.header_large__section,
            styles.header_large__left,
          ].join(" ")}
        >
          <NavBar />
        </div>

        <div
          className={[
            styles.header_large__section,
            styles.header_large__centre,
          ].join(" ")}
        >
          <NavLink to="/">
            <img
              className={styles.header_large__logo}
              src="../src/assets/logo.png"
              alt="Marielle Lopez logo"
            />
          </NavLink>
        </div>

        <div
          className={[
            styles.header_large__right,
            styles.header_large__section,
          ].join(" ")}
        >
          <div className={styles.header_large__right__external_links}>
            <Link
              className={styles.header_large__right__link}
              to="https://github.com/marielle-lopez"
              target="_blank"
            >
              <img
                className={styles.header_large__right__icon}
                src="../src/assets/github.png"
                alt="GitHub icon"
              />
            </Link>
            <Link
              className={styles.header_large__right__link}
              to="https://www.linkedin.com/in/marielle-lopez/"
              target="_blank"
            >
              <img
                className={styles.header_large__right__icon}
                src="../src/assets/linkedin.png"
                alt="LinkedIn icon"
              />
            </Link>
            <img
              className={styles.header_large__right__icon}
              src="../src/assets/email.png"
              alt="Email icon"
            />
          </div>
          <button className={styles.header_large__btn}>
            Download CV
            <img
              className={styles.header_large__btn__icon}
              src="../src/assets/download.png"
              alt="Download icon"
            />
          </button>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
