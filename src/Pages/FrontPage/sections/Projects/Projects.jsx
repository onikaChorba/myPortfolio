import { ProjectBlock } from "../../components/ProjectBlock/ProjectBlock";
export const Projects = () => {
  return (
    <section className=" section">
      <h2 className="projects__title title2">Projects</h2>
      <p className="text">
        Here you can explore some of the personal projects I have created. By
        examining these projects, you can gain a better understanding of my
        skills and approach to web development.
      </p>
      <div className="projects" style={{ paddingTop: "3%" }}>
        <ProjectBlock />
      </div>
    </section>
  );
};
