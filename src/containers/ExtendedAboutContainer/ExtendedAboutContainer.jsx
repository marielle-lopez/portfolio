import styles from "./ExtendedAboutContainer.module.scss";
import CapsuleImg from "../../components/CapsuleImg/CapsuleImg";

const ExtendedAboutContainer = () => {
  return (
    <div className={styles.extended_about}>
      <div className={styles.extended_about__imgs}>
        <div className={styles.extended_about__imgs__img1}>
          <CapsuleImg
            path="../src/assets/dance.jpg"
            alt="Me performing on stage"
          />
        </div>
        <div className={styles.extended_about__imgs__img2}>
          <CapsuleImg
            path="../src/assets/singapore.jpg"
            alt="Me in Singapore's Cloud Forest in Gardens by the Bay"
          />
        </div>
      </div>

      <div className={styles.extended_about__text}>
        <p className={styles.extended_about__text__para}>
          Hey! My name is Marielle. I'm currently an _nologist at _nology and a
          competitive dance coach & dancer at The University of Melbourne (UoM).
        </p>
        <p className={styles.extended_about__text__para}>
          I have a Bachelor of Science, majoring in Pathology from UoM, and
          currently pursuing a Bachelor of Computer Science at RMIT. I'm at
          _nology to gain the expertise I need to become a full-stack developer
          and jumpstart my career in tech.
        </p>
        <p className={styles.extended_about__text__para}>
          In my free time, I love to play video games, dabble in the world of
          custom keyboards, take casual dance classes with friends, and soon,
          I'd love to dedicate some time into learning how to do pixel art.
          You'll also find me perusing the CBD looking for the best dessert
          place, but also a restaurant with the best Char Siew noodles – so far,
          nothing has beaten Ji Ji Wanton Noodle Specialist in Singapore!
        </p>
      </div>
    </div>
  );
};

export default ExtendedAboutContainer;
