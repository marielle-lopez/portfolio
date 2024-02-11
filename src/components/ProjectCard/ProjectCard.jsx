import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title = "Project Title",
  subtitle = "Project Subtitle",
  desc = "Project description",
  imgPath = "../src/assets/placeholder.png",
  deployedLink = null,
  repoLink = null,
}) => {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_card__text}>
        <div className={styles.project_card__text__header}>
          <h3 className={styles.project_card__text__header__title}>{title}</h3>
          <span className={styles.project_card__text__header__links}>
            <Link to={repoLink} target="_blank">
              <img
                className={styles.project_card__text__header__links__link}
                src="/github.png"
                alt="GitHub icon"
              />
            </Link>
            <Link to={deployedLink} target="_blank">
              <img
                className={styles.project_card__text__header__links__link}
                src="/deployed.png"
                alt="Deployed icon"
              />
            </Link>
          </span>
        </div>
        <p className={styles.project_card__text__subtitle}>{subtitle}</p>
      </div>

      <img
        className={styles.project_card__img}
        src={imgPath}
        alt={`${title}`}
      />
    </div>
  );
};

export default ProjectCard;
