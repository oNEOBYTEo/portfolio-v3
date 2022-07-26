import React from 'react';

const AboutMe = ({ isShow, setIsShow }) => {
  return (
    <article
      className={`contact__me ${!isShow && 'contact-show'}`}
      id="contact"
    >
      <h2 className="contact__title">Who am i ?</h2>
      <p className="contact__paragraph">
        Hi! I’m Anderson Cifuentes, i live in Bogotá/Colombia my passion is web
        development and being self-taught, every day I learn something new and
        enjoy this, count on me if you want to create something wonderful.
      </p>
      <button className="contact__btn contact__btn--shadow-right">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="anderson-cifuentes-cv.pdf"
        >
          CV
        </a>
      </button>
      {screen.width >= 280 && screen.width <= 768 && (
        <button
          className="contact-cta"
          onClick={() => setIsShow(!isShow)}
          type="button"
        >
          Form
        </button>
      )}
    </article>
  );
};

export default AboutMe;
