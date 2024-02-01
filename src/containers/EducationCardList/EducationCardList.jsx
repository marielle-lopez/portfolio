import styles from "./EducationCardList.module.scss";
import data from "../../data/education.json";
import EducationCard from "../../components/EducationCard/EducationCard";

const EducationCardList = () => {
  return (
    <div className={styles.education_card_container}>
      {data.map((item, i) => {
        return (
          <>
            <EducationCard
              key={item.id}
              startYear={item.startYear}
              endYear={item.endYear}
              img={item.img}
              desc={item.description}
            />
            {i !== data.length - 1 && (
              <img
                key={"star" + item.id}
                className={styles.education_card_container__star_separator}
                src="../src/assets/star.png"
                alt="Star"
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default EducationCardList;
