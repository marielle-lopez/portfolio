import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageLine from "../../components/PageLine/PageLine";
import EducationCardList from "../../containers/EducationCardList/EducationCardList";

const AboutPage = () => {
  return (
    <MainWrapper>
      <PageHeading title="I'm Marielle." />
      <PageLine title="Education" />
      <EducationCardList />
      <PageLine title="A little bit more" />
    </MainWrapper>
  );
};

export default AboutPage;
