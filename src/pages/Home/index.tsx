import { useNavigate } from "react-router-dom";
import "../../styles/layout.css";
import { useAuth } from "../../context/UserContext";
import { NavBar } from "../../components/NavBar";

export const Home = () => {
  const history = useNavigate();
  const { signOut } = useAuth();
  return (
    <>
      <NavBar />
      <h1>Home</h1>

      <main>
        <button onClick={() => history("/")}>Login</button>
        <button onClick={() => history("signup")}>SignUp</button>
        <button onClick={() => signOut()}>LogOut</button>
      </main>
      <footer></footer>
    </>
  );
};
