import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss'; // Importa el módulo de estilos

const Breadcrumb = ({ category }) => {
  return (
    <nav className={styles.breadcrumb}>
      <Link to="/" className={styles.homeLink}>Home</Link>
      {category && (
        <>
          {' > '}
          <span className={styles.category}>{category}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumb;
