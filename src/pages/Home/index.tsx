// import { useNavigate } from "react-router-dom";
import "../../styles/global.css";
// import { useAuth } from "../../context/UserContext";
import { NavBar } from "../../components/NavBar";
import "./style.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { getHymnalSections } from "../../assets/data/HymnalSections";
import App from "../../App";
import { Searcher } from "../../components/searcher";

export const Home = () => {
  // const history = useNavigate();
  // const { signOut } = useAuth();

  const hymnalSections = getHymnalSections();

  return (
    <>
      <header>
        <div className="header__searcher">
          <Searcher
            name="hymnal-searcher"
            label="Buscador de Himnos"
            placeholder="Número o titulo del himno"
          />
        </div>
        <div className="header__content">
          <div className="header__lettering">
            <h1>Novo Hinário Adventista</h1>
          </div>
        </div>
      </header>
      <main>
        <aside>
          <nav>
            {hymnalSections.map((item) => (
              <div className="header__navigator">
                <Link to={item.way}>{item.lettering}</Link>
              </div>
            ))}
          </nav>
        </aside>
        <section>
          <h1>Igreja Adventista do Sétimo Dia</h1>
          <button>Iniciar</button>
        </section>
      </main>
      <footer>
        <NavBar />
      </footer>
    </>
  );
};
