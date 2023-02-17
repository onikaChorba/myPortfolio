import { Button } from "@/components/Button/Button";
import imgReact1 from "@/assets/img/imgReact1.png";
import imgReact2 from "@/assets/img/imgReact2.png";
import imgProject2 from "@/assets/img/imgProject2.png";
import imgProject3 from "@/assets/img/imgProject3.png";
import imgProject4 from "@/assets/img/imgProject4.png";
import imgProject5 from "@/assets/img/imgProject5.png";
const project1 = [
  { text: "React" },
  { text: "TypeScript" },
  { text: "javaScript" },
  { text: "Saas" },
];
const project2 = [
  { text: "HTML" },
  { text: "Saas" },
  { text: "javaScript" },
  { text: "webpack" },
];
const project3 = [{ text: "HTML" }, { text: "CSS" }, { text: "javaScript" }];
export const data = {
  dataProject: [
    {
      id: "1",
      name: "myPortfolio",
      imgMain: imgReact2,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj, index) => (
            <Button text={project1[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ad! Atque ut, asperiores consequuntur fuga laboriosam aut accusamus debitis quibusdam vel rem. Quidem ea possimus dicta perspiciatis dolores officiis.",
      gitLink: "https://github.com/onikaChorba/myPortfolio",
      browserLink: "google.com",
    },
    {
      id: "2",
      name: "tutorify",
      imgMain: imgReact1,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj, index) => (
            <Button text={project1[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ad! Atque ut, asperiore",
      gitLink: "https://github.com/onikaChorba/tutorify",
      browserLink: "https://onikachorba.github.io/tutorify/",
    },
    {
      id: "3",
      name: "community",
      imgMain: imgProject2,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project2).map((obj, index) => (
            <Button text={project2[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ad! Atque ut, asperiore",
    },
    {
      id: "4",
      name: "drinkUp",
      imgMain: imgProject3,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project2).map((obj, index) => (
            <Button text={project2[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ad! Atque ut, asperiore",
    },
    {
      id: "5",
      name: "coffee",
      imgMain: imgProject4,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj, index) => (
            <Button text={project3[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ad! Atque ut, asperiore",
    },
    {
      id: "6",
      name: "nature",
      imgMain: imgProject5,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj, index) => (
            <Button text={project3[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, in ad! Atque ut, asperiore",
    },
  ],
};
