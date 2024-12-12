import React from "react";

const styles = {
  cartWidget: {
    position: "relative",
    cursor: "pointer",
  },
  icon: {
    fontSize: "24px",
    color: "white",
  },
  dropdown: {
    position: "absolute",
    right: "0",
    top: "30px",
    width: "200px",
    backgroundColor: "#333",
    color: "white",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
  },
  button: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "3px",
    cursor: "pointer",
  },
};

const CartWidget = ({ cartItems, cartOpen, setCartOpen, emptyCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div style={styles.cartWidget}>
      <span
        className="material-symbols-outlined"
        style={styles.icon}
        onClick={() => setCartOpen(!cartOpen)}
      >
        shopping_cart
      </span>
      {cartOpen && (
        <div style={styles.dropdown}>
          <h4>Carrito</h4>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
              ))}
            </ul>
          ) : (
            <p>No hay productos en el carrito.</p>
          )}
          <p>Total: ${total}</p>
          <button style={styles.button} onClick={emptyCart}>
            Vaciar Carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default CartWidget;