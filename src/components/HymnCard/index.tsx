// import { FaPlay } from "react-icons/fa";
import { Hino, useHymns } from "../../context/HymnContext";
import { ItemCard } from "./itemCard";
import "./style.css";
import hymnal from "../../assets/data/hymnal.json";

interface IHymnCardProps {
  setHino: (item: Hino) => void;
}

export const HymnCard = ({ setHino }: IHymnCardProps) => {
  const { mensaje, filteredHymns } = useHymns();

  return (
    <div className="aside__list">
      {filteredHymns.length === 0 ? (
        hymnal.length !== 0 ? (
          <ItemCard setHino={setHino} array={hymnal} />
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
