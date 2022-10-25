import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const history = useNavigate();

  return (
    <div>
      <h1>SignUp</h1>
      <button onClick={() => history("/login")}>Login</button>
      <button onClick={() => history("/")}>Home</button>
    </div>
  );
};
