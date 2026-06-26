// src/components/MascotaCard.jsx

// Colores y etiquetas por especie
const ESPECIE_CONFIG = {
  Perro: { clase: "card--perro", etiqueta: "🐶 Perro" },
  Gato: { clase: "card--gato", etiqueta: "🐱 Gato" },
  Otro: { clase: "card--otro", etiqueta: "🐾 Otro" },
};

function MascotaCard({
  nombre,
  raza,
  edad,
  especie,
  descripcion,
  caracteristicas,
  adopcionUrgente,
}) {
  const config = ESPECIE_CONFIG[especie] ?? ESPECIE_CONFIG["Otro"];

  return (
    <article className={`mascota-card ${config.clase}`}>
      {/* Etiqueta URGENTE — solo se renderiza si adopcionUrgente es true */}
      {adopcionUrgente && (
        <span className="badge badge--urgente">⚠ URGENTE</span>
      )}

      <header className="card-header">
        <span className="especie-tag">{config.etiqueta}</span>
        <h2 className="card-nombre">{nombre}</h2>
        <p className="card-raza">
          {raza} · {edad} {edad === 1 ? "año" : "años"}
        </p>
      </header>

      <p className="card-descripcion">{descripcion}</p>

      <ul className="card-caracteristicas">
        {caracteristicas.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </article>
  );
}

export default MascotaCard;
