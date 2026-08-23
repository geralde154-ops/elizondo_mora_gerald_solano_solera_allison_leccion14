import { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }

    if (!correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      nuevosErrores.correo = 'El correo no es válido';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(false);
    if (validar()) {
      setEnviado(true);
      setNombre('');
      setCorreo('');
    }
  };

  return (
    <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #444', borderRadius: '8px' }}>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre: </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errores.nombre && <p style={{ color: 'red', margin: '4px 0' }}>{errores.nombre}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Correo: </label>
          <input
            type="text"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          {errores.correo && <p style={{ color: 'red', margin: '4px 0' }}>{errores.correo}</p>}
        </div>

        <button type="submit">Enviar</button>
        {enviado && <p style={{ color: 'lightgreen' }}>¡Formulario enviado correctamente!</p>}
      </form>
    </div>
  );
}

