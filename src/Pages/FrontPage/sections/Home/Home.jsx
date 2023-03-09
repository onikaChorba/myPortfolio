import "./Home.scss";
import Canvas from "../../components/Canvas/Canvas";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
export const Home = () => {
  return (
    <section className="home">
      <div className="homeAnimation">
        <Canvas />
        <div className="homeInfo">
          <HomeInfo />
        </div>
      </div>
    </section>
  );
};
