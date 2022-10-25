import { useNavigate } from "react-router-dom";

export const Login = () => {
  const history = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => history("/")}>Home</button>
      <button onClick={() => history("/signup")}>SignUp</button>
    </div>
  );
};
