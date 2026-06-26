import './App.css'
import MascotaCard from '../components/MascotaCard'
import mascotas from '../components/mascotas'

function App() {
  const mascotasUrgentes = mascotas.filter((mascota) => mascota.adopcionUrgente).length

  return (
    <main className="app-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Refugio de mascotas</p>
          <h1>Da un hogar a quienes más lo necesitan.</h1>
          <p className="hero-text">
            Conoce a nuestros amigos rescatados y descubre quién puede convertirse en tu nueva compañia.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#mascotas">
              Ver mascotas disponibles
            </a>
            <a className="btn btn-secondary" href="#contacto">
              Adoptar ahora
            </a>
          </div>
          <ul className="highlight-list">
            <li>Adopciones responsables</li>
            <li>Animales vacunados</li>
            <li>Seguimiento post-adopción</li>
          </ul>
        </div>

        <div className="hero-panel" aria-label="Resumen del refugio">
          <div className="panel-card panel-card--primary">
            <span className="panel-label">Refugio</span>
            <strong>12 mascotas esperando</strong>
          </div>
          <div className="panel-card">
            <span className="panel-label">Proceso</span>
            <strong>Visita, conoce y adopta</strong>
          </div>
          <div className="panel-card">
            <span className="panel-label">Apoyo</span>
            <strong>Asesoría para tu nuevo amigo</strong>
          </div>
        </div>
      </section>

      <section id="mascotas" className="pets-section">
        <div className="section-heading">
          <p className="eyebrow">Mascotas disponibles</p>
          <h2>Ellos están listos para encontrar un hogar.</h2>
          <p className="urgent-counter">
            <span className="urgent-badge">⚠</span>
            {mascotasUrgentes} mascotas con etiqueta URGENTE
          </p>
        </div>

        <div className="pets-grid">
          {mascotas.map((mascota: (typeof mascotas)[number]) => (
            <MascotaCard key={mascota.id} {...mascota} />
          ))}
        </div>
      </section>

      <section id="contacto" className="cta-section">
        <h2>Tu próxima gran historia empieza con una adopción.</h2>
        <p>Visítanos, conoce a las mascotas y encuentra a tu compañero ideal.</p>
        <a className="btn btn-primary" href="mailto:adopta@refugio.com">
          Contactar refugio
        </a>
      </section>
    </main>
  )
}

export default App
