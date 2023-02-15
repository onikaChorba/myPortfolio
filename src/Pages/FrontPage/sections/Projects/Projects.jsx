import "./Projects.scss";
import { Project } from "../../components/Project/Project";
export const Projects = () => {
  return (
    <section className="projects section">
      <h2 className="projects__title title2">Projects</h2>
      <p className="text">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <Project />
    </section>
  );
};
