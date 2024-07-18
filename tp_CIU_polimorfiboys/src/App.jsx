import { useState } from "react";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Menu from "./components/menu";
import Sucursales from "./components/sucursales";
import Footer from "./components/footer";
import Galeria from "./components/galeria";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Inicio");

  return (
    <>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">
        {activeTab === "Inicio" && <Inicio setActiveTab={setActiveTab} />}
        {activeTab === "Menu" && <Menu setActiveTab={setActiveTab} />}
        {activeTab === "Galeria" && <Galeria setActiveTab={setActiveTab} />}
        {activeTab === "Sucursales" && <Sucursales setActiveTab={setActiveTab} />}
      </div>
      <Footer />
    </>
  );
}

export default App;
