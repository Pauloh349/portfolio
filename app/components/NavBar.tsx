"use client";

import { useEffect, useState } from "react";

const links = [
  ["person", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["certification", "Certification"],
  ["crypto", "Crypto"],
  ["business", "Business"],
  ["footer", "Contact"],
] as const;

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("person");
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 50);
      setActiveSection(
        links.reduce((current, [id]) => {
          const section = document.getElementById(id);
          return section && window.scrollY >= section.offsetTop - 200
            ? id
            : current;
        }, "person"),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div
        className={`mobile-nav-overlay${isMenuOpen ? " active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav
        className={`navbar${hasScrolled ? " scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <div className="container nav-container">
          <a href="#person" className="logo" onClick={closeMenu}>
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            Paul<span>M.</span>
          </a>
          <ul
            className={`nav-links${isMenuOpen ? " active" : ""}`}
            id="primary-navigation"
          >
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="mobile-menu-btn"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
