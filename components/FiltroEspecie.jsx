// src/components/FiltroEspecie.jsx
import PropTypes from "prop-types";

const ESPECIES = ["Todas", "Perro", "Gato", "Otro"];
const MAX_BUSQUEDA = 50; // límite de caracteres para la búsqueda

function FiltroEspecie({ filtroEspecie, onFiltroChange, busqueda, onBusquedaChange }) {

  function handleBusqueda(e) {
    // Validación y normalización: recorta espacios y limita el largo
    // No se confía ciegamente en la entrada del usuario
    const valor = e.target.value.trimStart().slice(0, MAX_BUSQUEDA);
    onBusquedaChange(valor);
  }

  return (
    <div className="filtro-container">
      {/* Campo de búsqueda controlado — el valor vive en el estado de App */}
      <input
        type="text"
        className="filtro-busqueda"
        placeholder="Buscar por nombre…"
        value={busqueda}
        onChange={handleBusqueda}
        maxLength={MAX_BUSQUEDA}
        aria-label="Buscar mascota por nombre"
      />

      {/* Botones de filtro por especie */}
      <div className="filtro-botones" role="group" aria-label="Filtrar por especie">
        {ESPECIES.map((especie) => (
          <button
            key={especie}
            className={`filtro-btn ${filtroEspecie === especie ? "filtro-btn--activo" : ""}`}
            onClick={() => onFiltroChange(especie)}
            aria-pressed={filtroEspecie === especie}
          >
            {especie}
          </button>
        ))}
      </div>
    </div>
  );
}

FiltroEspecie.propTypes = {
  filtroEspecie: PropTypes.string.isRequired,
  onFiltroChange: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  onBusquedaChange: PropTypes.func.isRequired,
};

export default FiltroEspecie;
