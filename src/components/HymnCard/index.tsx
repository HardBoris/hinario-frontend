import { Hino, useHymns } from "../../context/HymnContext";

interface IHymnCardProps {
  setPrueba: (item: Hino) => void;
}

export const HymnCard = ({ setPrueba }: IHymnCardProps) => {
  const { hinario, mensaje, filteredHymns } = useHymns();

  return (
    <div className="aside__list">
      {filteredHymns.length === 0 ? (
        hinario.length !== 0 ? (
          hinario.map((item) => (
            <div
              key={item.hymnId}
              role="button"
              onClick={() => setPrueba(item)}
              style={{ cursor: "pointer" }}
            >
              <p>
                <span>{item.hymnNumber} - </span>
                {item.hymnTitle}
              </p>
            </div>
          ))
        ) : (
          <div className="aside__msg">
            <p>{mensaje}</p>
          </div>
        )
      ) : (
        filteredHymns.map((item) => (
          <div
            key={item.hymnId}
            role="button"
            onClick={() => setPrueba(item)}
            style={{ cursor: "pointer" }}
          >
            <p>
              <span>{item.hymnNumber} - </span>
              {item.hymnTitle}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
