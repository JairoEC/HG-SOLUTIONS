import { useEffect } from "react";
import AOS from "aos";

import Header from "../components/Header";

import Footer from "../components/Footer";
import ServicesSection from "../components/servicios/ServicesSection";

const Servicios = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Header />

      <main>
        <section>
          <ServicesSection />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Servicios;