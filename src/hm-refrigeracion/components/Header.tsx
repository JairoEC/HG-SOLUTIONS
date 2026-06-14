import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMenu = (closeMenu = false) =>
    menuItems.map((item) => (
      <li key={item.path}>
        <Link
          to={item.path}
          onClick={
            closeMenu
              ? () => setMenuOpen(false)
              : undefined
          }
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <header>
      {/* Header Principal */}
      <div id="container-module-header">
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
              className="menu-mobile"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>
      </div>

      {/* Menú Mobile */}
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
              <a href="tel:938420878">
                938420878
              </a>

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

      {/* Header Sticky */}
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
              className="menu-mobile"
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