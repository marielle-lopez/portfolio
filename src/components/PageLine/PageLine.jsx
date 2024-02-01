import styles from "./PageLine.module.scss";

const PageLine = ({ title }) => {
  return (
    <div className={styles.page_line}>
      <p className={styles.page_line__heading}>{title}</p>
      <hr className={styles.page_line__line} />
    </div>
  );
};

export default PageLine;
