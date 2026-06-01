import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ onNavToggle }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    const newState = !navOpen;
    setNavOpen(newState);
    if (onNavToggle) {
      onNavToggle(newState);
    }
  };

  const closeNav = () => {
    setNavOpen(false);
    if (onNavToggle) {
      onNavToggle(false);
    }
  };

  return (
    <header>
      <div className="logo">
        <p className="logo_text">{"<devellie>"}</p>
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span className="hamburger"></span>
      </button>
      <nav className={`nav ${navOpen ? "nav-active" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="nav__item">
            <a href="/#services" className="nav__link" onClick={closeNav}>
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="/#about" className="nav__link" onClick={closeNav}>
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="/#work" className="nav__link" onClick={closeNav}>
              My Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
