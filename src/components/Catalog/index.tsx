import React, { useState, useEffect, useCallback } from 'react';
import api from '../service/api';
import { IProduct } from '../../store/module/cart/types';
import { addProductToCart } from '../../store/module/cart/actions';
import { useDispatch } from 'react-redux';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([])

  const dispatch = useDispatch();

  useEffect(()=> {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  },[dispatch]) 

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product));
  }, [dispatch])

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong>{ " - "}
          <span>{product.price}</span>{"  "}

          <button type="button" onClick={() => handleAddProductToCart(product)}>comprar</button>
        </article>
      ))}
    </main>
  );
}

export default Catalog;
