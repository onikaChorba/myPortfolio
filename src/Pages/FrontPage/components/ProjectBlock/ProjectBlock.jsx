import { ProjectMain } from "../ProjectMain/ProjectMain";
import { data } from "../../../../FrontPageData";
// import ProjectMain from "../CardMain/CardMain";
export const ProjectBlock = ({ project }) => {
  return (
    <section className="projectBlocks">
      {data.dataProject.map((project) => (
        <ProjectMain project={project} />
      ))}
    </section>
  );
};
