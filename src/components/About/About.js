import "./About.css";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image-container">
                    <div className="about-image">
                        <img src="images/barber.jpeg" alt="Tom do Corte - Sobre mim" />
                    </div>
                    <div className="about-information">
                        
                            <div className="about-experience">
                                <h5>6+</h5>
                                <p>Anos de experiência</p>

                            </div>
                            <div></div>
                        
                        
                            <div className="about-clients">
                                <h5>Mais de 500</h5>
                                <p>Clientes Satisfeitos</p>

                            </div>
                           
                        
                    </div>
                </div>

                <div className="about-text">
                    <h2>Sobre Mim</h2>
                    <h3> Tom do Corte</h3>
                    <h4>Transformando estilos, criando confiança</h4>

                    <p>
                        Olá! Sou o profissional por trás do Tom do Corte. Com mais de uma década de experiência, desenvolvi uma paixão por transformar não apenas o visual, mas também a confiança dos meus clientes.
                    </p>

                    <p>
                        Minha jornada começou com um simples amor pela arte da barbearia, que evoluiu para um compromisso com a excelência e a inovação. Cada corte que faço é uma oportunidade de criar algo único que reflita a personalidade e o estilo de cada cliente.
                    </p>

                    <p>
                        Trabalhar com as melhores técnicas e produtos do mercado, combinando métodos tradicionais com tendências contemporâneas para oferecer resultados exclusivos.
                    </p>

                    <p>Venha conhecer e transformar seu visual!</p>

                    <h5>Tom do Corte</h5>
                </div>
            </div>
        </section>
    );
}
