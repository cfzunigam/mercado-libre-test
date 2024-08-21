import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <img src="mercado-libre-logo.jpg" alt="logo Mercado Libre" width="50" height="50"/>
        <input type="text" placeholder="Nunca dejes de buscar" />
        <button className={styles.botonMenu} type="submit">
        <img src="free.png" alt="logo Mercado Libre" width="50" height="50"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
