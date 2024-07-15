import React, { useState } from 'react';
  
const Sucursales = (setActiveTab) => {

  return (
    <div>
      <h1>Sucursales</h1>
      <button onClick={() => setActiveTab('Inicio')}>Volver a Inicio</button>
    </div>
  );
};


export default Sucursales;