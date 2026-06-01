import { Link } from "react-router-dom";

const portfolioItems = [
  { id: 1, image: "img/twimba.png", alt: "Twimba project" },
  { id: 2, image: "img/tenzies.jpg", alt: "Tenzies project" },
  {
    id: 3,
    image: "img/password-generator.jpg",
    alt: "Password Generator project",
  },
  { id: 4, image: "img/meme-generator.jpg", alt: "Meme Generator project" },
  {
    id: 5,
    image: "img/personal-dashboard.png",
    alt: "Personal Dashboard project",
  },
  { id: 6, image: "img/vanlife.jpg", alt: "Van Life project" },
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
