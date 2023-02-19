import "./ProjectDetails.scss";

import browser from "@/assets/img/browser.png";
import gitHub from "@/assets/img/github.png";

export const ProjectDetails = ({ project }) => {
  return (
    <section className="projectDetails">
      <div className="projectDetails__title title2">
        <span>{project.name}</span>
      </div>
      <p className="title3">Project Overview</p>
      <div className="projectDetails__list text1">{project.list}</div>
      <div className="projectDetails__sliderTools">
        <div className="projectDetailsButton">
          <div className="projectDetails__tools">
            <p className="title3">Languages and Tools :</p>
            {project.textButton}
          </div>
          <div className="projectDetails__links">
            <p className="title3"> See life</p>
            <div className="buttonLinkBlock">
              <button className="buttonLink">
                <a
                  href={project.gitLink}
                  className="buttonLink__text"
                  target="_blank"
                  rel="noreferrer"
                >
                  Site on <span>gitHub</span>
                </a>
                <img src={gitHub} alt="gitHub" className="buttonLink__icon" />
              </button>
              <button className="buttonLink">
                <a
                  href={project.browserLink}
                  target="_blank"
                  className="buttonLink__text"
                  rel="noreferrer"
                >
                  Site on <span> browser</span>
                </a>
                <img src={browser} alt="browser" className="buttonLink__icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="projectDetails__slider">{project.imgSlider}</div>
      </div>
    </section>
  );
};
