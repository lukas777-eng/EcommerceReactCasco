import React, { useState } from 'react';

export const Counter = () => {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(1);

 return (
    <div>
      <p><button onClick={() => setCount(count - 1)}>-</button> {count} <button onClick={() => setCount(count + 1)}>+</button></p>
      <button>
        Agregar al Carrito
      </button>
    </div>
  );
}