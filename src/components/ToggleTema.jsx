import { useState, useEffect } from 'react';

export default function ToggleTema() {
  const [oscuro, setOscuro] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = oscuro ? '#1a1a1a' : '#f5f5f5';
    document.body.style.color = oscuro ? '#ffffff' : '#111111';
  }, [oscuro]);

  return (
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #444', borderRadius: '8px' }}>
      <h2>Modo {oscuro ? 'Oscuro' : 'Claro'}</h2>
      <button onClick={() => setOscuro(!oscuro)}>
        Cambiar a modo {oscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
}
