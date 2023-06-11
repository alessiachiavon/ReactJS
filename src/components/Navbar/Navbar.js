import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/Logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{backgroundColor: 'black'}}>
            <Link to='/'>
            <img style={{width:300, padding:20, paddingRight:100}} src={logo} alt="navbar"/>
            </Link>
            <div>
            <button type="button" class="btn btn-outline-light" style={{margin:10, marginLeft:150}}>CARTERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>MOCHILAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>RIÑONERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>BANDOLERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>BILLETERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10, marginRight:150}}>ACCESORIOS</button>
            <NavLink to={'/category/carteras'} className={({ isActive }) => isActive ? styles.active : styles.inactive }>CARTERAS</NavLink>
            <NavLink to={'/category/mochilas'} className={({ isActive }) => isActive ? styles.active : styles.inactive }>MOCHILAS</NavLink>
            <NavLink to={'/category/riñoneras'} className={({ isActive }) => isActive ? styles.active : styles.inactive }>RIÑONERAS</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar