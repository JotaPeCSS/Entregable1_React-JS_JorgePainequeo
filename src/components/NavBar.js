import React from "react";
import CartWidget from "./CartWidget";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#343a40",
    color: "white",
    padding: "10px 20px",
  },
  logo: {
    height: "40px",
    cursor: "pointer",
  },
};

const NavBar = ({ cartItems, cartOpen, setCartOpen, emptyCart }) => {
  return (
    <nav style={styles.navbar}>
      {/* El logo redirige al home */}
      <a href="https://JotaPeCSS.github.io/Entregable1_React-JS_JorgePainequeo">
        <img src="./media/logo.png" alt="Tienda Logo" style={styles.logo} />
      </a>
      <CartWidget
        cartItems={cartItems}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        emptyCart={emptyCart}
      />
    </nav>
  );
};

export default NavBar;
