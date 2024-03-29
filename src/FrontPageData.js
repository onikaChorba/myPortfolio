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
import imgIQ1 from "@/assets/img/iq1.png";
import imgIQ2 from "@/assets/img/iq2.png";
import imgIQ3 from "@/assets/img/iq3.png";
import imgIQ4 from "@/assets/img/iq4.png";
import imgNoteIOS from "@/assets/img/noteIOSimg1.png";
import deliveryimg1 from "@/assets/img/deliveryimg1.png";
import deliveryimg2 from "@/assets/img/deliveryimg2.png";
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
const project5 = [
  { text: "Vue" },
  { text: "TypeScript" },
  { text: "javaScript" },
  { text: "CSS" },
];
const project6 = [
  { text: "React" },
  { text: "Redux" },
  { text: "javaScript" },
  { text: "Saas" },
];
export const data = {
  dataProject: [
    {
      id: "11",
      name: "Delivery",
      imgMain: deliveryimg1,
      textShort: "Sites Built With ReactJS",
      textButton: (
        <div className="project__tools">
          {Object.keys(project6).map((obj, index) => (
            <Button text={project6[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "This shopping website is designed to provide a seamless and enjoyable shopping experience. It allows you to explore different stores, browse their products, add items to your cart, modify quantities, and calculate the total cost of your purchases. The website leverages React for building interactive user interfaces, Redux for state management, and SCSS for flexible styling.",
      gitLink: "https://github.com/onikaChorba/delivery",
      browserLink: "https://onikachorba.github.io/delivery/",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={deliveryimg1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={deliveryimg2} alt="img" />
          </SplideSlide>
        </Splide>
      ),
      list: (
        <ul className="text textLists">
          <li className="textList">
            This shopping website is designed to provide a seamless and
            enjoyable shopping experience. It allows you to explore different
            stores, browse their products, add items to your cart, modify
            quantities, and calculate the total cost of your purchases. The
            website leverages React for building interactive user interfaces,
            Redux for state management, and SCSS for flexible styling.
          </li>
          <li className="textList">
            <b className="text1">Store Selection</b> <br />
            On the homepage, you will find a selection of various stores. By
            clicking on a store, you can access its collection of products.
            <br />
          </li>
          <li className="textList">
            <b className="text1">Product Display</b> <br />
            Once you select a store, the website dynamically retrieves and
            displays the available products. Each product card showcases
            essential details such as the name, price, and image of the product.
          </li>
          <li className="textList">
            <b className="text1"> Add to Cart</b>
            <br />
            To add a product to your cart, simply click the "Add to Cart" button
            on the product card. The selected item will be added to your
            shopping cart.
          </li>
          <li className="textList">
            <b className="text1"> Quantity Modification</b>
            <br />
            In the shopping cart, you have the flexibility to modify the
            quantity of each product. Using the "+" and "-" buttons, you can
            increase or decrease the quantity of an item. The total cost of the
            product is automatically updated based on these changes.
          </li>
          <li className="textList">
            <b className="text1"> Total Cost Calculation</b>
            <br />
            The website calculates the total cost of all the products in your
            cart. As you modify the quantities, the total cost is dynamically
            recalculated, providing you with an up-to-date view of your
            purchases.
          </li>
          <li className="textList">
            <b className="text1"> Redux Integration</b>
            <br />
            To manage the state of the application, Redux is employed. Redux
            actions are used to fetch product data from an API and store it in
            the Redux store. The cart items and their quantities are also stored
            in Redux, enabling seamless management and updates.
          </li>
          <li className="textList">
            <b className="text1"> SCSS Styling</b>
            <br />
            The website's visual appearance is enhanced using SCSS. SCSS
            provides a powerful and flexible styling approach, allowing for easy
            customization and maintenance of the website's design.
          </li>
        </ul>
      ),
    },
    {
      id: "10",
      name: "noteMacIOS | test task",
      imgMain: imgNoteIOS,
      textShort: "Sites Built With ReactJS",
      textButton: (
        <div className="project__tools">
          {Object.keys(project1).map((obj, index) => (
            <Button text={project1[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "The Note Taking App is a simple web application that allows you to create, manage, and organize your notes. It provides a user-friendly interface where you can create new notes, edit existing notes, and categorize them according to your preferences.",
      gitLink: "https://github.com/onikaChorba/noteMacIOS",
      browserLink: "https://onikachorba.github.io/noteMacIOS/",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgNoteIOS} alt="img" />
          </SplideSlide>
        </Splide>
      ),
      list: (
        <ul className="text textLists">
          <li className="textList">
            The Note Taking App is a simple web application that allows you to
            create, manage, and organize your notes. It provides a user-friendly
            interface where you can create new notes, edit existing notes, and
            categorize them according to your preferences.
          </li>
          <li className="textList">
            <b className="text1">Features</b> <br />
            Create new notes with a title and content. Edit and update existing
            notes. Delete notes that are no longer needed. Categorize notes into
            different categories. Search for notes by title. Automatically save
            notes locally to persist data.
            <br />
          </li>
          <li className="textList">
            <b className="text1">Technologies Used</b> <br />
            React: A JavaScript library for building user interfaces. React
            Router: A library for routing in React applications. React Markdown:
            A component for rendering Markdown content. UUID: A package for
            generating unique IDs. HTML5: The markup language for building the
            web application structure. SCSS: The styling language for creating
            beautiful user interfaces.
          </li>
          <li className="textList">
            <b className="text1"> Usage</b>
            <br />
            To create a new note, click on the "+" button in the sidebar. Enter
            a title and content for the note, then press Enter or click outside
            the input field to save the note. To edit a note, click on the note
            in the sidebar. The note will appear in the workspace where you can
            update its title and content. To delete a note, click on the "x"
            button next to the note in the sidebar. To categorize a note, enter
            a category name in the sidebar's category input field and press
            Enter. The category will be added to the list of categories. To
            search for a note by title, enter a search query in the search input
            field. The notes in the sidebar will be filtered based on the
            matching titles.
          </li>
        </ul>
      ),
    },
    {
      id: "9",
      name: "Vue IQ | Test Website",
      imgMain: imgIQ1,
      textShort: "Sites Built With Vue.js",
      textButton: (
        <div className="project__tools">
          {Object.keys(project5).map((obj, index) => (
            <Button text={project5[obj].text} key={index}></Button>
          ))}
        </div>
      ),
      text: "This website is a Vue-based application that includes a homepage, a test page, and a form with questions to determine the IQ level.",
      gitLink: "https://github.com/onikaChorba/vueTestIq",
      browserLink: "https://vue-test-iq.vercel.app",
      imgSlider: (
        <Splide>
          <SplideSlide>
            <img src={imgIQ1} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgIQ2} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgIQ3} alt="img" />
          </SplideSlide>
          <SplideSlide>
            <img src={imgIQ4} alt="img" />
          </SplideSlide>
        </Splide>
      ),
      list: (
        <ul className="text textLists">
          <li className="textList">
            The website includes three main pages: homepage, about, test page
            and results page.
          </li>
          <li className="textList">
            <b className="text1">Homepage</b> <br />
            The homepage includes general information about the IQ test and a
            button to start the test. <br />
          </li>
          <li className="textList">
            <b className="text1">About</b> <br />
            The test information page has detailed information about the IQ
            test.
          </li>
          <li className="textList">
            <b className="text1">Test Page </b>
            <br />
            The test page includes a set of questions to determine the IQ level.
            The questions are presented one at a time, and the user must select
            an answer before proceeding to the next question.
          </li>
          <li className="textList">
            <b className="text1">Results Page </b>
            <br />
            The results page displays the IQ level based on the user's answers
            to the questions. The page also includes a timer that counts down
            from 10 minutes.
          </li>
        </ul>
      ),
    },
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
