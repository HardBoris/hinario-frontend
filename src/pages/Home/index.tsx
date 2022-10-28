import { useNavigate } from "react-router-dom";
import "../../styles/layout.css";

export const Home = () => {
  const history = useNavigate();
  return (
    <>
      <h1>Home</h1>

      <main>
        <button onClick={() => history("/login")}>Login</button>
        <button onClick={() => history("/signup")}>SignUp</button>
      </main>
      <footer></footer>
    </>
  );
};
