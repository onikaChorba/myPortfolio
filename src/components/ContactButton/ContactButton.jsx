import "./ContactButton.scss";
import gitHub from "../../assets/img/gitIcon.png";
import linkedIn from "../../assets/img/linkIcon.png";
import gmail from "../../assets/img/gmail.png";
export const ContactButton = () => {
  const contactButton = [
    { href: "https://github.com/onikaChorba", src: gitHub },
    {
      href: "https://www.linkedin.com/in/оnika-chorba-2b0339198/",
      src: linkedIn,
    },
    { href: "gmail.com", src: gmail },
  ];
  return (
    <section className="contactButton">
      {contactButton.map((contact, index) => (
        <a href={contact.href} key={index} target="_blank" rel="noreferrer">
          <img src={contact.src} alt="gitHub" className="contactButton__icon" />
        </a>
      ))}
    </section>
  );
};
