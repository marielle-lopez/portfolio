import styles from "./Star.module.scss";
import { useSpring, animated } from "@react-spring/web";

const Star = ({ size = "large" }) => {
  const springs = useSpring({
    from: { scale: 0, opacity: 0 },
    to: { scale: 1, opacity: 1 },
  });

  const imgStyles =
    size == "large" ? styles.star_img__large : styles.star_img__small;

  return (
    <animated.img
      className={imgStyles}
      style={{ ...springs }}
      src="../src/assets/star.png"
      alt="Star icon"
    />
  );
};

export default Star;
