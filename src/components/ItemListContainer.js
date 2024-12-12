import React from "react";

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  greeting: {
    marginBottom: "20px",
  },
  productGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  productCard: {
    padding: "10px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    textAlign: "center",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

const ItemListContainer = ({ greeting, addToCart }) => {
  const products = [
    { id: 1, name: "Camisa Roja", price: 20 },
    { id: 2, name: "Camisa Azul", price: 25 },
    { id: 3, name: "Camisa Amarilla", price: 30 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.greeting}>{greeting}</h2>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
