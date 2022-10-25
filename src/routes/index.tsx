import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
// import { Dashboard } from "../pages/Dashboard";
// import { Favorites } from "../pages/Favorites";
// import { Phrases } from "../pages/Phrases";
// import { Comments } from "../pages/Comments";
// import { MyComments } from "../pages/MyComments";

// import { AnimatePresence } from "framer-motion";

// import { useLocation } from "react-router-dom";

export const Rutas = () => {
  // const location = useLocation();
  return (
    // <AnimatePresence exitBeforeEnter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
      {/* <Route path="/phrases" component={Phrases} isPrivate /> */}
      {/* <Route path="/favorites" component={Favorites} isPrivate /> */}
      {/* <Route path="/comments/:id" component={Comments} isPrivate /> */}
      {/* <Route path="/mycomments" component={MyComments} isPrivate /> */}
    </Routes>
    //  </AnimatePresence>
  );
};
