import styles from "./PageHeading.module.scss";
import { useSpring, animated, config } from "@react-spring/web";

const PageHeading = ({ title = "Page Heading" }) => {
  const springs = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: {
      tension: 280,
      friction: 60,
    },
  });

  return (
    <animated.h1 className={styles.page_heading} style={{ ...springs }}>
      {title}
    </animated.h1>
  );
};

export default PageHeading;
