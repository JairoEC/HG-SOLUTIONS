import { useEffect } from "react";
import AOS from "aos";

import Header from "../components/Header";

import Footer from "../components/Footer";
import ContactQuote from "../components/home/ContactQuote";

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
          <div id="container-module-bannerCotizar">
            <img
              src="images/worker-works-air-conditioner.jpeg"
              alt="Banner Cotizar"
            />
          </div>
          <ContactQuote />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cotizar;