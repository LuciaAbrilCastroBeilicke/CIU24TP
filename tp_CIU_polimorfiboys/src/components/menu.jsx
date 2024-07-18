import React, { useState, useEffect } from "react";

const Menu = ({ setActiveTab }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const itemsWithPrices = data.map(item => ({
          ...item,
          price: Math.floor(Math.random() * 1000) + 500 // Genera un precio ficticio para cada café
        }));
        setMenuItems(itemsWithPrices);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  const handleSelectItem = (id, quantity) => {
    setItems((prevItems) => ({
      ...prevItems,
      [id]: quantity,
    }));
  };

  const calculateTotal = () => {
    return Object.entries(items).reduce((total, [id, quantity]) => {
      const item = menuItems.find((item) => item.id === parseInt(id));
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div>
      <h3 className='center-titles margin-bottom'>Menú de la Cafetería</h3>
      <p className='center-titles margin-bottom'>Podés ver los precios de nuestros cafés y calcular el total</p>

      <div className="menu-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h5>{item.title} - ${item.price}</h5>
            <input
              type="number"
              min="0"
              value={items[item.id] || 0}
              onChange={(e) =>
                handleSelectItem(item.id, parseInt(e.target.value))
              }
            />
          </div>
        ))}
      </div>
      <h4 className='center-titles margin-bottom'>Total: ${calculateTotal()}</h4>
    </div>
  );
};

export default Menu;
