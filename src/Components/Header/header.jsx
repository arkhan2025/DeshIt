import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [active, setActive] = useState("home");
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const manualScroll = useRef(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = [
    "home",
    "about",
    "services",
    "skill",
    "portfolio",
    "project",
    "contact",
  ];

  const scrollToSection = (id) => {
    manualScroll.current = true;
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
    setTimeout(() => {
      manualScroll.current = false;
    }, 600);
  };

  useEffect(() => {
    const activeButton = navRef.current.querySelector("button.active");
    const underline = underlineRef.current;
    if (activeButton && underline) {
      underline.style.width = `${activeButton.offsetWidth}px`;
      underline.style.left = `${activeButton.offsetLeft}px`;
    }
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      if (manualScroll.current) return;

      const scrollY = window.scrollY;
      const viewportCenter = window.innerHeight / 2;

      let current = "home";

      if (scrollY < 300) {
        current = "home";
      } else if (scrollY >= 300 && scrollY < 350) {
        current = "about";
      } else if (scrollY >= 350) {
        let minDistance = Infinity;
        sectionIds.slice(2).forEach((id) => {
          const section = document.getElementById(id);
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            current = id;
          }
        });
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div
          className="top"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <h1>
            <b>
              <span className="red">ARAFAT</span> HOSSAIN SOBUJ
            </b>
          </h1>
        </div>

        <nav className="desktop-nav" ref={navRef}>
          {sectionIds.map((id) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => scrollToSection(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}

          <div className="underline" ref={underlineRef}></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
