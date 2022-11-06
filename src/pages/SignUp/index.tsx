import { SignForm } from "./signForm";
import { SignIntro } from "./signIntro";

export const SignUp = () => {
  return (
    <div className="sign-set">
      <div className="sign-intro">
        <SignIntro />
      </div>
      <div className="sign-form">
        <SignForm />
      </div>
    </div>
  );
};
