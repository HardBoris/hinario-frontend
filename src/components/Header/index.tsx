import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/UserContext";
import { UserLogo } from "../Logo";
import { Searcher } from "../searcher";
import "./style.css";

export const HeaderBG = () => {
  const { signOut } = useAuth();

  return (
    <>
      <div className="header__searcher">
        <Searcher
          name="hymnal-searcher"
          label="Buscador de Himnos"
          placeholder="Número o título do hino"
        />
      </div>
      <div className="header__content">
        <div className="header__lettering">
          <h1>Meu Hinário Adventista</h1>
        </div>
        <div className="header__botonera">
          <div className="user__logo">
            <UserLogo />
          </div>
          <div className="header__btn">
            <button onClick={() => signOut()}>
              <FaSignOutAlt />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
