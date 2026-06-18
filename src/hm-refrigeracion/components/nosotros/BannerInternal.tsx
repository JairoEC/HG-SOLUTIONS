const BannerInternal = () => {
  return (
    <div id="container-module-bannerInternal">
      <img
        src="images/worker-works-air-conditioner.jpeg"
        alt="Banner interno"
      />

      <div className="content-bannerInternal" data-aos="fade-up">
        <h2>Sobre</h2>
        <h3>Nosotros</h3>

        <h2>
          En <strong>HG SAC</strong> somos especialistas en refrigeración y climatización.
          Desarrollamos proyectos de instalación, mantenimiento y optimización de sistemas
          de aire acondicionado y refrigeración, garantizando eficiencia energética,
          confort y soluciones adaptadas a las necesidades de cada cliente.
        </h2>

        <div className="btn-bannerInternal">
            {/* <a href="#">Nuestro brochure</a> */}
        </div>
      </div>
    </div>
  );
};

export default BannerInternal;