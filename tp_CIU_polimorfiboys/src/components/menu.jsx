import React, { useState } from "react";

const Menu = (setActiveTab) => {
  const menuItems = [
    { id: 1, name: "Café", price: 2.5, description: "Café negro" },
    { id: 2, name: "Té", price: 2.0, description: "Té verde" },
    {
      id: 3,
      name: "Sandwich",
      price: 5.0,
      description: "Sandwich de jamón y queso",
    },
  ];

  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectItem = (id, quantity) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [id]: quantity,
    }));
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [id, quantity]) => {
      const item = menuItems.find((item) => item.id === parseInt(id));
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div>
      <h1>Menú de la Cafetería</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h2>
              {item.name} - ${item.price}
            </h2>
            <p>{item.description}</p>
            <input
              type="number"
              min="0"
              value={selectedItems[item.id] || 0}
              onChange={(e) =>
                handleSelectItem(item.id, parseInt(e.target.value))
              }
            />
          </li>
        ))}
      </ul>
      <button onClick={calculateTotal}>Calcular Total</button>
      <h2>Total: ${calculateTotal().toFixed(2)}</h2>
    </div>
  );
};

export default Menu;
