import { createContext, ReactNode, useContext, useState } from "react";
// import { useNavigate, redirect } from "react-router-dom";

import { localApi as api } from "../services/api";
import { useAuth } from "../context/UserContext";

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

export interface Hino {
  hymnId: string;
  hymnNumber: string;
  hymnTitle: string;
}

interface HymnContextData {
  hinario: Hino[];
  filteredHymns: Hino[];
  mensaje: string;
  filtered: (otion: string) => void;
  hymnal: () => void;
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
  // const [hino, setHino] = useState<Hino>({} as Hino)
  const [filteredHymns, setFilteredHymns] = useState<Hino[]>([]);
  const [mensaje, setMensaje] = useState("");
  const [hinario, setHinario] = useState<Hino[]>([]);
  const { token } = useAuth();

  const hymnal = () => {
    api
      .get("/hymns", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHinario(response.data);
        setMensaje("");
      })
      .catch((error) => {
        let message = error.response.data.error.message;
        setMensaje(message);
        setHinario([]);
      });
  };

  /* useEffect(() => {
    hymnal();
  }, []); */

  const filtered = (option: string) => {
    const filtro: Hino[] = hinario.filter(
      (item) =>
        /* item.hymnNumber.toLowerCase() === option.toLowerCase() ||
        item.hymnTitle.toLowerCase() === option.toLowerCase() */
        item.hymnNumber.toLowerCase().includes(option.toLowerCase()) ||
        item.hymnTitle.toLowerCase().includes(option.toLowerCase())
    );
    setFilteredHymns(filtro);
  };

  console.log(hinario);
  console.log(mensaje);

  return (
    <HymnContext.Provider
      value={{ hinario, mensaje, filteredHymns, filtered, hymnal }}
    >
      {children}
    </HymnContext.Provider>
  );
};

export { useHymns, HymnProvider };
