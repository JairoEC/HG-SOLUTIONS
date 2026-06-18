import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "../../data/data";

type MenuItem = {
  path: string;
  label: string;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const renderMenu = (isMobile = false) =>
    menuItems.map((item: MenuItem) => (
      <li key={item.path}>
        <Link
          to={item.path}
          onClick={isMobile ? closeMenu : undefined}
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header>
      {/* HEADER PRINCIPAL */}
      <div id="container-module-header">
        <div className="center">
          <div className="row-header">

            {/* LOGO */}
            <div className="column-logo">
              <Link to="/">
                <img
                  src="/images/logo-principal.png"
                  alt="HM Solutions"
                />
              </Link>
            </div>

            {/* MENU DESKTOP */}
            <div className="column-menu">
              <div className="menu-menu-container">
                <ul className="menu">
                  {renderMenu()}
                </ul>
              </div>
            </div>

            {/* HAMBURGER */}
            <div
              className={`menu-mobile ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        id="container-mobile"
        className={menuOpen ? "active" : ""}
      >
        <div className="center">

          <div className="row-menu-mobile">

            <div className="column-menu-mobile">
              <div className="menu-menu-container">
                <ul className="menu">
                  {renderMenu(true)}
                </ul>
              </div>
            </div>

            <div className="column-date-mobile">
              <a href="tel:938420878"></a>

              <a
                href="https://api.whatsapp.com/send?phone=51938420878"
                target="_blank"
                rel="noreferrer"
              >
                938420878
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* HEADER STICKY */}
      <div id="container-module-sticky">
        <div className="center">
          <div className="row-header">

            <div className="column-logo">
              <Link to="/">
                <img
                  src="/images/logo-principal.png"
                  alt="HM Solutions"
                />
              </Link>
            </div>

            <div className="column-menu">
              <div className="menu-menu-container">
                <ul className="menu">
                  {renderMenu()}
                </ul>
              </div>
            </div>

            <div
              className={`menu-mobile ${menuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;