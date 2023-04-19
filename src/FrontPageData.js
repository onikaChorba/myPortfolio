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
import imgSliderP1 from "@/assets/img/imgSliderP1.png";
import imgSliderP2 from "@/assets/img/imgSliderP2.png";
import imgSliderP3 from "@/assets/img/imgSliderP3.png";
import imgTestAPI1 from "@/assets/img/testAPI1.png";
import imgTestAPI2 from "@/assets/img/testAPI2.png";
import imgTestAPI3 from "@/assets/img/testAPI3.png";
import imgDasboard from "@/assets/img/dashboardTest.png";
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
const project4 = [
  { text: "Next" },
  { text: "React" },
  { text: "TypeScript" },
  { text: "javaScript" },
  { text: "Saas" },
  { text: "API" },
];
export const data = {
  dataProject: [
    {
      id: "8",
      name: "Dashboard | test task",
      imgMain: imgDasboard,
      textShort: "Sites Built With ReactJS",
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj, index) => (
            <Button text={project3[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "This project was created as a test task to demonstrate the ability to create a page layout according to a Figma template in a React environment. It utilizes React Router for page navigation, uses map and filter to sort and display data, and uses useState to create multiple pages and allow for switching between them.",
      gitLink: "https://github.com/onikaChorba/dashboardTestSite",
      browserLink: "https://onikachorba.github.io/dashboardTestSite/",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgDasboard} alt="img" />
          </SplideSlide>
        </Splide>
      ),
      list: (
        <ul className="text textLists">
          <li className="textList">
            This project was created as a test task to demonstrate the ability
            to create a page layout according to a Figma template in a React
            environment. It utilizes React Router for page navigation, uses map
            and filter to sort and display data, and uses useState to create
            multiple pages and allow for switching between them.
          </li>
        </ul>
      ),
    },
    {
      id: "7",
      name: "testAPI",
      imgMain: imgTestAPI1,
      textShort: "Next.js site for testing API",
      textButton: (
        <div className="project__tools">
          {Object.keys(project4).map((obj, index) => (
            <Button text={project4[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "This is a simple website built with Next.js that can be used for testing APIs. It includes a homepage that displays a random quote and a favorites page where users can save and view their favorite quotes...",
      gitLink: "https://github.com/onikaChorba/testAPI",
      browserLink: "https://test-api-xi-azure.vercel.app",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgTestAPI1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgTestAPI2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgTestAPI3} alt="img" />
          </SplideSlide>
        </Splide>
      ),
      list: (
        <ul className="text textLists">
          <li className="textList">
            This is a simple website built with Next.js that can be used for
            testing APIs. It includes a homepage that displays a random quote
            and a favorites page where users can save and view their favorite
            quotes.
          </li>
          <li className="textList">
            This website also includes two additional pages - a product page and
            a movies page.
          </li>
          <li className="textList">using useState, useEffect</li>
          <li className="textList">
            The product page displays a list of products that can be sorted by
            category and price. Users can browse through the products and view
            additional details by clicking on individual items.
          </li>
          <li className="textList">
            The movies page displays a list of popular movies and actors. Users
            can click on a movie or an actor to view more information about
            them, including a brief description and a list of related movies or
            actors.
          </li>
        </ul>
      ),
    },
    {
      id: "6",
      name: "myPortfolio",
      imgMain: imgReact2,
      textShort: "Sites Built With ReactJS",
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj, index) => (
            <Button text={project1[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "I have designed and developed a personal portfolio site using React.js, which has enabled me to showcase my skills and experience as a web developer. One of the key features of the site is its fast loading time, which is made possible by the use of functional components and state components.",
      gitLink: "https://github.com/onikaChorba/myPortfolio",
      browserLink: "https://onikachorba.github.io/myPortfolio/",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgSliderP1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderP2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgSliderP3} alt="img" />
          </SplideSlide>
        </Splide>
      ),
      list: (
        <ul className="text textLists">
          <li className="textList">
            creative simple functional component and class component
          </li>
          <li className="textList">
            using props to pass data from from a parent component to a child
            components
          </li>
          <li className="textList">using useState, useEffect</li>
          <li className="textList">
            creation of simple forms for interaction with the user
          </li>
          <li className="textList">adaptation to different screen sizes</li>
          <li className="textList">
            site deployed to the github-pages environment by the pages build and
            deployment workflow
          </li>
        </ul>
      ),
    },
    {
      id: "5",
      name: "tutorify",
      imgMain: imgReact1,
      textShort: "Sites Built With ReactJS ",
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj, index) => (
            <Button text={project1[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Creative simple functional component and class component. Using props to pass data from a parent component to a child components. Using useState, useEffect and useMemo. Using common data filtering techniques",
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
      list: (
        <ul className="text textLists">
          <li className="textList">
            creative simple functional component and class component
          </li>
          <li className="textList">
            using props to pass data from from a parent component to a child
            components
          </li>
          <li className="textList">using useState, useEffect and useMemo</li>
          <li className="textList">
            using common data filtering techniques (filter(), map(),
            splise()...)
          </li>
          <li className="textList">
            creation of simple forms for interaction with the user
          </li>
          <li className="textList">adaptation to different screen sizes</li>
          <li className="textList">
            site deployed to the github-pages environment by the pages build and
            deployment workflow
          </li>
        </ul>
      ),
    },
    {
      id: "4",
      name: "community",
      imgMain: imgProject2,
      textShort: "Simple animations practice project",
      textButton: (
        <div className="project__tools">
          {Object.keys(project2).map((obj, index) => (
            <Button text={project2[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Settings WebPack, create layout using HTML, SaaS, BEM. Adaptation to different screen sizes. Usage of JavaScript for navigation and creating simple animations.",
      gitLink: "https://github.com/onikaChorba/community",
      browserLink: "https://onikachorba.github.io/community/dist/",
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
      list: (
        <ul className="text textLists">
          <li className="textList">settings WebPack</li>
          <li className="textList">create layout using HTML, SaaS, BEM</li>
          <li className="textList">
            usage of JavaScript for navigation and creating simple animations
          </li>
          <li className="textList">adaptation to different screen sizes</li>
        </ul>
      ),
    },
    {
      id: "3",
      name: "drinkUp",
      imgMain: imgProject3,
      textShort: "Simple animations practice project",
      textButton: (
        <div className="project__tools">
          {Object.keys(project2).map((obj, index) => (
            <Button text={project2[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Settings WebPack, create layout using HTML, SaaS, BEM. Adaptation to different screen sizes. Usage of JavaScript for navigation and creating simple animations.",
      gitLink: "https://github.com/onikaChorba/drinkUp",
      browserLink: "https://onikachorba.github.io/drinkUp/dist/",
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
      list: (
        <ul className="text textLists">
          <li className="textList">settings WebPack</li>
          <li className="textList">create layout using HTML, SaaS, BEM</li>
          <li className="textList">
            usage of JavaScript for navigation and creating simple animations
          </li>
          <li className="textList">adaptation to different screen sizes</li>
        </ul>
      ),
    },
    {
      id: "2",
      name: "coffee",
      imgMain: imgProject4,
      textShort: "Creative simple site",
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj, index) => (
            <Button text={project3[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Creation of simple landing pages layout: using HTML and CSS, hover effects, adaptation to different screen sizes, JavaScript for navigation",
      gitLink: "https://github.com/onikaChorba/coffee",
      browserLink: "https://onikaChorba.github.io/coffee/",
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
      list: (
        <ul className="text textLists">
          <li className="textList">create layout using HTML and CSS </li>
          <li className="textList"> use of hover effects</li>
          <li className="textList">usage of JavaScript for navigation</li>
          <li className="textList">adaptation to different screen sizes</li>
        </ul>
      ),
    },
    {
      id: "1",
      name: "nature",
      imgMain: imgProject5,
      textShort: "Creative simple site",
      textButton: (
        <div className="project__tools">
          {Object.keys(project3).map((obj, index) => (
            <Button text={project3[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "Creation of simple landing pages layout: using HTML and CSS, hover effects, adaptation to different screen sizes, JavaScript for navigation",
      gitLink: "https://github.com/onikaChorba/nature",
      browserLink: "https://onikaChorba.github.io/nature/",
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
      list: (
        <ul className="text textLists">
          <li className="textList">create layout using HTML and CSS </li>
          <li className="textList"> use of hover effects</li>
          <li className="textList">usage of JavaScript for navigation</li>
          <li className="textList">adaptation to different screen sizes</li>
        </ul>
      ),
    },
  ],
};
