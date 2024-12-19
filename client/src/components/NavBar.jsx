import { Link } from 'react-router-dom';
import nav from './navbar.module.css'
import { useAuth } from '../context/authContext';

function NavBar(){

    const {isAuthenticated, logout, user} = useAuth()

    return(
        <>
            <nav className={nav.menu}>
                <div >
                    <Link to={'/'} className={nav.logo}><h1>Logo</h1></Link>
                </div>
                {isAuthenticated ? (
                    <div className={nav.links}>
                        <ul>
                            <li>bienvenodo {user.username}</li>
                            <li><Link to={'/add-tareas'} className={nav.link}>agregar tareas</Link></li>
                            <li><Link to={'/'} onClick={()=>{logout()}} className={nav.link}>Logout</Link></li>
                        </ul>
                    </div>
                ):(
                    <div className={nav.links}>
                        <ul>
                            <li><Link to={'/register'} className={nav.link}>Registrarse</Link></li>
                            <li><Link to={'/login'} className={nav.link}>iniciar sesion</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}
export default NavBar;