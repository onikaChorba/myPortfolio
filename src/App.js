import { Header } from "./components/Header/Header";
import "./index.scss";
import { FrontPage } from "./Pages/FrontPage/FrontPage";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <menu className="mainContainer">
        <FrontPage />
      </menu>
    </div>
  );
}

export default App;
