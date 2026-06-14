import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ExperienceClients = () => {
  const clients = [
    { img: "/images/comexperu-logo.png", alt: "Comex Perú" },
    { img: "/images/poderjudicial-logo.png", alt: "Poder Judicial" },
    { img: "/images/implementos-logo.webp", alt: "Implementos" },
    { img: "/images/hospitalsjl.jpg", alt: "Hospital SJL" },
    { img: "/images/securesoft-logo.png", alt: "Securesoft" },
    { img: "/images/gtd-logo.png", alt: "GTD" },
  ];

  return (
    <>
      <div id="container-module-area">
        <div className="center">
          <div className="row-area">
            <div className="about-images" data-aos="fade-right">
              <div className="blue-card"></div>

              <div className="image image-1">
                <img src="/images/bloque-image-iz.jpg" alt="Equipo 1" />
              </div>

              <div className="image image-2">
                <img src="/images/bloque-image-derecho.jpg" alt="Equipo 2" />
              </div>
            </div>

            <div
              className="column-rigth-area"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2 className="blue">EXPERIENCIA</h2>

              <p>
                En <strong>HG SAC</strong> contamos con experiencia en proyectos
                de refrigeración, aire acondicionado y servicios generales,
                brindando soluciones para los sectores residencial, comercial e
                industrial. Nuestro equipo técnico trabaja con tecnología moderna
                y altos estándares de calidad para garantizar eficiencia,
                confiabilidad y satisfacción en cada proyecto.
              </p>

              <div
                className="box-area"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h2>Llegamos a todo el Perú</h2>

                <p>
                  Atendemos proyectos en todo el Perú, brindando servicios de
                  instalación, mantenimiento y climatización con soluciones
                  eficientes adaptadas a las necesidades de cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="container-module-clients">
        <div className="center">
          <div className="row-clients">
            <div className="btn-clients" data-aos="fade-up">
              <h2>NUESTROS CLIENTES FRECUENTES</h2>
            </div>

            <div
              className="groups-clients"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row-carousel-ia carruselright">
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={5}
                  spaceBetween={30}
                  loop
                  speed={3500}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                  }}
                  className="slick-right"
                >
                  {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                      <div className="column-ia">
                        <img src={client.img} alt={client.alt} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container-mision">
        <div className="tag-bloque-2">
          <div className="mision" data-aos="fade-right">
            <h1>VISIÓN</h1>
            <p className="vision-p">
              Conectar personas y empresas de manera eficiente, facilitando
              proyectos, servicios y oportunidades laborales que impulsen la
              colaboración, la innovación y el crecimiento.
            </p>
          </div>

          <div
            className="vision"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <h1>MISIÓN</h1>
            <p className="mision-p">
              Ser la plataforma que conecta empresas, personas y talento,
              impulsando oportunidades, innovación y crecimiento en un entorno
              dinámico y accesible para todos.
            </p>
          </div>
        </div>

        <div
          className="tag-bloque-imagenes"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src="/images/image-about-two.png"
            className="img-mapa"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default ExperienceClients;