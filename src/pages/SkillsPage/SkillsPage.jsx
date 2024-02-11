import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import SkillCardList from "../../containers/SkillCardList/SkillCardList";
import data from "../../data/skills.json";

const SkillsPage = () => {
  return (
    <MainWrapper widthConstraint={true}>
      <PageHeading title="Skills" />
      {data && <SkillCardList data={data} />}
    </MainWrapper>
  );
};

export default SkillsPage;
