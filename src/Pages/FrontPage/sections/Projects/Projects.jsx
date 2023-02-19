import "./Projects.scss";
import { ProjectBlock } from "../../components/ProjectBlock/ProjectBlock";
export const Projects = () => {
  return (
    <section className="projects section">
      <h2 className="projects__title title2">Projects</h2>
      <p className="text">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <div className="projects">
        <ProjectBlock />
      </div>
    </section>
  );
};
