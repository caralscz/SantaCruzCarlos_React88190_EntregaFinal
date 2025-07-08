// =============================================================
//
// Ingresar.jsx
// es llamada desde el IngresarWidget.jsx y definido el link en App.jsx
// En este espacio se podrá registrar nuevos usuarios o controlar los existentes
//
// =============================================================

import React from 'react';
import imgRegistrese from '../../public/registrese.gif';  

const Ingresar = () => {
    return (
        <>
            <h1 className="titulo-principal" >Ingresar</h1>
            <h3>Entrega final de Santa Cruz Carlos - Coder ReactJS</h3>
            <hr />
                        
            <img src={imgRegistrese}  className='imgCargando' title='Somos ... ' /><br />                      
                        
            <p>Comisión 88190 Del 13/05/25 al 01/07/25<br />
            Martes  19:00 a 21:00h<br />
            Profe: Laura Therisod<br />
            Tutor: Andres Rubio<br />
            coderFlex React Js Flex</p>

        </>
    );
}

export default Ingresar;