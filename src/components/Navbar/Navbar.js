import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/Logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav style={{backgroundColor: 'black'}}>
            <img style={{width:300, padding:20, paddingRight:100}} src={logo} alt="navbar"/>
            <button type="button" class="btn btn-outline-light" style={{margin:10, marginLeft:150}}>CARTERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>MOCHILAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>RIÑONERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>BANDOLERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10}}>BILLETERAS</button>
            <button type="button" class="btn btn-outline-light" style={{margin:10, marginRight:150}}>ACCESORIOS</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar