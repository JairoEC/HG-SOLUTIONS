import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const BannerHome = () => {
  const slides = [
    {
      img: "/images/vecteezy_high-quality-air-conditioning-units-lined-up-modern_69689536.jpg",
      alt: "Instalación de Aire Acondicionado",
      span: "Especialistas en",
      title: "Instalación de Aire Acondicionado",
      text: "Climatización industrial eficiente para empresas.",
    },
    {
      img: "/images/vecteezy_technician-are-checking-outdoor-air-conditioner_1226758.jpg",
      alt: "Mantenimiento de Aire Industrial",
      span: "Expertos en",
      title: "Mantenimiento de Aire Industrial",
      text: "Mantenimiento industrial que maximiza rendimiento.",
    },
    {
      img: "/images/vecteezy_technician-is-installing-air-conditioner-during-hot-season_9340612.jpg",
      alt: "Correctivo de Aire Acondicionado Convencional",
      span: "Especialistas en",
      title: "Correctivo de Aire Acondicionado Convencional",
      text: "Nos encargamos de la comodidad de tu hogar.",
    },
    {
      img: "/images/sistemas-de-aire-acondicionado-de-precisic3b3n.jpg",
      alt: "Aire Acondicionado de Precisión",
      span: "Especialistas en",
      title: "Aire Acondicionado de Precisión",
      text: "Aire acondicionado de precisión, máxima eficiencia garantizada.",
    },
  ];

  return (
    <div id="container-module-banner">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="slick-banner"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="row-banner">
              <img src={slide.img} alt={slide.alt} />

              <div className="content-banner">
                <div className="headline">
                  <span>{slide.span}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>

                  <div className="btn-banner">
                    <Link to="/servicios">Ver más</Link>

                    <a
                      href="https://api.whatsapp.com/send?phone=51938420878"
                      target="_blank"
                      rel="noreferrer"
                    >
                      COTIZAR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        className="hero__wave"
        src="/images/curved-image.png"
        alt=""
        aria-hidden="true"
      />
    </div>
  );
};

export default BannerHome;