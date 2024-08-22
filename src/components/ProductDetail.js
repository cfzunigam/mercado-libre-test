import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const ProductDetail = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.state).get('query');

  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch(`/api/items/${query}`)
      .then(response => response.json())
      .then(data => setBackendData(data));
  }, [query]);

  return (
    <div className="search-results">
      <h2>Resultados de búsqueda Detalle</h2>
      <div className="products-grid">
        <div className="product-info">
          {backendData.item ? (
            <>
              <p>{backendData.item.title}</p>
              <p>{backendData.item.price?.amount || 'Price not available'}</p>
            </>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
