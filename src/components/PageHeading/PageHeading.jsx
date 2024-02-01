import styles from "./PageHeading.module.scss";

const PageHeading = ({ title = "Page Heading" }) => {
  return <h1 className={styles.page_heading}>{title}</h1>;
};

export default PageHeading;
