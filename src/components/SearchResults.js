import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');
  const [backendData, setBackendData] = useState({ items: [], category: '' });
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    setShowNoResults(false); 
    fetch(`/api/items?q=${query}`)
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
        if (data.items.length === 0) {
          setTimeout(() => {
            setShowNoResults(true);
          }, 1000);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setShowNoResults(true); 
      });
  }, [query]);

  const limitedProducts = Array.isArray(backendData.items) ?
    backendData.items.slice(0, 4) : [];

  const formatNumber = (number) => {
    return new Intl.NumberFormat('es-ES', { useGrouping: true }).format(number);
  };

  return (
    <div className={styles.searchResults}>
      <Breadcrumb category={backendData.category} />
      {showNoResults ? (
        <p className={styles.noResultsMessage}>No encontramos lo que buscabas</p>
      ) : (
        <ul className={styles.productsGrid}>
          {limitedProducts.map(product => (
            <li key={product.id} className={styles.productItem}>
              <Link to={`/items/${product.id}`}>
                <div className={styles.productDetail}>
                  <div className={styles.productImage}>
                    <img src={product.picture} alt={product.title} />
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.productPrice}>
                      $ {formatNumber(product.price.amount)}
                      <span className={styles.priceDecimals}> {product.price.decimals}</span>
                    </p>
                    <p className={styles.productTitle}>{product.title}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
