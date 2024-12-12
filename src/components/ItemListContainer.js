import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div>
      <h2>{mensaje}</h2>
      {// Lista de productos disponibles en la tienda
const productos = [
  { id: 1, nombre: 'Camiseta Roja', precio: 15.99 },
  { id: 2, nombre: 'Camiseta Azul', precio: 18.99 },
  { id: 3, nombre: 'Camiseta Amarilla', precio: 14.99 },
];}
    </div>
  );
};

export default ItemListContainer;