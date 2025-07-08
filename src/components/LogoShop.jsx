// =============================================================
//
// LogoShop.jsx
// Es llamada en NavBar.jsx y en Footer.jsx 
// Definido el link en App.jsx
//
// =============================================================

import logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

const LogoShop = () => {
    return (
        <>
            <Link to='/' >
                <img src={logo} alt="Coder shop" title='Coder shop'/>
            </Link>
        </>
    );
}

export default LogoShop;