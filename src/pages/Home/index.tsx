// import { useNavigate } from "react-router-dom";
import "../../styles/global.css";
// import { useAuth } from "../../context/UserContext";
import { NavBar } from "../../components/NavBar";
import "./style.css";

export const Home = () => {
  // const history = useNavigate();
  // const { signOut } = useAuth();
  return (
    <>
      <header>
        <h1>Novo Hinário Adventista</h1>
      </header>
      <main>
        <h1>Igreja Adventista do Sétimo Dia</h1>
        <div className="fields">
          <input type="text" />
        </div>
      </main>
      <footer>
        <NavBar />
      </footer>
    </>
  );
};
