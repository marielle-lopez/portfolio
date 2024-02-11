import styles from "./ProjectCardList.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectCardList = ({ data }) => {
  return (
    <div className={styles.project_card_list}>
      {data &&
        data.map((project) => (
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            desc={project.description}
            imgPath={project.imgPath}
            deployedLink={project.deployedLink}
            repoLink={project.githubLink}
          />
        ))}
    </div>
  );
};

export default ProjectCardList;
