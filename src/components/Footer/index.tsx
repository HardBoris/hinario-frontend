import { FaSignOutAlt } from "react-icons/fa";
import { BGLogo, UserLogo } from "../Logo";
import { useAuth } from "../../context/UserContext";
import "./style.css";

export const FooterBG = () => {
  const { signOut } = useAuth();
  return (
    <>
      <div className="footer__user__logo">
        <UserLogo />
      </div>
      <div className="footer__btn">
        <button onClick={() => signOut()}>
          <FaSignOutAlt />
        </button>
      </div>
      <div className="footer__logo">
        <div>
          Powered by{" "}
          <span id="bg__logo">
            <BGLogo />
          </span>
        </div>
      </div>
    </>
  );
};
