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
    <div className={`project ${isShowDetails ? "full-width" : "small-width"}`}>
      {isShowDetails ? (
        <div className="projectDetails">
          <ProjectDetails project={project} />
          <button className="projectButton" onClick={handleClickShowDetails}>
            <p className="text1 projectButton__text"> Less info </p>
            <img src={arrow} alt="arrow" className="arrow" />
          </button>
        </div>
      ) : (
        <div className="projectBlock">
          <div style={{ background: "black" }}>
            <img
              className="projectBlock__img"
              alt={project.name}
              src={project.imgMain}
            />
          </div>
          <div className="projectBlock__info">
            <p className="project__title title2">{project.name}</p>
            <div
              className="project__text text1"
              style={{ paddingBottom: "1rem" }}
            >
              {project.textShort}
            </div>
            <div className="project__tools">{project.textButton}</div>
            <div className="project__text text">{project.text}</div>
            <button className="projectButton" onClick={handleClickShowDetails}>
              <p className="text1 projectButton__text"> More info </p>
              <img src={arrow} alt="arrow" className="arrow" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
