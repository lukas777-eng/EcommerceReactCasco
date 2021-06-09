import { CartWidget } from '../components/CartWidget';

export const Navbar = () => {
    return (
        <header className='navbar'>
            <ul className='category'>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Niños</li>
                <li>Niñas</li>
            </ul>
            <CartWidget/>
        </header>
    )
};