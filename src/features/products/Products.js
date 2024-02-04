import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync, updateProductAsync } from './productsSlice';
import { addAsync, updateAsync } from '../cart/cartSlice';
import './Products.css';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchAsync())
  }, []);

  return (
    <div>
      {quantity}
      <div>

        {products.map((product) => (
          <div className="card">
            <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p className="quantity">
              Quantity
              <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </p>
            <p>
              <button onClick={() => dispatch(addAsync({ product, quantity }))}>Add to Cart</button>
            </p>
          </div>

        ))}
      </div>
    </div>
  );
}
