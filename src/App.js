import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartOpen(true); // Abre el carrito al añadir un producto
  };

  const emptyCart = () => {
    setCartItems([]); // Vacía el carrito
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <NavBar cartItems={cartItems} cartOpen={cartOpen} setCartOpen={setCartOpen} emptyCart={emptyCart} />
      <ItemListContainer greeting="Bienvenido a nuestra tienda" addToCart={addToCart} />
    </div>
  );
}

export default App;
