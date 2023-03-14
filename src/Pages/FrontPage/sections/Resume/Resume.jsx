import "./Resume.scss";
import { Link } from "react-scroll";
import pdfFile from "@/assets/CV.pdf";
import { Animation } from "../../components/Animation/Animation";
export const Resume = () => {
  return (
    <section className="resume ">
      <div className="section">
        <h2 className="resume__title title2">Resume</h2>
        <p className="text ">
          I am currently seeking new job opportunities that allow me to
          contribute, learn and grow. If you have an opportunity that aligns
          with my skills and experience, please do not hesitate to out to me via
          my
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="resume__link"
          >
            <span> contact page </span>
          </Link>
          view or{" "}
          <span onClick={() => window.open(pdfFile)} className="resume__link">
            download
          </span>{" "}
          the resume
        </p>
      </div>
      <div className="resume__resume">
        <Animation />
      </div>
    </section>
  );
};
