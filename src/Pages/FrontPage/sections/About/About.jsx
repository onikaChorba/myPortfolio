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
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
        tenetur consequatur nisi ducimus sed aut, vel, explicabo iure nesciunt
        ad numquam error cumque obcaecati inventore, voluptatum deserunt
        perferendis. Rem.
      </p>
      <h2 className="about__title title2">My skills</h2>
      <div className="about__icon">
        {icon.map((el, index) => (
          <img src={el.src} alt={el.alt} className="iconSkills" key={index} />
        ))}
      </div>
    </section>
  );
};
