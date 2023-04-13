import { ProjectMain } from "../../components/ProjectMain/ProjectMain";
import { data } from "@/FrontPageData";
export const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title title2"> Projects </h2>
      <p className="text">
        Here you can explore some of the personal projects I have created. By
        examining these projects, you can gain a better understanding of my
        skills and approach to web development.
      </p>
      <div
        style={{
          paddingTop: "3%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.dataProject.map((project, index) => (
          <ProjectMain project={project} key={index} />
        ))}
      </div>
    </section>
  );
};
