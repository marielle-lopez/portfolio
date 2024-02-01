import styles from "./CapsuleImg.module.scss";

const CapsuleImg = ({ path, alt }) => {
  return <img className={styles.capsule_img} src={path} alt={alt} />;
};

export default CapsuleImg;
