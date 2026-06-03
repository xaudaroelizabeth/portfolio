import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PortfolioItem from "./components/PortfolioItem";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [navOpen]);

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Layout navOpen={navOpen} onNavToggle={setNavOpen} />}
        >
          <Route index element={<Home />} />
          <Route path="portfolio-item/:id" element={<PortfolioItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
