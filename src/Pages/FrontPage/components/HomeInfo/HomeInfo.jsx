import { Link } from "react-scroll";
import "./HomeInfo.scss";

export const HomeInfo = () => {
  return (
    <div className="homeInfo">
      <img
        className="homeInfo__img"
        src="https://media.giphy.com/media/3kPDmoWdBpQPNhCnUG/giphy.gif"
        alt="gifImg"
      />
      <h1 className="homeInfo__title1">
        <span className="homeInfo__span"> Onika </span> Chorba
      </h1>
      <h2 className="homeInfo__title2 title2"> Frontend developer</h2>
      <p className="homeInfo__text text">
        My primary focus is on building the developed of websites. By leveraging
        my skills I strive to create an engaging and intuitive user experience
        that drives the success of the overall product.
      </p>
      <Link
        className="arrow"
        to="About"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Link>
    </div>
  );
};
