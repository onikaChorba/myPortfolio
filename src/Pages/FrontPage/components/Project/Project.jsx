import "./Project.scss";

import arrow from "@/assets/img/arrow.png";
import { data } from "@/FrontPageData";

export const Project = () => {
  return (
    <section className="project">
      {data.dataProject.map((project) => (
        <div className="projectBlock" key={project.id}>
          <div style={{ background: "black" }}>
            <img
              className="projectBlock__img"
              alt={project.name}
              src={project.imgMain}
            />
          </div>
          <div className="projectBlock__info project">
            <div className="project__titleBlock">
              <p className="project__title title2">{project.name}</p>
              <button className="project__button text">
                more info <img src={arrow} alt="arrow" className="arrow" />
              </button>
            </div>
            <div className="project__text text">{project.textShort}</div>
            <div className="project__tools">{project.textButton}</div>
          </div>
        </div>
      ))}
    </section>
  );
};
