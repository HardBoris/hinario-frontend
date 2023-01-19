import { Hino } from "../../context/HymnContext";

interface ICardProps {
  setHino: (item: Hino) => void;
  array: Hino[];
}
export const ItemCard = ({ setHino, array }: ICardProps) => {
  return (
    <>
      {array.map((item: Hino) => (
        <div
          className="list__item"
          key={item.hymnId}
          role="button"
          onClick={() => setHino(item)}
          style={{ cursor: "pointer" }}
        >
          <div className="item__title">
            <p>
              <span>{item.hymnNumber} - </span>
              {item.hymnTitle}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
