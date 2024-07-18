import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={item.image} alt={item.title} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
      </div>
    </div>
  );
};

export default Card;
