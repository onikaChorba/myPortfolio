import { ContactForm } from "../../components/ContactForm/ContactForm";
export const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title title2">Contact</h2>
      <p className="text">
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className="section">
        <ContactForm />
      </div>
    </section>
  );
};
