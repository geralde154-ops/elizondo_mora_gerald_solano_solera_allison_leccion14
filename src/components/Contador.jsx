import { useState } from 'react';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #444', borderRadius: '8px' }}>
      <h2>Contador</h2>
      <p style={{ fontSize: '2rem' }}>{contador}</p>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)} style={{ marginLeft: '10px' }}>+</button>
      <button onClick={() => setContador(0)} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
}
