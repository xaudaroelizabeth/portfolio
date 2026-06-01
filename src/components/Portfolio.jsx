import { Link } from "react-router-dom";
import twimbaimg from "../../img/twimba.png";
import tenziesimg from "../../img/tenzies.jpg";
import passwordGeneratorImg from "../../img/password-generator.jpg";
import memeGeneratorImg from "../../img/meme-generator.jpg";
import personalDashboardImg from "../../img/personal-dashboard.png";
import vanlifeImg from "../../img/vanlife.jpg";

const portfolioItems = [
  { id: 1, image: twimbaimg, alt: "Twimba project" },
  { id: 2, image: tenziesimg, alt: "Tenzies project" },
  {
    id: 3,
    image: passwordGeneratorImg,
    alt: "Password Generator project",
  },
  { id: 4, image: memeGeneratorImg, alt: "Meme Generator project" },
  {
    id: 5,
    image: personalDashboardImg,
    alt: "Personal Dashboard project",
  },
  { id: 6, image: vanlifeImg, alt: "Van Life project" },
];

export default function Portfolio() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My projects</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            to={`/portfolio-item/${item.id}`}
            className="portfolio__item"
          >
            <img src={item.image} alt={item.alt} className="portfolio__img" />
          </Link>
        ))}
      </div>
    </section>
  );
}
