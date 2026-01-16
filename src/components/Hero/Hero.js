import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Tom do Corte</h2>
        <p>Barbearia clássica com estilo moderno</p>

        <a
          href="https://www.fresha.com/pt/a/tom-do-corte-barber-shop-vila-nova-de-famalicao-avenida-de-franca-971-n7xi86pz/booking?menu=true&pId=1312817&cartId=f5a20e12-8c43-4f4e-9ef1-c8f336045fca&fbclid=PAT01DUANOckBleHRuA2FlbQIxMAABpx7OHKU0QCWdOFXI47V029vvvgrwQbASyqGMQDYg1KHvl8_luPKBTD3xgMJp_aem_Xr2AQNy4b3taqblLLlP-AQ"
          target="_blank"
          className="hero-button"
        >
          Agendar Horário
        </a>
      </div>
    </section>
  );
}
