import React from 'react';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const state = useSelector(state => state)

  return (
    <h1> { JSON.stringify(state) }</h1>
  );
}

export default Cart;
