import "./ProjectMain.scss";
import { useState } from "react";
import arrow from "@/assets/img/arrow.png";
import { ProjectDetails } from "../ProjectDetails/ProjectDetails";

export const ProjectMain = ({ project }) => {
  //useState show Project Details
  const [isShowDetails, setIsShowDetails] = useState(false);
  const handleClickShowDetails = () => {
    setIsShowDetails((current) => !current);
  };
  return (
    <section className="projectMain project">
      {isShowDetails ? (
        <div className="projectDetails">
          <ProjectDetails project={project} />
          <button className="projectButton" onClick={handleClickShowDetails}>
            <p className="text"> Less info </p>
            <img src={arrow} alt="arrow" className="arrow" />
          </button>
        </div>
      ) : (
        <div className="projectBlocks">
          <div className="projectBlock">
            <div style={{ background: "black" }}>
              <img
                className="projectBlock__img"
                alt={project.name}
                src={project.imgMain}
              />
            </div>
            <div className="projectBlock__info project">
              <p className="project__title title2">{project.name}</p>
              <div className="project__text text">{project.textShort}</div>
              <div className="project__tools">{project.textButton}</div>
            </div>
          </div>
          <div className="projectBlockInfo">
            <div className="projectBlockInfo__title title2">
              <span>{project.name}</span>
            </div>
            <div className="projectBlockInfo__text text">{project.text}</div>
            <button className="projectButton" onClick={handleClickShowDetails}>
              <p className="text">more info </p>
              <img src={arrow} alt="arrow" className="arrow" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
