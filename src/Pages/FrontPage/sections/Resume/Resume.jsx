import "./Resume.scss";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "@/assets/CV.pdf";
import { Link } from "react-scroll";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
export const Resume = () => {
  return (
    <section className="resume section">
      <h2 className="resume__title title2">Resume</h2>
      <p className="text resume__text">
        I am currently seeking new job opportunities that allow me to
        contribute, learn and grow. If you have an opportunity that aligns with
        my skills and experience, please do not hesitate to out to me via my
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
      <div className="resume__resume">
        <Document file={pdfFile}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};
