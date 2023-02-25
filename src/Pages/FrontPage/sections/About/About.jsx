import "./About.scss";
import html from "@/assets/img/html.png";
import css from "@/assets/img/css.png";
import js from "@/assets/img/js.png";
import scss from "@/assets/img/scsslogo.png";
import gitHub from "@/assets/img/github.png";
import wb from "@/assets/img/wb.png";
import ts from "@/assets/img/ts.png";
import react from "@/assets/img/react.png";
import figma from "@/assets/img/figma.png";
export const About = () => {
  const icon = [
    { src: html, alt: "html" },
    { src: css, alt: "css" },
    { src: js, alt: "js" },
    { src: scss, alt: "scss" },
    { src: gitHub, alt: "gitHub" },
    { src: wb, alt: "webpack" },
    { src: ts, alt: "ts" },
    { src: react, alt: "react" },
    { src: figma, alt: "figma" },
  ];
  return (
    <section className="about section">
      <h2 className="about__title title2">About me</h2>
      <p className="text about__text">
        As a self-taught frontend developer, I have gained extensive experience
        in building web applications using various front-end technologies.
        Currently, my focus is on the React stack, which I have been studying in
        depth to master its features and capabilities.
      </p>
      <p className="text about__text">
        I am passionate about my work and am constantly seeking opportunities to
        expand my knowledge and skills to create better, more dynamic web
        applications.
      </p>
      <h2 className="about__title title2">My skills</h2>
      <div className="about__icon">
        {icon.map((el, index) => (
          <img src={el.src} alt={el.alt} className="iconSkills" key={index} />
        ))}
      </div>
      <h2 className="about__title title2">
        My stats on <span>GitHub</span>
      </h2>
      <a href="https://git.io/streak-stats">
        {" "}
        <img
          src="http://github-readme-streak-stats.herokuapp.com?user=onikaChorba&theme=dark&hide_border=true&border_radius=4.8"
          alt="status"
        />
      </a>
    </section>
  );
};
