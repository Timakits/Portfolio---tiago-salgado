import React, { useEffect, useState } from "react";
import "./styles.css";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <nav
      className={`navbar ${scrolling ? "navbar-scroll" : ""} navbar-expand-lg`}
    >
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="#">
          Tiago salgado - Portfolio
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#about"
              >
                About me
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
