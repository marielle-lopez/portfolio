import styles from "./MainWrapper.module.scss";
import { useSpring, animated, config } from "@react-spring/web";

const MainWrapper = ({ children, widthConstraint = false }) => {
  const springs = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delayed: 1000,
    config: {
      tension: 280,
      friction: 60,
    },
  });

  const mainStyles = widthConstraint
    ? `${styles.main} ${styles.width_constraint}`
    : `${styles.main}`;

  return (
    <animated.main className={mainStyles} style={{ ...springs }}>
      {children}
    </animated.main>
  );
};

export default MainWrapper;
