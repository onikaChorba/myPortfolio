import "./Header.scss";
import { Link } from "react-scroll";
import myImg from "../../assets/img/img1.png";
export const Header = () => {
  const headerNav = [
    { text: "Home", to: "Home" },
    { text: "About Me", to: "About" },
    { text: "Projects", to: "Projects" },
    { text: "Resume", to: "Resume" },
    { text: "Contact", to: "Contact" },
  ];
  return (
    <header className="header">
      <div className="header__logo logo">
        <img src={myImg} alt="photo1" className="logo__img" />
        <p className="logo__text">
          <span className="logo__text2">Onika</span> Chorba
        </p>
      </div>
      <nav className="header__nav">
        <ul className="headerNavs">
          {headerNav.map((el, index) => (
            <Link
              className="headerNav"
              activeClass="headerNavActive"
              to={el.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {el.text}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
