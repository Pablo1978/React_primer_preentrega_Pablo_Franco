import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>Acuario Pablo´s</h1>

            <nav>
                <ul>
                    <li>Aireadores</li>
                    <li>Tratamiento Para Peces</li>
                    <li>Filtros</li>
                    <li>Calefactores</li>
                    <li>Peceras</li>
                    <li>Piedras</li>
                </ul>
            </nav>

            <CartWidget/>

        </header>
    )
}

export default NavBar
