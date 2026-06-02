import introimg from "../../img/linkedin-picturecopy.png";

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Elizabeth Xaudaró</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Front-End Developer
      </p>

      <img
        src={introimg}
        alt="Elizabeth Xaudaró smiling"
        className="intro__img"
      />
    </section>
  );
}
