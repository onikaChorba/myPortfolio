import "./ProjectDetails.scss";

import browser from "@/assets/img/browser.png";
import gitHub from "@/assets/img/github.png";

export const ProjectDetails = ({ project }) => {
  return (
    <section>
      <div className="projectDetails__title title2">
        <span>{project.name}</span>
      </div>
      <p className="text1 projectDetails__title title3">{project.textShort}</p>

      <div className="projectDetailsButton">
        <div className="projectDetails__tools">
          <p className="title3">Languages and Tools :</p>
          <div style={{ marginLeft: "-100px" }}>{project.textButton}</div>
        </div>
        <div className="projectDetails__links">
          <p className="title3"> See life</p>
          <div className="buttonLinkBlock">
            <a
              href={project.gitLink}
              className="buttonLink__text"
              target="_blank"
              rel="noreferrer"
            >
              <div className="buttonLink">
                <p>
                  Site on <span> gitHub </span>
                </p>
                <img src={gitHub} alt="gitHub" className="buttonLink__icon" />
              </div>
            </a>
            <a
              href={project.browserLink}
              target="_blank"
              className="buttonLink__text"
              rel="noreferrer"
            >
              <div className="buttonLink">
                <p>
                  Site on <span> browser</span>
                </p>
                <img src={browser} alt="browser" className="buttonLink__icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="projectDetails__list text1">{project.list}</div>
      <div className="projectDetails__sliderTools">
        <div className="projectDetails__slider">{project.imgSlider}</div>
      </div>
    </section>
  );
};
