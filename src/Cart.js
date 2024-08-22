import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { initialState, reducer } from './Reducer';

const ShoppingCart = ({ products }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const updateItemQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <div id="total">
      <h2>Shopping Cart</h2>
      <ul>
        {products.map(product => (
            <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addItemToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
        <h2>Products</h2>
        <h3>Total: ${state.cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
      <ul>
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;