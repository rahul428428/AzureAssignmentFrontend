import React, { useState, useEffect } from 'react';
import './ProductList.css';  

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/getAllProducts',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any other required headers here
            }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.imageUrl} alt={product.brand} className="product-image" />
          <div className="card-body">
            <h5 className="card-title">{product.brand} {product.model}</h5>
            <p className="card-text">Processor: {product.processor}</p>
            <p className="card-text">RAM Size: {product.ram_size || 'N/A'}</p>
            <p className="card-text">Storage: {product.storage}</p>
            <p className="card-text">Price: Rs{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
