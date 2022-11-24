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
import { useState } from "react";

export const Home = () => {
  // const history = useNavigate();
  // const { signOut } = useAuth();

  // const hymnalSections = getHymnalSections();
  const { hinario } = useHymns();
  const [prueba, setPrueba] = useState<Hino>({} as Hino);

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
          {/* <nav>
            {hymnalSections.map((item, index) => (
              <div className="header__navigator" key={index}>
                <Link to={item.way}>{item.lettering}</Link>
              </div>
            ))}
          </nav> */}
          <div style={{ height: "100%", overflow: "auto" }}>
            {hinario.map((item) => (
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
            ))}
          </div>
        </aside>
        <section>
          <h1>Igreja Adventista do Sétimo Dia</h1>
          <button>Iniciar</button>
          <div
            style={{
              width: "400px",
              border: "2px solid red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HymnDisplay
              numero={prueba.hymnNumber}
              titulo={prueba.hymnTitle}
              id={prueba.hymnId}
            />
          </div>
        </section>
      </main>
      <footer>
        <NavBar />
      </footer>
    </>
  );
};
