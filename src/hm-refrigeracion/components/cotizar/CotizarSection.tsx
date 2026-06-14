import React from "react";

const CotizarSection: React.FC = () => {
  return (
    <>
      <div id="container-module-bannerCotizar">
        <img
          src="images/vecteezy_industry-engineer-under-checking-the-industry-cooling-tower_6668318.jpg"
          alt="Banner Cotizar"
        />
      </div>

      <div id="container-footer_cotizar">
        <div className="center">
          <div className="row-formfooter_cotizar">

            <div className="date-footer_cotizar">
              <ul>
                <li>
                  <div className="icon_cotizar">
                    <img src="icons/location.svg" alt="Ubicación" />
                  </div>
                  <div className="text-icon_cotizar">
                    <h3>Ubicación</h3>
                    <p>Ciudadela Chalaca Mz. D Lt. 30, Callao</p>
                  </div>
                </li>

                <li>
                  <div className="icon_cotizar">
                    <img src="icons/mail.svg" alt="Email" />
                  </div>
                  <div className="text-icon_cotizar">
                    <h3>E-mail</h3>
                    <a href="mailto:gianfrancohilariogutierrez@gmail.com">
                      gianfrancohilariogutierrez@gmail.com
                    </a>
                  </div>
                </li>

                <li>
                  <div className="icon_cotizar">
                    <img src="icons/call.svg" alt="Teléfonos" />
                  </div>
                  <div className="text-icon_cotizar">
                    <h3>Teléfonos</h3>
                    <a href="tel:938420878">938420878 - 980596485</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="form-footer_cotizar">
              <h2>Asesoría Gratuita</h2>

              <div className="row-form_cotizar">
                <form className="cotizar-form">
                  <input type="text" name="Nombre" placeholder="Nombre" />
                  <input type="text" name="Apellido" placeholder="Apellido" />
                  <input type="tel" name="Celular" placeholder="Celular" />
                  <input type="email" name="Correo" placeholder="Correo" />

                  <textarea name="Mensaje" placeholder="Mensaje" />

                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CotizarSection;