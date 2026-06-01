import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ navOpen, onNavToggle }) {
  return (
    <div className={navOpen ? "nav-open" : ""}>
      <Header onNavToggle={onNavToggle} />
      <Outlet />
      <Footer />
    </div>
  );
}
