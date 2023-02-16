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
          {Object.keys(project1).map((obj) => (
            <Button text={project1[obj].text}></Button>
          ))}
        </div>
      ),
    },
    {
      id: "2",
      name: "Tutorify",
      imgMain: imgReact1,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj) => (
            <Button text={project1[obj].text}></Button>
          ))}
        </div>
      ),
    },
    {
      id: "3",
      name: "Community",
      imgMain: imgProject2,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project2).map((obj) => (
            <Button text={project3[obj].text}></Button>
          ))}
        </div>
      ),
    },
    {
      id: "4",
      name: "drinkUp",
      imgMain: imgProject3,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project2).map((obj) => (
            <Button text={project3[obj].text}></Button>
          ))}
        </div>
      ),
    },
    {
      id: "5",
      name: "coffee",
      imgMain: imgProject4,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj) => (
            <Button text={project3[obj].text}></Button>
          ))}
        </div>
      ),
    },
    {
      id: "6",
      name: "nature",
      imgMain: imgProject5,
      textShort: 'Sites Built With ReactJS "Tytorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj) => (
            <Button text={project3[obj].text}></Button>
          ))}
        </div>
      ),
    },
  ],
};
