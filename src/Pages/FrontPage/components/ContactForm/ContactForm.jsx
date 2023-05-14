import { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";
export const ContactForm = () => {
  const form = useRef();
  const serviceID = "default_service";
  const templateID = "template_wbw4r9s";
  const pablicKeyID = "CWJum74kqCFQ_-6G-";
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, pablicKeyID).then(
      (result) => console.log(result.text),
      (error) => console.log(error.text)
    );
    e.target.reset();
  };
  return (
    <form ref={form} className="form" onSubmit={sendEmail} id="form">
      <div className="name">
        <label className="text1" htmlFor="name" id="name">
          <p className="form__label">Name</p>
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="form__input"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="email">
        <label className="text1" htmlFor="email">
          <p className="form__label">Email</p>
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="form__input"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="message">
        <label className=" text1" htmlFor="message">
          <p className="form__label"> Message</p>
        </label>
        <textarea
          className="form__input textarea text1"
          type="text"
          id="message"
          name="message"
          placeholder="Enter Your Message"
        />
      </div>
      <div className="buttonForm">
        <button type="submit">
          <span className="buttonForm__text">Submit</span>
        </button>
      </div>
    </form>
  );
};
