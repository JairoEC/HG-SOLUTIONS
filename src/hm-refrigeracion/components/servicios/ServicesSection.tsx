const ServicesSection = () => {
  const services = [
    {
      title: "Agua Contra Incendios",
      alt: "Agua Contra Incendios",
      img: "",
      link: "#",
    },
    {
      title: "Sistemas de detección y alarmas contra incendios",
      alt: "Sistemas de detección y alarmas contra incendios",
      img: "",
      link: "#",
    },
    {
      title: "Diseño, Ingeniería y Supervisión de Proyectos",
      alt: "Diseño, Ingeniería y Supervisión de Proyectos",
      img: "",
      link: "#",
    },
    {
      title: "Mantenimiento Integral de Sistemas contra Incendios",
      alt: "Mantenimiento Integral de Sistemas contra Incendios",
      img: "",
      link: "#",
    },
    {
      title: "Sistema de incendio para Data Center",
      alt: "Sistema de incendio para Data Center",
      img: "",
      link: "#",
    },
  ];

  return (
    <div id="container-module-services">
      <div className="center">
        <div className="row-services">
          <div className="title-services">
            <span>Nuestros</span>
            <h1>Servicios</h1>
          </div>

          {/* SERVICES GRID */}
          <div className="groups-services">
            {services.map((service, index) => (
              <div className="column-services" key={index}>
                <a href={service.link}>
                  <img src={service.img} alt={service.alt} />

                  <div className="content-text">
                    <h2>{service.title}</h2>
                    <span>VER MÁS</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;