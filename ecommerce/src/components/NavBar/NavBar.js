import CartWidget from "../CartWidget/Cart.Widget"

const NavBar = () => {
    return (
        <nav>
            <h3>
                Life Academia Multicultural
            </h3>
            <div>
                <button>Italiano</button>
                <button>Inglés</button>
                <button>Francés</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar