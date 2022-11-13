import { createContext, ReactNode, useContext, useState } from "react";

interface SearcherProviderProps {
  children: ReactNode;
}

interface SearcherContextData {
  searcher: string;
  setSearcher: any;
}

export const SearcherContext = createContext<SearcherContextData>(
  {} as SearcherContextData
);
const useSearcher = () => useContext(SearcherContext);
const SearcherProvider = ({ children }: SearcherProviderProps) => {
  const [searcher, setSearcher] = useState("");
  /* const myFunction = () => {
    setSearcher("Buscando");
  }; */
  return (
    <SearcherContext.Provider value={{ searcher, setSearcher }}>
      {children}
    </SearcherContext.Provider>
  );
};

export { useSearcher, SearcherProvider };
