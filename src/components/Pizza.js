import React from "react";

const Pizza = (props) => {
  return (
    <div className="pizza">
      {props.pizza.map((pizza) => {
        <div key={pizza.id}>
          <h2>{pizza.name}</h2>
          <p>{pizza.size}</p>
          <p>{pizza.special}</p>
        </div>;
      })}
    </div>
  );
};

export default Pizza;
