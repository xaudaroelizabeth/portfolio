import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:xaudaroelizabeth@gmail.com" className="footer__link">
        xaudaroelizabeth@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <HashLink className="social-list__link" to="/#home">
            <i className="fas fa-home"></i>
          </HashLink>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/elizabeth-xaudaro-9894b7275/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
