export interface IHymnDisplay {
  numero: string;
  titulo: string;
  id: string;
}

export const HymnDisplay = ({ numero, titulo, id }: IHymnDisplay) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1>
          <span>{numero} - </span>
          {titulo}
        </h1>
      </div>
      <div>
        <iframe
          width="320"
          height="180"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
