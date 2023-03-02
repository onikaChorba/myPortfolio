import "./index.scss";
import Helmet from "react-helmet";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { FrontPage } from "./Pages/FrontPage/FrontPage";
function App() {
  return (
    <>
      <Helmet>
        <title>Onika Chorba | Frontend Developer</title>
        <link
          rel="icon"
          href="https://media.giphy.com/media/3kPDmoWdBpQPNhCnUG/giphy.gif"
        />
        <link
          rel="manifest"
          href="https://media.giphy.com/media/3kPDmoWdBpQPNhCnUG/giphy.gif"
        />
        <link
          rel="apple-touch-icon"
          href="https://media.giphy.com/media/3kPDmoWdBpQPNhCnUG/giphy.gif"
        />
      </Helmet>
      <div className="wrapper">
        <Header />
        <menu className="mainContainer">
          <FrontPage />
        </menu>
        <Footer />
      </div>
    </>
  );
}

export default App;
