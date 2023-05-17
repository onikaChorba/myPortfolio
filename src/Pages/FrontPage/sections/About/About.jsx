import "./About.scss";
const images = {
  html: require("@/assets/img/html.png"),
  css: require("@/assets/img/css.png"),
  js: require("@/assets/img/js.png"),
  scss: require("@/assets/img/scsslogo.png"),
  gitHub: require("@/assets/img/github.png"),
  wb: require("@/assets/img/wb.png"),
  ts: require("@/assets/img/ts.png"),
  react: require("@/assets/img/react.png"),
  figma: require("@/assets/img/figma.png"),
  vue: require("@/assets/img/vue.png"),
  api: require("@/assets/img/api.png"),
  redux: require("@/assets/img/redux.png"),
};
export const About = () => {
  const icon = [
    { src: images.vue, alt: "vue" },
    { src: images.react, alt: "react" },
    { src: images.redux, alt: "redux" },
    { src: images.api, alt: "api" },
    { src: images.ts, alt: "ts" },
    { src: images.js, alt: "js" },
    { src: images.html, alt: "html" },
    { src: images.css, alt: "css" },
    { src: images.scss, alt: "scss" },
    { src: images.gitHub, alt: "gitHub" },
    { src: images.wb, alt: "webpack" },
    { src: images.figma, alt: "figma" },
  ];
  return (
    <section className="about">
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
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=onikaChorba&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
          alt="status"
          className="statusSkill"
        />
        <div className="iconsSkills">
          {icon.map((el, index) => (
            <img src={el.src} alt={el.alt} className="iconSkills" key={index} />
          ))}
        </div>
      </div>

      <h2 className="about__title title2">
        My stats on <span>GitHub</span>
      </h2>
      <a href="https://git.io/streak-stats">
        <img
          src="http://github-readme-streak-stats.herokuapp.com?user=onikaChorba&theme=dark&hide_border=true&border_radius=4.8"
          alt="status"
          className="status"
        />
      </a>
    </section>
  );
};
