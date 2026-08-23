import Contador from '../components/Contador';
import Formulario from '../components/Formulario';
import ToggleTema from '../components/ToggleTema';

function Herramientas() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Herramientas</h1>
      <ToggleTema />
      <Contador />
      <Formulario />
    </div>
  );
}

export default Herramientas;