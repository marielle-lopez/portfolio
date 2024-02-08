import styles from "./SkillCardList.module.scss";
import SkillCard from "../../components/SkillCard/SkillCard";

const SkillCardList = ({ data }) => {
  return (
    <div className={styles.skill_card_container}>
      {data.map((skill) => (
        <SkillCard img={skill.img} title={skill.title} />
      ))}
    </div>
  );
};

export default SkillCardList;
