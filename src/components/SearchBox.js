import React, { useState } from 'react';
import styles from './SearchBox.module.scss';
import { useNavigate, Link } from 'react-router-dom';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.substring(0, 3) === "MLA") {
      navigate(`/items/${query}`, { state: { query } });
    } else if (query) {
      navigate(`/items?search=${query}`, { state: { query } });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <Link to="/">
          <img src="mercado-libre-logo.png" alt="logo Mercado Libre" width="50" height="50" />
        </Link>
        <input
          type="text"
          placeholder="Nunca dejes de buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.botonMenu} onClick={handleSearch} type="submit">
          <img src="find.webp" alt="buscar" width="50" height="50" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
