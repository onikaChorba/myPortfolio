import { ContactForm } from "../../components/ContactForm/ContactForm";

export const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title title2">Contact</h2>
      <p className="text">
        I am currently seeking new job opportunities that allow me to
        contribute, learn and grow. If you have an opportunity that aligns with
        my skills and experience, please do not hesitate to contact me by
        submitting the form below. You can also
        <a
          href="https://drive.google.com/file/d/1kbBJHpm9OVrRh8W-LP6N_bNY2pbkSQMf/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <span> view or download </span>
        </a>
        my resume on my contact page. I will get back to you as soon as
        possible.
      </p>
      <div className="section">
        <ContactForm />
      </div>
    </section>
  );
};
