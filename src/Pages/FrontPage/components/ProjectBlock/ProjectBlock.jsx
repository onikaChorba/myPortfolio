import { ProjectMain } from "../ProjectMain/ProjectMain";
import { data } from "@/FrontPageData";

export const ProjectBlock = () => {
  return (
    <section className="projectBlocks">
      {data.dataProject.map((project, index) => (
        <ProjectMain project={project} key={index} />
      ))}
    </section>
  );
};
