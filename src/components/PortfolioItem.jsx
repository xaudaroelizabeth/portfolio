import { useParams, Link } from "react-router-dom";
import twimbaimg from "../../img/twimba.png";
import tenziesimg from "../../img/tenzies.jpg";
import passwordGeneratorImg from "../../img/password-generator.jpg";
import memeGeneratorImg from "../../img/meme-generator.jpg";
import personalDashboardImg from "../../img/personal-dashboard.png";
import vanlifeImg from "../../img/vanlife.jpg";

const portfolioData = {
  1: {
    title: "Twimba",
    description: "HTML & CSS",
    image: twimbaimg,
    github: "https://github.com/xaudaroelizabeth/Twimba",
    liveSite: "https://tweetspace.netlify.app/",
    details:
      "Twimba is a mini social media app where users can create tweets, like posts, retweet, comment, and delete tweets with certain restrictions. It also persists data in the browser, allowing posts to remain after page refresh. Built with vanilla JavaScript, HTML, and CSS, the project focuses on dynamic DOM rendering, user interactions, and client-side storage.",
  },
  2: {
    title: "Tenzies",
    description: "React & Vite",
    image: tenziesimg,
    github: "https://github.com/xaudaroelizabeth/Tenzies",
    liveSite: "https://rolltoten-zies.netlify.app/",
    details:
      "Tenzies is a simple dice game where the objective is to roll ten dice until all of them show the same number. Players can click on individual dice to 'hold' their value, preventing them from being rolled again. The game tracks the number of rolls and the time taken to win, providing a fun and engaging experience built with React.",
  },
  3: {
    title: "Password \n Generator",
    description: "HTML CSS & JavaScript",
    image: passwordGeneratorImg,
    github: "https://github.com/xaudaroelizabeth/password-generator",
    liveSite: "https://passwordsthatarent123456789.netlify.app/",
    details:
      "A fun and interactive password generator built with JavaScript and Vite that allows users to create secure, random passwords instantly. Users can customize password length and choose to include uppercase letters, lowercase letters, numbers, and special characters. The app generates strong passwords based on the selected criteria, with the option to generate two unique passwords at once and copy them with a single click. This project demonstrates core JavaScript concepts such as functions, arrays, and DOM manipulation while focusing on usability and online security.",
  },
  4: {
    title: "Cat Meme \n Generator",
    description: "React & Vite",
    image: memeGeneratorImg,
    github: "https://github.com/xaudaroelizabeth/cat-meme",
    liveSite: "https://cat-meme-emotion-generator.netlify.app/",
    details:
      "A meme generator built with React and Vite that allows users to generate memes using still images or GIFs based on selected emotions. Users can switch between still image mode, GIF mode, or GIF-only mode for different visual outputs. The app features dynamic meme rendering and a responsive, modern interface designed for fast interaction. This project demonstrates React fundamentals such as state management, conditional rendering, and reusable components.",
  },
  5: {
    title: "Chromify",
    description: "HTML CSS & JavaScript",
    image: personalDashboardImg,
    github: "https://github.com/xaudaroelizabeth/chromify",
    details:
      "A modern Chrome dashboard extension inspired by Momentum that functions as a personalized dashboard, featuring live weather updates and real-time cryptocurrency data. It includes dynamically changing Unsplash backgrounds and displays photographer credits within the interface. The extension provides a clean, responsive UI designed to enhance focus and productivity while delivering real-time information at a glance.",
  },
  6: {
    title: "Van Life",
    description: "React & Vite",
    image: vanlifeImg,
    github: "https://github.com/xaudaroelizabeth/van-life",
    liveSite: "https://vanvida.netlify.app/",
    details:
      "A responsive van rental web application built with React and Vite that allows users to browse available camper vans, view detailed listings, and explore pricing and features. The app includes a host experience where users can log in to view and manage their listed vans. It demonstrates React fundamentals such as dynamic routing, nested layouts, and reusable components while focusing on a clean, mobile-friendly user interface.",
  },
};

export default function PortfolioItem() {
  const { id } = useParams();
  const portfolio = portfolioData[parseInt(id)];

  if (!portfolio) {
    return (
      <div className="portfolio-item-individual">
        <h2>Project not found</h2>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="intro portfolio-intro">
        <h1 className="section__title section__title--intro">
          {portfolio.title}
          <strong>web app</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          {portfolio.description}
        </p>
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="intro__img"
        />
      </section>

      <div className="portfolio-item-individual">
        <div>
          <a className="" target="_blank" href={portfolio.github}>
            <i className="fab fa-github"></i> View Code
          </a>
          {portfolio.liveSite && (
            <a className="" target="_blank" href={portfolio.liveSite}>
              <i className="fas fa-eye"></i> Live version{" "}
            </a>
          )}
        </div>
        <p>{portfolio.details}</p>
      </div>
    </>
  );
}
