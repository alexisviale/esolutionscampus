import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/usuarios'>Usuarios</Link>
                    </li>
                    <li>
                        <Link to='/mensajes'>Mensajes</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout