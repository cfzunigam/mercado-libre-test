import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('search');

  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch(`/api/items?q=${query}`)
      .then(response => response.json())
      .then(data => setBackendData(data.items));
  }, [query]);

  const limitedProducts = backendData.slice(0, 4);

  return (
    <div className="search-results">
      <h2>Resultados de búsqueda</h2>
      <div className="products-grid">
        {limitedProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
