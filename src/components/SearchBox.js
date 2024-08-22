import React, { useState } from 'react';
import styles from './SearchBox.module.scss';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();


  const handleSearch = () => {
    if (query.substring(0,3) === "MLA") {
      navigate(`/items/${query}`, { state: { query }});
    }
    else if (query) {
      navigate(`/items?search=${query}`, { state: { query }});
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <img src="mercado-libre-logo.jpg" alt="logo Mercado Libre" width="50" height="50"/>
        <input type="text" placeholder="Nunca dejes de buscar" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className={styles.botonMenu} onClick={handleSearch} type="submit">
          <img src="free.png" alt="logo Mercado Libre" width="50" height="50"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
