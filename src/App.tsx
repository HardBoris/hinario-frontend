import React from "react";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import { Navbar } from "./components/Navbar";
// import { Home } from "./pages/Home";
// import { SignUp } from "./pages/SignUp";
import { Rutas } from "./routes";

export const App = () => {
  return (
    <>
      <Navbar />
      <Rutas />
    </>
    /* <BrowserRouter>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter> */
  );
};

export default App;
