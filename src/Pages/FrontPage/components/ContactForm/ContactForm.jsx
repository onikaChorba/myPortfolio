import "./ContactForm.scss";
export const ContactForm = () => {
  return (
    <section className="form">
      <div className="name">
        <label className=" text1" for="text">
          <p className="form__label">Name</p>
        </label>
        <input
          type="text"
          id="name"
          className="form__input text1"
          placeholder="Enter Your Name"
        />
      </div>
      <div className="email">
        <label className=" text1" for="email">
          <p className="form__label">Email</p>
        </label>
        <input
          type="email"
          id="email"
          className="form__input text1"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="message">
        <label className=" text1" for="text">
          <p className="form__label"> Message</p>
        </label>
        <textarea
          className="form__input textarea text1"
          type="password"
          id="massage"
          placeholder="Enter Your Message"
        />
      </div>

      <div className="buttonForm">
        <button type="submit">
          <button orange small>
            <span className="buttonForm__text">Submit</span>
          </button>
        </button>
      </div>
    </section>
  );
};
