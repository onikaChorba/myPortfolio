import "./ContactButton.scss";
import gitHub from "../../assets/img/gitIcon.png";
import linkedIn from "../../assets/img/linkIcon.png";
import gmail from "../../assets/img/gmail.png";
export const ContactButton = () => {
  return (
    <section className="contactButton">
      <a href="https://github.com/onikaChorba">
        <img src={gitHub} alt="gitHub" className="contactButton__icon" />
      </a>
      <a href="https://www.linkedin.com/in/оnika-chorba-2b0339198/">
        <img src={linkedIn} alt="linkedIn" className="contactButton__icon" />
      </a>
      <a href="gmail.com">
        <img src={gmail} alt="gmail" className="contactButton__icon" />
      </a>
    </section>
  );
};
