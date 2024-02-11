import styles from "./Footer.module.scss";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

const Footer = () => {
  const springs = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <animated.div className={styles.footer} style={{ ...springs }}>
      <div className={styles.footer__links}>
        <Link
          className={styles.footer__links__link}
          to="https://github.com/marielle-lopez"
          target="_blank"
        >
          <img
            className={styles.footer__links__link__icon}
            src="/github.png"
            alt="GitHub icon"
          />
        </Link>
        <Link
          className={styles.footer__links__link}
          to="https://www.linkedin.com/in/marielle-lopez/"
          target="_blank"
        >
          <img
            className={styles.footer__links__link__icon}
            src="/linkedin.png"
            alt="LinkedIn icon"
          />
        </Link>
        <Link className={styles.footer__links__link} to="/" target="_blank">
          <img
            className={styles.footer__links__link__icon}
            src="/email.png"
            alt="Email icon"
          />
        </Link>
      </div>
      <p className={styles.footer__copyright}>© 2024 Marielle Louisse Lopez</p>
    </animated.div>
  );
};

export default Footer;
