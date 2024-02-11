import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import PageHeading from "../../components/PageHeading/PageHeading";
import ProjectCardList from "../../containers/ProjectCardList/ProjectCardList";
import data from "../../data/projects.json";

const ProjectsPage = () => {
  return (
    <MainWrapper>
      <PageHeading title="Projects" />
      <ProjectCardList data={data} />
    </MainWrapper>
  );
};

export default ProjectsPage;
