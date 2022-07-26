import React, { useEffect, useState } from 'react';
import './project.css';
const Project = () => {
  const [imgSelected, setImgSelected] = useState(2);

  const nextImg = () => {
    if (imgSelected < 3) {
      setImgSelected((e) => e + 1);
    }
  };

  const prevImg = () => {
    if (imgSelected > 1) {
      setImgSelected((e) => e - 1);
    }
  };

  return (
    <section className="project" id="projects">
      <h2 className="project__title">My Projects</h2>
      {screen.width >= 1024 && (
        <>
          <div className="project__carousel">
            <div
              className={`project__semicarousel carouse-movement-${imgSelected}`}
            >
              <img
                src="/pokeapi.webp"
                alt="pokeapi"
                className={`project__items ${
                  imgSelected === 1 && 'carousel-image-active'
                }`}
              />
              <img
                src="/victory-jewel.webp"
                alt="victroy jewel"
                className={`project__items ${
                  imgSelected === 2 && 'carousel-image-active'
                }`}
              />
              <img
                src="https://picsum.photos/400"
                alt="random"
                className={`project__items ${
                  imgSelected === 3 && 'carousel-image-active'
                }`}
              />
            </div>
          </div>
          <div className="project-btn-container">
            <button className="project__buttons" onClick={prevImg}>
              <img src="arrow-left.svg" alt="left" />
            </button>
            <button
              className="project__buttons project__buttons--right"
              onClick={nextImg}
            >
              <img src="/arrow-right.svg" alt="right" />
            </button>
          </div>
        </>
      )}

      {screen.width < 1024 && (
        <div className="projects-container">
          <div className="project__slider">
            <div
              className="project__slide"
              id="slide-1"
              onScroll={(e) => console.log('hola')}
            >
              <img src="/pokeapi.webp" alt="pokeapi" />
            </div>
            <div
              className="project__slide"
              id="slide-2"
              onClick={() => console.log('hola')}
            >
              <img src="/victory-jewel.webp" alt="victroy jewel" />
            </div>
            <div
              className="project__slide"
              id="slide-3"
              onClick={() => console.log('hola')}
            >
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="project__slide" id="slide-4">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="project__slide" id="slide-5">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
