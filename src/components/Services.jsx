import { HashLink } from "react-router-hash-link";

export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design</h3>
          <p>
            I strive to create beautiful and intuitive web applications,
            designing with both aesthetics and usability in mind. My goal is to
            build experiences that are visually engaging, easy to navigate, and
            enjoyable for users.
          </p>
        </div>

        <div className="service">
          <h3>Development</h3>
          <p>
            I am a versatile frontend developer with a speciality in React JS
            and Tailwind CSS. I also have a solid grip of the fundamentals of
            web development using HTML, CSS, and JavaScript.
          </p>
        </div>
      </div>

      <HashLink smooth to="/#work" className="btn">
        My Projects
      </HashLink>
    </section>
  );
}
