import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import PageLine from "../../components/PageLine/PageLine";

const AboutPage = () => {
  return (
    <MainWrapper>
      <PageHeading title="I'm Marielle." />
      <PageLine title="Education" />
      <PageLine title="A little bit more" />
    </MainWrapper>
  );
};

export default AboutPage;
