import { createBrowserRouter } from "react-router-dom";

import Home from "./hm-refrigeracion/pages/Home";
import Nosotros from "./hm-refrigeracion/pages/Nosotros";
import Servicios from "./hm-refrigeracion/pages/Servicios";
import Cotizar from "./hm-refrigeracion/pages/Cotizar";
import ServiciosDetalle from "./hm-refrigeracion/pages/ServiciosDetalle";
import RootLayout from "./hm-refrigeracion/components/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/nosotros",
        element: <Nosotros />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
      },
      {
        path: "/cotizar",
        element: <Cotizar />,
      },
      {
        path: "/servicios-detalle/:slug",
        element: <ServiciosDetalle />,
      },
    ],
  },
]);