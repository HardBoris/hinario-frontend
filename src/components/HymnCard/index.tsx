// import { FaPlay } from "react-icons/fa";
import { Hino, useHymns } from "../../context/HymnContext";
import { ItemCard } from "./itemCard";
import "./style.css";

interface IHymnCardProps {
  setHino: (item: Hino) => void;
}

export const HymnCard = ({ setHino }: IHymnCardProps) => {
  const { hinario, mensaje, filteredHymns } = useHymns();

  return (
    <div className="aside__list">
      {filteredHymns.length === 0 ? (
        hinario.length !== 0 ? (
          <ItemCard setHino={setHino} array={hinario} />
        ) : (
          <div className="aside__msg">
            <p>{mensaje}</p>
          </div>
        )
      ) : (
        <ItemCard setHino={setHino} array={filteredHymns} />
      )}
    </div>
  );
};
