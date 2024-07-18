import { useState } from "react";

function Header({ activeTab, setActiveTab }) {
  return (
    <div className="fixed-header">
      <div className="header-content">
        <ul className="nav nav-tabs">
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
              className={`nav-link ${activeTab === "Galeria" ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab("Galeria")}
            >
              Galeria
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
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
