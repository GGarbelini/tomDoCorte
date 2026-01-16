import "./Services.css";

export default function Services() {
  return (
    <section id="services" service className="services">
      <h2>Serviços</h2>

      <div className="services-list">
        <div className="service-card">
          <h3>Corte Masculino</h3>
          <p>Clássico ou moderno, feito com precisão.</p>
        </div>

        <div className="service-card">
          <h3>Barba</h3>
          <p>Modelagem e acabamento profissional.</p>
        </div>

        <div className="service-card">
          <h3>Corte + Barba</h3>
          <p>Pacote completo para seu visual.</p>
        </div>
      </div>
    </section>
  );
}
