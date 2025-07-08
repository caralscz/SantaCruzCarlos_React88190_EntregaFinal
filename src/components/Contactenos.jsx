// =============================================================
//
// Contactenos.jsx
// Muestra sólo un mensaje
// Es llamada desde el NavBar.jsx y definido el link en App.jsx
//
// =============================================================

import React from 'react'; 
import imgContactenos from '../../public/contactenos.gif'; 

const Contactenos = () => {

    return (
        <>
            <h1 className="titulo-principal" >Contactenos</h1>
            <h3>Entrega final de Santa Cruz Carlos - Coder ReactJS</h3>
            <hr />
                        
            <img src={imgContactenos}  className='imgCargando' title='Somos ... ' /><br />                      
            
            <p>c_santacruz@hotmail.com<br />
                TE  00 00 123 456789<br /></p>
            <hr />
            <p>Comisión 88190 Del 13/05/25 al 01/07/25<br />
                Martes  19:00 a 21:00h<br />
                Profe: Laura Therisod<br />
                Tutor: Andres Rubio<br />
                coderFlex React Js Flex</p>


        </>
    );
}

export default Contactenos;