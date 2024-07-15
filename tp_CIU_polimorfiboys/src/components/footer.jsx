import { useState } from 'react';
function Footer() {
  const [activeTab, setActiveTab] = useState('Footer');

  return (
    <>
    
    <div className='fixed-footer'>
    <h3>Direccion</h3>
     <h3>Telefono</h3>
     <h3>Horarios</h3>

     <h5>Integrantes: Alonso, Maxi. Balsamo, Martin. Biachi, Juan Pablo. Castro Beilicke, Lucia</h5>
    </div>
    
    </>
  );
}

export default Footer;