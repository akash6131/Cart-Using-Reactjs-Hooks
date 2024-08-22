import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './Cart';
import './App.css';

const Fruits = () => {
  const sampleProducts = [
    { id: 1, name: 'Apple', price: 10 },
    { id: 2, name: 'Orange', price: 20 },
    { id: 3, name: 'Mango', price: 30 },
    { id: 4, name: 'Grapes', price: 25 },
    { id: 5, name: 'Watermelon', price: 50 },
  ];

  return (
    <div>
      <h1>Shop</h1>
      <ShoppingCart products={sampleProducts} />
    </div>
  );
};
ReactDOM.render(<Fruits/>,document.getElementById("root"));