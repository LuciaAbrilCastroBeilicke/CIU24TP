import React, { useState, useEffect } from 'react';
import Card from './card';

const Galeria = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCoffeeData(data);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (
    <>
    <div className='center-titles margin-botton'>
        <h3>Galeria</h3>
        <p>Conocé nuestros cafés</p>
    </div>
    
    <div className="galeria">
      {coffeeData.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
    </>
  );
};

export default Galeria;
