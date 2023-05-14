import { ContactButton } from "@/components/ContactButton/ContactButton";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Home } from "./sections/Home/Home";
import { Projects } from "./sections/Projects/Projects";

export const FrontPage = () => {
  return (
    <section>
      <div className="contactButtonBlock">
        <ContactButton />
      </div>
      <div id="Home" className="Home">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact" className="text">
        <Contact />
      </div>
    </section>
  );
};
