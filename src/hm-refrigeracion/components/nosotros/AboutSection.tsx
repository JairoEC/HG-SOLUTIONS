const AboutSection = () => {
  return (
    <>
      <div id="container-module-us">
        <div style={{ margin: "0 auto" }}>
          <div className="about-card" data-aos="fade-up">
            <span className="subtitle">
              <span className="black">QUIÉNES</span> SOMOS
            </span>

            <h2>
              Soluciones integrales en{" "}
              <span className="blue">refrigeración</span> y{" "}
              <span className="blue">climatización</span>
            </h2>

            <p>
              En <strong>HG SAC</strong> brindamos soluciones especializadas en
              refrigeración, aire acondicionado y servicios generales,
              combinando tecnología, eficiencia energética y personal altamente
              capacitado para garantizar resultados confiables y sostenibles.
            </p>
          </div>
        </div>
      </div>

      <div id="container-module-percentage">
        <div className="row-percentage">
          <div className="column-text-percentage">
            <div className="content" data-aos="fade-up">
              <img
                className="service-icon"
                src="icons/star.svg"
                alt="icono estrella"
              />
              <h1 className="title-services-porcentage">
                NUESTRO COMPROMISO CONTIGO
              </h1>
            </div>

            <div className="services-grid">
              {[
                "Servicio de Alta Calidad",
                "Eficiencia Energética",
                "Innovación Tecnológica",
                "Atención Rápida y Eficiente",
                "Personal Capacitado",
                "Compromiso Ambiental",
              ].map((title, index) => (
                <div
                  className="service-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <img
                    className="service-icon"
                    src="icons/star.svg"
                    alt="icono estrella"
                  />
                  <h3 className="service-title">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="container-module-siteBlocks">
        <div className="center">
          <div className="row-siteBlocks">
            <div className="content" data-aos="fade-right">
              <h2>
                ¿Por qué las <strong>empresas más importantes</strong> trabajan
                con nosotros?
              </h2>

              <p>
                Ofrecemos soluciones integrales de{" "}
                <strong>climatización y refrigeración</strong> para proyectos
                residenciales, comerciales e industriales. Nuestro equipo
                combina experiencia técnica,{" "}
                <strong>tecnología de vanguardia</strong> y atención
                personalizada para garantizar eficiencia, confiabilidad y la
                satisfacción de nuestros clientes en cada proyecto.
              </p>
            </div>

            <ul className="blocks" data-aos="fade-left" data-aos-delay="200">
              {[
                {
                  icon: "icons/engineering_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
                  title: "Personal Especializado",
                },
                {
                  icon: "icons/network_intelligence_update_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
                  title: "Tecnología de Vanguardia",
                },
                {
                  icon: "icons/battery_plus_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
                  title: "Eficiencia Energética",
                },
                {
                  icon: "icons/support_agent_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
                  title: "Atención Personalizada",
                },
                {
                  icon: "icons/handyman_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
                  title: "Soporte Técnico",
                },
                {
                  icon: "icons/energy_savings_leaf_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
                  title: "Compromiso Ambiental",
                },
              ].map((item, index) => (
                <li key={index}>
                  <div className="image">
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <h2>{item.title}</h2>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;