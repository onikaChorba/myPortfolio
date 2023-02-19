import "./Resume.scss";
import pdfFile from "@/assets/CV.pdf";
export const Resume = () => {
  return (
    <section className="resume section">
      <h2 className="resume__title title2">Resume</h2>
      <p className="text resume__text">
        Reach out to me via my
        <span>
          <a href="#Contact"> contact page </a>
        </span>
        view or
        <span onClick={() => window.open(pdfFile)}> download </span> the resume
      </p>
      <div>
        <iframe
          src="https://drive.google.com/file/d/1utKYPZF8VFFABYUFGyK5Ou9jaLsdhZfq/preview"
          width={700}
          height={500}
          allow="autoplay"
          allowFullScreen
          title="resume"
        ></iframe>
      </div>
    </section>
  );
};
