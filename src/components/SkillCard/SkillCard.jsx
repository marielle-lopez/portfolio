import styles from "./SkillCard.module.scss";

const SkillCard = ({ img = "/placeholder.png", title = "Skill name" }) => {
  return (
    <div className={styles.skill_card}>
      <img className={styles.skill_card__img} src={img} alt={`${title} icon`} />
      <p className={styles.skill_card__title}>{title}</p>
    </div>
  );
};

export default SkillCard;
