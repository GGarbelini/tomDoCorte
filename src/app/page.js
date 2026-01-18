import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
