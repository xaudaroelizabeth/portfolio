import whoIamimg from "../../img/linkedin-picture2.png";
export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Front-End Developer and animal lover from Texas
      </p>

      <div className="about-me__body">
        <div>
          <p>
            I'm a web developer and designer based out of San Antonio, Texas. I
            love building apps that solve real-world problems, and that are
            delightful to use. My specialities include React JS, Tailwind CSS,
            and Styled Components.
          </p>
          <p>
            My background is in real estate, sales, and marketing. I also have
            one adorable dog.
          </p>
        </div>
        <img
          src={whoIamimg}
          alt="Elizabeth leaning against a bus"
          className="about-me__img"
        />
      </div>
    </section>
  );
}
