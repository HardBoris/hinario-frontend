import "./style.css";
export interface IHymnDisplay {
  numero: string;
  titulo: string;
  id: string;
}

export const HymnDisplay = ({ numero, titulo, id }: IHymnDisplay) => {
  return (
    <div className="hymn__card">
      <div className="hymn__title">
        <h1>
          <span>{numero} - </span>
          {titulo}
        </h1>
      </div>
      <div className="hymn__display">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
