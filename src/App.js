import React, { useState } from 'react';
import './App.css'; // Importamos los estilos CSS

// Lista de productos disponibles en la tienda
const productos = [
  { id: 1, nombre: 'Camiseta Roja', precio: 15.99 },
  { id: 2, nombre: 'Camiseta Azul', precio: 18.99 },
  { id: 3, nombre: 'Camiseta Amarilla', precio: 14.99 },
];

function App() {
  // Estado para el carrito de compras
  const [carrito, setCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setCarritoVisible(true); // Muestra el carrito cuando se añade un producto
  };

  // Función para calcular el total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    setCarritoVisible(false); // Oculta el carrito al vaciarlo
  };

  return (
    <div className="App">
      {/* NavBar siempre arriba */}
      <header className="nav-bar">
        <h2>Tienda</h2>
        <button className="cart-icon" onClick={() => setCarritoVisible(!carritoVisible)}>
          🛒 Carrito ({carrito.length})
        </button>
      </header>

      {/* Sección de productos */}
      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto.id} className="product-item">
            <h3>{producto.nombre}</h3>
            <p>${producto.precio.toFixed(2)}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
          </div>
        ))}
      </div>

      {/* Sección del carrito (desplegable) */}
      {carritoVisible && (
        <div className="cart">
          <h2>Tu Carrito</h2>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio.toFixed(2)}
              </li>
            ))}
          </ul>
          {carrito.length > 0 && (
            <div className="cart-total">
              <p>Total: ${calcularTotal()}</p>
              <button className="vaciar-carrito" onClick={vaciarCarrito}>
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
