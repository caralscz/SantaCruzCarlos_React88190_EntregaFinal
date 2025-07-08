// =============================================================
//
// Nosotros.jsx
// es llamada desde el NavBar.jsx y definido el link en App.jsx
//
// ============================================================= 

import React from 'react'; 
import imgNosotros from '../../public/nosotros.gif'; 

const Nosotros = () => {
    return (
        <>
            <h1 className="titulo-principal" >Nosotros</h1>
            <h3>Entrega final de Santa Cruz Carlos - Coder ReactJS</h3>
            <hr />
            
            <img src={imgNosotros}  className='imgCargando' title='Somos ... ' /><br />
            
            <p>Comisión 88190 Del 13/05/25 al 01/07/25<br />
            Martes  19:00 a 21:00h<br />
            Profe: Laura Therisod<br />
            Tutor: Andres Rubio<br />
            coderFlex React Js Flex</p>

        </>
    );
}

export default Nosotros;