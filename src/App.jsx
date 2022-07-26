import { useState } from 'react';
import { useScroll } from './hooks/useScroll';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Tecnologies from './components/services/Tecnologies';
import Project from './components/projects/Project';
import AboutMe from './components/contact/AboutMe';
import Form from './components/contact/Form';

function App() {
  const [isShow, setIsShow] = useState(true);
  const { scrollY } = useScroll();
  const style = {
    paddingTop: scrollY > 70 && '1rem',
    paddingBottom: scrollY > 70 && '1rem',
  };
  return (
    <>
      <header className="header" style={style}>
        <div className="header__item">
          <img className="header__img" src="/logo-icon.svg" alt="Logo" />
        </div>
        <Nav />

        <div className="header__item">
          <a
            href="https://api.whatsapp.com/send?phone=573213746925&text=Hi!%20I%27m%20interested%20in%20your%20services%20contact%20me"
            target="__blank"
          >
            <img src="/phone.svg" alt="phone icon" className="header__phone" />
          </a>
        </div>
      </header>
      <main className="main">
        <Home />
        <Tecnologies />
        <Project />
        <section className="contact" id="contact">
          <Form isShow={isShow} setIsShow={setIsShow} />
          <AboutMe isShow={isShow} setIsShow={setIsShow} />
        </section>
      </main>
    </>
  );
}

export default App;
