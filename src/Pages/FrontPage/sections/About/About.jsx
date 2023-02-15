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
  return (
    <section className="about">
      <h2 className="about__title title2">About me</h2>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
        tenetur consequatur nisi ducimus sed aut, vel, explicabo iure nesciunt
        ad numquam error cumque obcaecati inventore, voluptatum deserunt
        perferendis. Rem.
      </p>
      <h2 className="about__title title2">My skills</h2>
      <div className="about__icon">
        <img src={html} alt="html" className="iconSkills" />
        <img src={css} alt="css" className="iconSkills" />
        <img src={js} alt="js" className="iconSkills" />
        <img src={scss} alt="js" className="iconSkills" />
        <img src={gitHub} alt="js" className="iconSkills" />
        <img
          src={wb}
          alt="js"
          className="iconSkills"
          style={{ width: "90px" }}
        />
        <img src={ts} alt="js" className="iconSkills" />
        <img src={react} alt="js" className="iconSkills" />
        <img src={figma} alt="js" className="iconSkills" />
      </div>
    </section>
  );
};
