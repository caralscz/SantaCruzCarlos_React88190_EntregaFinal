// =============================================================
//
// IngresarWidget.jsx
// es llamada en el NavBar.jsx y definido el link en App.jsx
// Es el ícono desde el cual el usuario podrá ingresar identificandose
//
// =============================================================

import imgInicioSistema from '../assets/img/pantalla-de-inicio-de-sesion.png';
import { Link } from 'react-router-dom';

const IngresarWidget = () => {
    return (
        <>
            <Link to='/ingresar' >
                <img src={imgInicioSistema}  width="40"  /><br />
                <span className="ingresar-text">Registrarse</span>
            </Link>
        </>
    );
}

export default IngresarWidget;