import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// import { localApi as api } from "../services/api";
import { api } from "../services/api";
// import { useAuth } from "../context/UserContext";

interface HymnProviderProps {
  children: ReactNode;
}

export interface Hino {
  hymnId: string;
  hymnNumber: string;
  hymnTitle: string;
}

interface HymnContextData {
  hinario: Hino[];
  filteredHymns: Hino[];
  mensaje: string;
  filtered: (option: string) => void;
  hymnal: () => void;
}

export const HymnContext = createContext<HymnContextData>(
  {} as HymnContextData
);

const useHymns = () => useContext(HymnContext);

const HymnProvider = ({ children }: HymnProviderProps) => {
  const [filteredHymns, setFilteredHymns] = useState<Hino[]>([]);
  const [mensaje, setMensaje] = useState("");
  const [hinario, setHinario] = useState<Hino[]>([]);
  // const { token } = useAuth();

  const hymnal = () => {
    api
      .get("/hymns", {
        /* headers: {
          authorization: `Bearer ${token}`,
        }, */
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

  useEffect(() => {
    hymnal();
  }, []);

  const filtered = (option: string) => {
    const filtro: Hino[] = hinario.filter(
      (item) =>
        item.hymnNumber.toLowerCase().includes(option.toLowerCase()) ||
        item.hymnTitle.toLowerCase().includes(option.toLowerCase())
    );
    setFilteredHymns(filtro);
  };

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
