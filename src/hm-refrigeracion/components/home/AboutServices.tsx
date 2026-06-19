const AboutServices = () => {
  const services = [
    {
      img: "/images/close-up-heat-pump-outside-home (3).jpeg",
      title: "Equipos de aire acondicionado VRF",
      delay: 0,
      id: "item-1",
    },
    {
      img: "/images/full-shot-couple-dog-home.jpeg",
      title: "Equipos de aire acondicionado convencional",
      delay: 100,
      id: "item-2",
    },
    {
      img: "/images/close-up-heat-pump-outside-home.jpeg",
      title: "Equipos de aire acondicionado de precisión",
      delay: 200,
      id: "item-3",
    },
    {
      img: "/images/chiller.jpg",
      title: "Equipos de aire acondicionado Chiller",
      delay: 300,
      id: "item-4",
    },
    {
      img: "/images/industrial_refrigeration.jpg",
      title: "Equipos de refrigeración industrial",
      delay: 400,
      id: "item-5",
    },
  ];

  return (
    <>
      <div id="container-module-aboutUs">
        <div className="center">
          <div className="row-aboutUs">
            <div
              className="column-image-aboutUs"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src="/images/engineer-arriving-location-help-apprentice-mend-busted-electric-coils-damaged-external-air-conditioner-technicians-comissioned-prevent-internal-parts-breakdowns-ensuring-timely-repair.jpeg" alt="Nosotros" />
            </div>

            <div
              className="column-content-about"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <span>SOBRE NOSOTROS</span>

              <h2>HG SAC - Refrigeración y Multiservicios</h2>

              <p>
                Somos una empresa especializada en soluciones de refrigeración,
                aire acondicionado y servicios generales, enfocada en brindar
                servicios de alta calidad que se adapten a las necesidades de
                cada cliente.
                <br />
                <br />
                Trabajamos con tecnología moderna y un equipo de profesionales
                capacitados para garantizar eficiencia, confort y un óptimo
                desempeño en cada proyecto. Nuestro compromiso con la innovación,
                la mejora continua y la satisfacción del cliente nos permite
                ofrecer soluciones confiables para los sectores residencial,
                comercial e industrial.
              </p>

              <div className="btn-aboutUs">
                <a
                  href="https://api.whatsapp.com/send?phone=51980596485&text=Hola+estoy+interesado+en+sus+servicios+de+refrigeracion+.+Me+da+mas+informacion+por+favor"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contáctenos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contenedor-five-circles">
        <div className="line-down">
          <div className="nuestros" data-aos="fade-up">
            <h2>NUESTROS</h2>
            <h1>SERVICIOS</h1>
          </div>

          <section className="linea">
            <img
              src="/images/line-background.png"
              className="fondo-img"
              alt=""
            />

            <div className="content-circles">
              <div className="line-items-five">
                {services.map((item) => (
                  <div
                    className="timeline-item-five"
                    id={item.id}
                    data-aos="zoom-in"
                    data-aos-delay={item.delay}
                    key={item.id}
                  >
                    <div className="five-circle">
                      <img src={item.img} alt={item.title} />
                    </div>

                    <div className="timeline-title-v">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutServices;