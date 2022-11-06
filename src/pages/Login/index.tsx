import { LoginForm } from "./loginForm";
import { LoginIntro } from "./loginIntro";
import "./style.css";

export const Login = () => {
  return (
    <div className="login-set">
      <div className="login-intro">
        <LoginIntro />
      </div>
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
};
