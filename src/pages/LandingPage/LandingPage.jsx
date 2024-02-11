import styles from "./LandingPage.module.scss";
import MainWrapper from "../../containers/MainWrapper/MainWrapper";

const LandingPage = () => {
  return (
    <MainWrapper>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src="/self-portrait.png"
          alt="Marielle Lopez"
        />
        <div className={styles.intro}>
          <p className={styles.intro__greeting}>Hi, I'm</p>
          <h1 className={styles.intro__heading}>
            <span className={styles.intro__heading__opening_tag}>&lt;</span>
            Marielle Lopez
            <span className={styles.intro__heading__closing_tag}>/&gt;</span>
            <span className={styles.intro__heading__cursor}></span>
          </h1>
        </div>
      </div>
      <p className={styles.role}>Junior Full-stack Developer // Dance Coach</p>
    </MainWrapper>
  );
};

export default LandingPage;
