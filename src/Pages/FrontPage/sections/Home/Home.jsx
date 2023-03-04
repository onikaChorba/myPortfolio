import "./Home.scss";
import Canvas from "../../components/Canvas/Canvas";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
export const Home = () => {
  return (
    <section className="home">
      <HomeInfo />
      <div className="homeAnimation">
        <Canvas />
      </div>
    </section>
  );
};
