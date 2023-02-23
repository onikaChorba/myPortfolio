import "./Home.scss";

export const Home = () => {
  return (
    <section className="home">
      <img
        className="home__img"
        src="https://media.giphy.com/media/3kPDmoWdBpQPNhCnUG/giphy.gif"
        alt="gifImg"
      />
      <h1 className="home__title1">
        <span> Onika </span> Chorba
      </h1>
      <h2 className="home__title2 title2"> Frontend developer</h2>
      <p className="home__text text">
        My primary focus is on building the developed of websites. By leveraging
        my skills I strive to create an engaging and intuitive user experience
        that drives the success of the overall product.
      </p>
    </section>
  );
};
