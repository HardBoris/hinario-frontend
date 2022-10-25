import { useNavigate } from "react-router-dom";

export const Home = () => {
  const history = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => history("/login")}>Login</button>
      <button onClick={() => history("/signup")}>SignUp</button>
    </div>
  );
};
