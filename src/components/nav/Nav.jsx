import React, { useState } from 'react';
import './nav.css';
const Nav = () => {
  const [isSelected, setSelected] = useState(0);

  const classSelected = (n) => {
    setSelected(n);
    setTimeout(() => {
      setSelected(0);
    }, 1000);
  };

  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__item" onClick={() => classSelected(1)}>
          <a
            href="#"
            className={`nav__link ${
              isSelected == 1 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
          >
            <span className="nav__letters">Home</span>
            <img src="/home-icon.svg" alt="home" className="nav__icon" />
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#services"
            className={`nav__link ${
              isSelected == 2 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
            onClick={() => classSelected(2)}
          >
            <span className="nav__letters">Services</span>
            <img
              src="/services-icon.svg"
              alt="services"
              className="nav__icon"
            />
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#projects"
            className={`nav__link ${
              isSelected == 3 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
            onClick={() => classSelected(3)}
          >
            <span className="nav__letters">Projects</span>
            <img
              src="/projects-icon.svg"
              alt="projects"
              className="nav__icon"
            />
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className={`nav__link ${
              isSelected == 4 ? 'nav__link--active' : 'nav__link--disabled'
            }`}
            onClick={() => classSelected(4)}
          >
            <span className="nav__letters">Contact</span>
            <img src="/contact-icon.svg" alt="contact" className="nav__icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
