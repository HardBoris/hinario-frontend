import "./style.css";
import { InputHTMLAttributes, useState } from "react";
import { useSearcher } from "../../context/SearcherContext";
import { useHymns } from "../../context/HymnContext";

interface SearcherProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  name: string;
  label?: string;
}

export const Searcher = ({
  label,
  placeholder,
  name,
  value,
}: SearcherProps) => {
  const { filtered } = useHymns();
  const [search, setSearch] = useState("");
  return (
    <div className="searcher__form">
      <div className="searcher__label">Procura um Hino?</div>
      <input
        className="searcher__input"
        type="text"
        placeholder="Digite Número ou Título do Hino"
        name="hymn_searcher"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={() => filtered(search)}>Buscar</button>
    </div>
  );
};
