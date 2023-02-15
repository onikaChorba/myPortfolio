import "./Project.scss";
import imgReact1 from "@/assets/img/imgReact1.png";
import { Button } from "../../../../components/Button/Button";
export const Project = () => {
  return (
    <section className="project">
      <div className="projectBlock">
        <img src={imgReact1} alt="imgReact1" className="projectBlock__img" />
        <div className="projectBlock__info project">
          <p className="project__title title2">Tutorify</p>
          <div className="project__tools">
            <Button text="javaScript" />
            <Button text="HTML" />
          </div>
        </div>
      </div>
      <div className="projectBlock">
        <img src={imgReact1} alt="imgReact1" className="projectBlock__img" />
        <div className="projectBlock__info"></div>
      </div>
    </section>
  );
};
