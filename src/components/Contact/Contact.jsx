import Image from "next/image";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">

        {/* LADO ESQUERDO — MAPA */}
        <div className="contact-map">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Avenida+de+França+971+Vila+Nova+de+Famalicão+Portugal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/mapa-tom-do-corte.png"
              alt="Localização da Barbearia Tom do Corte"
              width={900}
              height={600}
              className="map-image"
            />
          </a>

          <span className="map-hint">
            Clique no mapa para abrir a rota no Google Maps
          </span>

          
        </div>

        {/* LADO DIREITO — TEXTO + CTA */}
        <div className="contact-info">
          <h2>Agende seu Horário</h2>

          <p>
            Transforme seu visual com um corte personalizado.
            Agende agora e experimente o melhor serviço de barbearia da cidade.
          </p>

          <a
            href="https://www.fresha.com/pt/a/tom-do-corte-barber-shop-vila-nova-de-famalicao-avenida-de-franca-971-n7xi86pz/booking?menu=true&pId=1312817&cartId=f5a20e12-8c43-4f4e-9ef1-c8f336045fca"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Agendar Agora
          </a>
        </div>

      </div>
    </section>
  );
}
