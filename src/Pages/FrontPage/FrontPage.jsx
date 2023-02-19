import { ContactButton } from "@/components/ContactButton/ContactButton";
import { About } from "./sections/About/About";
import { Home } from "./sections/Home/Home";
import { Projects } from "./sections/Projects/Projects";
import { Resume } from "./sections/Resume/Resume";

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
      <div id="Resume">
        <Resume />
      </div>
      <div id="Contact" className="text">
        Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur ipsa, veritatis magni reiciendis molestias maxime animi ad
        nemo dolor, eligendi cupiditate harum iste nisi incidunt? Itaque animi
        numquam dolorum repellendus. Contact Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consectetur ipsa, veritatis magni
        reiciendis molestias maxime animi ad nemo dolor, eligendi cupiditate
        harum iste nisi incidunt? Itaque animi numquam dolorum repellendus.
        Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur ipsa, veritatis magni reiciendis molestias maxime animi ad
        nemo dolor, eligendi cupiditate harum iste nisi incidunt? Itaque animi
        numquam dolorum repellendus. Contact Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consectetur ipsa, veritatis magni
        reiciendis molestias maxime animi ad nemo dolor, eligendi cupiditate
        harum iste nisi incidunt? Itaque animi numquam dolorum repellendus.
        Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur ipsa, veritatis magni reiciendis molestias maxime animi ad
        nemo dolor, eligendi cupiditate harum iste nisi incidunt? Itaque animi
        numquam dolorum repellendus. Contact Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consectetur ipsa, veritatis magni
        reiciendis molestias maxime animi ad nemo dolor, eligendi cupiditate
        harum iste nisi incidunt? Itaque animi numquam dolorum repellendus.
        Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur ipsa, veritatis magni reiciendis molestias maxime animi ad
        nemo dolor, eligendi cupiditate harum iste nisi incidunt? Itaque animi
        numquam dolorum repellendus. Contact Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consectetur ipsa, veritatis magni
        reiciendis molestias maxime animi ad nemo dolor, eligendi cupiditate
        harum iste nisi incidunt? Itaque animi numquam dolorum repellendus.
        Contact Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur ipsa, veritatis magni reiciendis molestias maxime animi ad
        nemo dolor, eligendi cupiditate harum iste nisi incidunt? Itaque animi
        numquam dolorum repellendus.
      </div>
    </section>
  );
};
