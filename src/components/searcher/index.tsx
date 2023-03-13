import "./style.css";
import { InputHTMLAttributes, useEffect, useState } from "react";
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

  useEffect(() => {
    filtered(search);
  }, [search]);

  return (
    <div className="searcher__form">
      <div className="searcher__label">
        <p>Procura um Hino?</p>
      </div>
      <div className="searcher__box">
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
        {search ? (
          <button className="searcher__x" onClick={() => setSearch("")}>
            X
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
