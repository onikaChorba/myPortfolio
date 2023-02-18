import { Button } from "@/components/Button/Button";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import imgReact1 from "@/assets/img/imgReact1.png";
import imgReact2 from "@/assets/img/imgReact2.png";
import imgProject2 from "@/assets/img/imgProject2.png";
import imgProject3 from "@/assets/img/imgProject3.png";
import imgProject4 from "@/assets/img/imgProject4.png";
import imgProject5 from "@/assets/img/imgProject5.png";
import imgSliderT1 from "@/assets/img/SliderTutorify1.png";
import imgSliderT2 from "@/assets/img/SliderTutorify2.png";
import imgSliderT3 from "@/assets/img/SliderTutorify3.png";
import imgSliderT4 from "@/assets/img/SliderTutorify4.png";
import imgSligerC1 from "@/assets/img/SliderComun1.png";
import imgSligerC2 from "@/assets/img/SliderComun2.png";
import imgSligerC3 from "@/assets/img/SliderComun3.png";
import imgSligerC4 from "@/assets/img/SliderComun4.png";
import imgSliderD1 from "@/assets/img/SliderD1.png";
import imgSliderD2 from "@/assets/img/SliderD2.png";
import imgSliderD3 from "@/assets/img/SliderD3.png";
import imgSliderCoffee1 from "@/assets/img/SliderC1.png";
import imgSliderCoffee2 from "@/assets/img/SliderC2.png";
import imgSliderCoffee3 from "@/assets/img/SliderC3.png";
import imgSliderCoffee4 from "@/assets/img/SliderC4.png";
import imgSliderN1 from "@/assets/img/SliderN1.png";
import imgSliderN2 from "@/assets/img/SliderN2.png";
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
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSliderT1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderT2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderT3} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderT4} alt="img" />
          </SplideSlide>
        </Splide>
      ),
    },
    {
      id: "2",
      name: "tutorify",
      imgMain: imgReact1,
      textShort: 'Sites Built With ReactJS "Tutorify"',
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj, index) => (
            <Button text={project1[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Creative simple functional component and class component. Using props to pass data from from a parent component to a child components. Using useState, useEffect and useMemo. Using common data filtering techniques (filter(), map(), splise()...). Creation of simple forms for interaction with the user, adaptation to different screen sizes. Site deployed to the github-pages environment by the pages build and deployment workflow. ",
      gitLink: "https://github.com/onikaChorba/tutorify",
      browserLink: "https://onikachorba.github.io/tutorify/",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSliderT1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderT2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderT3} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderT4} alt="img" />
          </SplideSlide>
        </Splide>
      ),
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
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSligerC1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSligerC2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSligerC3} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSligerC4} alt="img" />
          </SplideSlide>
        </Splide>
      ),
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
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSliderD1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderD2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderD3} alt="img" />
          </SplideSlide>
        </Splide>
      ),
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
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSliderCoffee1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderCoffee2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderCoffee3} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderCoffee4} alt="img" />
          </SplideSlide>
        </Splide>
      ),
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
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSliderN1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderN2} alt="img" />
          </SplideSlide>
        </Splide>
      ),
    },
  ],
};
