import { useEffect } from "react";
import AOS from "aos";

import Header from "../components/Header";

import Footer from "../components/Footer";
import BannerInternal from "../components/nosotros/BannerInternal";
import AboutSection from "../components/nosotros/AboutSection";

const Nosotros = () => {
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
          <BannerInternal />
          <AboutSection />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Nosotros;