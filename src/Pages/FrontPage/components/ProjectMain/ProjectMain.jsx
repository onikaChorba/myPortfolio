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
            <img src={arrow} alt="arrow" className="arrowLess" />
            <p className="text1 projectButton__text"> Less info </p>
          </button>
        </div>
      ) : (
        <div className="projectBlock">
          <img
            className="projectBlock__img"
            alt={project.name}
            src={project.imgMain}
          />
          <div className="projectBlock__info">
            <p className="project__title title2">{project.name}</p>
            <div
              className="project__text text1"
              style={{ paddingBottom: "1rem" }}
            >
              {project.textShort}
            </div>
            <div>{project.textButton}</div>
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
