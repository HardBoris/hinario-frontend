import { NavLink } from "react-router-dom";

export const NavBar = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-start">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="login"
          >
            Login
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="signup"
          >
            Cadastro
          </NavLink>
        </div>
        {/* <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </nav>
  );
};
