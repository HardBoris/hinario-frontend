import "./App.css";
import "./styles/global.css";
import { NavBar } from "./components/NavBar";
import { Rutas } from "./routes";

export const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Rutas />
    </div>
  );
};

export default App;
