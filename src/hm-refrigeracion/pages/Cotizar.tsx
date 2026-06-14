import { useEffect } from "react";
import AOS from "aos";

import Header from "../components/Header";

import Footer from "../components/Footer";
import CotizarSection from "../components/cotizar/CotizarSection";

const Cotizar = () => {
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
          <CotizarSection />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cotizar;