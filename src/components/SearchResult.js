import React, { useState, useEffect } from 'react';

const SearchResults = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de una llamada a una API para obtener los productos
    // En una implementación real, reemplazarías esto con una llamada a una API como fetch() o axios.
    const fetchProducts = async () => {
      // Ejemplo de productos simulados
      const sampleProducts = [
        {
          id: 1,
          title: "Producto 1",
          price: "$100",
          image: "https://via.placeholder.com/150",
          link: "https://example.com/product/1"
        },
        {
          id: 2,
          title: "Producto 2",
          price: "$200",
          image: "https://via.placeholder.com/150",
          link: "https://example.com/product/2"
        },
        {
          id: 3,
          title: "Producto 3",
          price: "$300",
          image: "https://via.placeholder.com/150",
          link: "https://example.com/product/3"
        }
      ];

      // Simulación de un delay para imitar una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(sampleProducts);
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="search-results">
      <h2>Resultados de búsqueda para: "{searchQuery}"</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img src={product.image} alt={product.title} />
            </a>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
