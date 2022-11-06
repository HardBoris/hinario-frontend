import "./App.css";
import "./styles/global.css";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
