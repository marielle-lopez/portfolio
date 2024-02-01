import styles from "./EducationCard.module.scss";

const EducationCard = ({
  startYear = "0000",
  endYear = "9999",
  img = { path: "../src/assets/placeholder.png", alt: "Placeholder" },
  desc = "Description",
}) => {
  return (
    <div className={styles.education_card}>
      <p className={styles.education_card__period}>
        {startYear}
        {endYear && ` – ${endYear}`}
      </p>

      <img
        className={styles.education_card__img}
        src={img.path}
        alt={img.alt}
      />

      <p className={styles.education_card__desc}>{desc}</p>
    </div>
  );
};

export default EducationCard;
