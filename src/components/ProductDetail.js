import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.scss';

const ProductDetail = () => {
  const location = useLocation();
  const query = location.state ? new URLSearchParams(location.state).get('query') :
    location.pathname.split('/').pop();
  
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);
    fetch(`/api/items/${query}`)
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [query]);

  const formatNumber = (number) => {
    return new Intl.NumberFormat('es-ES', { useGrouping: true }).format(number);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!backendData || !backendData.item) {
    return <p>No encontramos lo que buscabas</p>;
  }

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetail}>
        <div className={styles.productImage}>
          <img src={backendData.item.picture} alt={backendData.item.title} />
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productCondition}>{backendData.item.condition}</p>
          <p className={styles.productTitle}>{backendData.item.title}</p>
          <p className={styles.productPrice}>
            ${formatNumber(backendData.item.price?.amount) || 'Price not available'}
            <span className={styles.priceDecimals}>{backendData.item.price?.decimals || ''}</span>
          </p>
          <button className={styles.buyButton}>Comprar</button>
        </div>
      </div>
      <div className={styles.productDescriptionTitle}>
        <p>Descripción del producto</p>
      </div>
      <div className={styles.productDescription}>
        <p>{backendData.item.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
