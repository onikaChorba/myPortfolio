import "./index.scss";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { FrontPage } from "./Pages/FrontPage/FrontPage";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <menu className="mainContainer">
        <FrontPage />
      </menu>
      <Footer />
    </div>
  );
}

export default App;
