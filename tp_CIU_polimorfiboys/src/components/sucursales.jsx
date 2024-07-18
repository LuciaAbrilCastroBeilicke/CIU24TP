import React, { useState } from 'react';
  
const Sucursales = (setActiveTab) => {

  return (
    <div>
      <h3 className="center-titles margin-botton">Conocé nuestras sucursales</h3>
      <div className="center-titles margin-botton">
        <h6>Belgrano</h6><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5765808629503!2d-58.4601232!3d-34.5642746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d434b13903%3A0x640d32219bb14f96!2sAv.%20Juramento%202800%2C%20C1428DNV%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721092532160!5m2!1ses!2sar" width="400" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="center-titles margin-botton">
        <h6>Palermo</h6><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9745899462278!2d-58.415345099999996!3d-34.5795095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5785bec9691%3A0xb02036d29191176e!2sRep%C3%BAblica%20de%20la%20India%202895%2C%20C1425FCC%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721092552793!5m2!1ses!2sar" width="400" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="center-titles margin-botton">      
          <h6>Recoleta</h6><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.485635617104!2d-58.400031!3d-34.5918794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99f67df0c7%3A0x5e569cc51275298d!2sJuncal%202303%2C%20C1125ABE%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721092587235!5m2!1ses!2sar" width="400" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};


export default Sucursales;