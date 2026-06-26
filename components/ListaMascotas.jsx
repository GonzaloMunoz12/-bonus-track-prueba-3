// src/components/ListaMascotas.jsx
import PropTypes from "prop-types";
import MascotaCard from "./MascotaCard";

function ListaMascotas({ mascotas }) {
  // Renderizado condicional: mensaje cuando no hay resultados
  if (mascotas.length === 0) {
    return (
      <p className="lista-vacia">
        No hay mascotas que coincidan con tu búsqueda.
      </p>
    );
  }

  return (
    <section className="lista-mascotas">
      {mascotas.map((mascota) => (
        // key usa el id único del objeto, nunca el índice del array
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
          adopcionUrgente={mascota.adopcionUrgente}
        />
      ))}
    </section>
  );
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      raza: PropTypes.string.isRequired,
      edad: PropTypes.number.isRequired,
      especie: PropTypes.oneOf(["Perro", "Gato", "Otro"]).isRequired,
      descripcion: PropTypes.string.isRequired,
      caracteristicas: PropTypes.arrayOf(PropTypes.string).isRequired,
      adopcionUrgente: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ListaMascotas;
