import React, { useState, useEffect } from "react";

const Inicio = ({ setActiveTab }) => {


  return (
    <>
      <h3 className='center-titles margin-bottom'>Bienvenidos a 'La cafetería del programador'</h3>

      <h5 className='center-titles margin-bottom'>Historia</h5>
      <p>En el corazón de CABA, se encuentra La Cafetería del Programador, un lugar donde el café y la creatividad se unen. Fundada por nosotros, un apasionado del café y la programación, esta cafetería se ha convertido en un refugio para los amantes del café y los buscadores de inspiración.

        Cada mañana, el aroma del café recién molido atrae a los clientes, quienes disfrutan de bebidas únicas como el “Café del Programador” y el “Té de la Serenidad”. Las paredes están decoradas con citas inspiradoras y obras de arte locales, creando un ambiente acogedor y creativo.

        Los fines de semana, la cafetería organiza talleres de programación y noches de poesía y música en vivo, convirtiéndose en un punto de encuentro para la comunidad. La Cafetería de los Sueños es un lugar donde se forjan amistades, se comparten ideas y se crean recuerdos inolvidables.</p>
      <h5 className='center-titles margin-bottom'>Filosofia</h5>
      <p> La filosofía de la cafetería se basa en tres pilares fundamentales: calidad, inspiración y conexión. <br />
        <b>Calidad:</b> Cada bebida y plato en La Cafetería de los Sueños se prepara con ingredientes de la más alta calidad. Desde el café recién molido hasta los pasteles caseros, cada detalle se cuida para ofrecer una experiencia única y deliciosa. <br />
        <b>Inspiración:</b> Las paredes de la cafetería están adornadas con obras de arte locales y citas inspiradoras, creando un ambiente que estimula la creatividad. Los clientes pueden disfrutar de talleres de programación, noches de poesía y música en vivo, convirtiendo cada visita en una fuente de inspiración.  <br />
        <b>Conexión:</b> Más que una cafetería, La Cafetería de los Sueños es un punto de encuentro para la comunidad. Aquí, las personas se reúnen para compartir ideas, forjar amistades y crear recuerdos inolvidables. La conexión humana es el corazón de la filosofía de la cafetería.</p>
      <div className='center-titles margin-bottom'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/T58mn6JrOnA?si=wLNO4LXqiaW1R2DF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> <br />
      </div>
      <h5 className='center-titles margin-bottom'>Aprendé a preparar nuestros cafés desde la comodidad de tu casa:</h5>
      <div className="galeria center-titles">
        <a href="https://www.youtube.com/watch?v=EURqMru9PcE&t=1s" target="_blank">
          <div className="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Caramel Latte" />
            <div className="card-body">
              <p className="card-text">Caramel Latte</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=kknlYjl1il0" target="_blank">
          <div className="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cappuccino" />
            <div className="card-body">
              <p className="card-text">Cappuccino</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=fAkPPyodzSM" target="_blank">
          <div className="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D" alt="Matcha Latte" />
            <div className="card-body">
              <p className="card-text">Matcha Latte</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=fAkPPyodzSM" target="_blank">
          <div className="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D" alt="Limonada" />
            <div className="card-body">
              <p className="card-text">Limonada</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=fAkPPyodzSM" target="_blank">
          <div className="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="Chocolate caliente" />
            <div className="card-body">
              <p className="card-text">Chocolate caliente</p>
            </div>
          </div>
        </a>
      </div>

    </>
  );
};

export default Inicio;
