import "../../styles/global.css";
import "../../styles/layout.css";
import "./style.css";
// import { Searcher } from "../../components/searcher";
import { HymnDisplay } from "../../components/HymnDisplay";
import { Hino, useHymns } from "../../context/HymnContext";
import { useAuth } from "../../context/UserContext";
import { useState, useEffect } from "react";
import { BGLogo, UserLogo } from "../../components/Logo";
import { FaSignOutAlt } from "react-icons/fa";
import { HymnCard } from "../../components/HymnCard";
import { HeaderBG } from "../../components/Header";
import { FooterBG } from "../../components/Footer";

export const Home = () => {
  const { hymnal } = useHymns();
  const [hino, setHino] = useState({} as Hino);
  const { signOut } = useAuth();

  useEffect(() => {
    hymnal();
  }, []);

  return (
    <div className="app">
      <header>
        <HeaderBG />
      </header>
      <main>
        <aside>
          <HymnCard setHino={setHino} />
        </aside>
        <section>
          <div className="section__title">
            <h1>Igreja Adventista do Sétimo Dia</h1>
          </div>
          <div className="display__box">
            {hino.hymnId ? (
              <HymnDisplay
                numero={hino.hymnNumber}
                titulo={hino.hymnTitle}
                id={hino.hymnId}
              />
            ) : (
              <div className="display">
                <h1>Escolha um título</h1>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <FooterBG />
      </footer>
    </div>
  );
};
