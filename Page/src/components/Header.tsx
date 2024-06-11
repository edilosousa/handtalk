import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/logo.jpg";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      console.log("Element found:", element);
      const headerHeight = document.querySelector('nav')?.clientHeight || 0;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({ top: window.scrollY + offsetTop, behavior: 'smooth' }); 
    } else {
      console.log("Element not found with ID:", id);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } fixed-top`}
      
    >
      <div className="container-fluid">
        <img src={logo} alt="" style={{ width: "100px" }} />
        <a className="navbar-brand" href="#">
          Hand Talk
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => scrollToSection("swagger")}
              >
                Swagger
              </a>
            </li>
          </ul>
          <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
