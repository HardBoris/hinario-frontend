import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { useNavigate } from "react-router-dom";

import { localApi as api } from "../services/api";

interface HymnProviderProps {
  children: ReactNode;
}

/* interface User {
  email: string;
  userId: string;
  userCategory: string;
} */

/* interface AuthState {
  token: string;
  user: string;
} */

/* interface SignInCredentials {
  email: string;
  password: string;
} */

interface HymnContextData {
  /* user: string;
  token: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  signUp: (info: SignInCredentials) => void;
  mensaje: string;
  email: string; */
}

export const HymnContext = createContext<HymnContextData>(
  {} as HymnContextData
);

const useHymns = () => useContext(HymnContext);

const HymnProvider = ({ children }: HymnProviderProps) => {
  // const history = useNavigate();
  // const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [hinario, setHinario] = useState([]);

  const hymnal = async () => {
    await api
      .get("/hymns")
      .then((response) => {
        console.log(response);
        setHinario(response.data);
      })
      .catch((error) => {
        setMensaje(error.response.data);
      });
  };

  useEffect(() => {
    hymnal();
  }, []);

  console.log(hinario);
  console.log(mensaje);

  return (
    <HymnContext.Provider value={{ hymnal }}>{children}</HymnContext.Provider>
  );
};

export { useHymns, HymnProvider };
