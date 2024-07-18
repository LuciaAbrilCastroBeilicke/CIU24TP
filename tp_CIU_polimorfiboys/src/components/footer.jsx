import { useState } from 'react';
function Footer() {
  const [activeTab, setActiveTab] = useState('Footer');

  return (
    <>
    
    <div className='fixed-footer'>
     <h6>Tel: 4444-8888.  Horarios: 9hs a 18hs</h6>
     <h6>Integrantes: Alonso, Maximiliano. Balsamo, Martin. Bianchi, Juan Pablo. Castro Beilicke, Lucia</h6>
    </div>
    
    </>
  );
}

export default Footer;