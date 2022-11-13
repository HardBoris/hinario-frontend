import "./style.css";
import { InputHTMLAttributes } from "react";
import { useSearcher } from "../../context/SearcherContext";

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
  const { setSearcher } = useSearcher();
  return (
    <div className="searcher__form">
      <div className="searcher__label">{label}</div>
      <input
        className="searcher__input"
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => {
          setSearcher(e.target.value);
        }}
      />
    </div>
  );
};
