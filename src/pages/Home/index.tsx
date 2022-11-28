// import { useNavigate } from "react-router-dom";
import "../../styles/global.css";
import "../../styles/layout.css";
// import { useAuth } from "../../context/UserContext";
import { NavBar } from "../../components/NavBar";
import "./style.css";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { getHymnalSections } from "../../assets/data/HymnalSections";
import { Searcher } from "../../components/searcher";
import { HymnDisplay } from "../../components/Card";
import { Hino, useHymns } from "../../context/HymnContext";
import { useAuth } from "../../context/UserContext";
import { useState, useEffect } from "react";
import { displayPartsToString } from "typescript";

export const Home = () => {
  useEffect(() => {
    hymnal();
  }, []);
  // const history = useNavigate();
  // const { signOut } = useAuth();

  // const hymnalSections = getHymnalSections();
  const { hinario, mensaje, filteredHymns, hymnal } = useHymns();
  const [prueba, setPrueba] = useState({} as Hino);
  const { signOut } = useAuth();

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
          <div className="header__btn">
            <button onClick={() => signOut()}>Salir</button>
          </div>
        </div>
      </header>
      <main>
        <aside>
          <div className="aside__list">
            {filteredHymns.length === 0 ? (
              hinario.length !== 0 ? (
                hinario.map((item) => (
                  <div
                    key={item.hymnId}
                    role="button"
                    onClick={() => setPrueba(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <p>
                      <span>{item.hymnNumber} - </span>
                      {item.hymnTitle}
                    </p>
                  </div>
                ))
              ) : (
                <div className="aside__msg">
                  <p>{mensaje}</p>
                </div>
              )
            ) : (
              filteredHymns.map((item) => (
                <div
                  key={item.hymnId}
                  role="button"
                  onClick={() => setPrueba(item)}
                  style={{ cursor: "pointer" }}
                >
                  <p>
                    <span>{item.hymnNumber} - </span>
                    {item.hymnTitle}
                  </p>
                </div>
              ))
            )}
          </div>
        </aside>
        <section>
          <div className="section__title">
            <h1>Igreja Adventista do Sétimo Dia</h1>
          </div>
          <div className="display__box">
            {prueba.hymnId ? (
              <HymnDisplay
                numero={prueba.hymnNumber}
                titulo={prueba.hymnTitle}
                id={prueba.hymnId}
              />
            ) : (
              <div>
                <h1>Selecciona un titulo</h1>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer__btn">
          <button onClick={() => signOut()}>Salir</button>
        </div>
      </footer>
    </>
  );
};
