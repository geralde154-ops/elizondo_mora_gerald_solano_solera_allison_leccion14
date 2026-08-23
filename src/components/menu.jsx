import { Link } from 'react-router-dom';
import { menu } from '../menu';

export default function Menu() {
  return (
    <nav style={{ display: 'flex', gap: '15px', padding: '15px', borderBottom: '1px solid #444' }}>
      {menu.map((item) => (
        <Link key={item.ruta} to={item.ruta}>
          {item.nombre}
        </Link>
      ))}
    </nav>
  );
}
