import "./NavBar.css"
import CartWidget from "../CartWidget/Cart.Widget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
            <h3>
                Life Academia Multicultural
            </h3>
            </Link>
            <div>
            <NavLink to={`/category/Cursos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Italiano</NavLink>
            <NavLink to={`/category/Curso Virtual`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Francés</NavLink>
            <NavLink to={`/category/Curso Presencial`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Inglés</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar