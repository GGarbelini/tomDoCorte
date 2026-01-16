import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";


export default function Home() {
  return (
    <>
      <Header />
      <Hero id="hero" />
      <Services id="services" />
      <Gallery id="gallery" />      
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
