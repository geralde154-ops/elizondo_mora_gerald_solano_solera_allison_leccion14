import { Link } from 'react-router-dom';
import { menu } from '../menu';
 
export default function Dashboard(){
    return (
        <main>
            <h1>Dashboard</h1>
            {menu.map(({ ruta, nombre }) => (
                <Link key={ruta} to={ruta}><button>{nombre}</button></Link>
            ))}
        </main>
    )
}
