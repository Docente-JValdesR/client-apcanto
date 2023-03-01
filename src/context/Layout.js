import { useState, useEffect } from "react";
import useScrollToTop from "../hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
function Layout() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Obtener la altura del navbar
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  useScrollToTop();

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: navbarHeight }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
