import { useState } from "react";
import Inicio from "./inicio"
function Header() {
  const [activeTab, setActiveTab] = useState("Inicio");

  return (
    <>
      <ul className="nav nav-tabs fixed-header">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Inicio" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("Inicio")}
          >
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Menu" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("Menu")}
          >
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "Sucursales" ? "active" : ""}`}
            href="#"
            onClick={() => setActiveTab("Sucursales")}
          >
            Sucursales
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Contacto
          </a>
        </li>
      </ul>
      {activeTab === "Inicio" && <Inicio setActiveTab={setActiveTab} />}
      {activeTab === "Menu" && <Menu setActiveTab={setActiveTab} />}
      {activeTab === "Sucursales" && <Sucursales setActiveTab={setActiveTab} />}
    </>
  );
}

export default Header;
