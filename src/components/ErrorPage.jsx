// =============================================================
//
// ErrorPage.jsx
// Es llamada si no se encuentra una ruta solicitada 
// en la aplicacion, por ejemplo si se escribe una ruta inexistente
//
// =============================================================

import React from 'react'
import { Link } from 'react-router-dom'
import imgError404 from '../../public/error404.gif';

const ErrorPage = () => {
  return (
    <>
      <h1 className="titulo-principal" >***  Error 404***</h1>
      <h3>Lo siento, la pagina no existe !! </h3>
      <Link to='/'>
            <img src={imgError404} className='imgError404' title='No la encuentro ! ' /><br />
      </Link>
      <Link to='/' className="btn btn-secondary">Regresar al inicio</Link>
      <hr />
      <p>Comisión 88190 Del 13/05/25 al 01/07/25<br />
        Martes  19:00 a 21:00h<br />
        Profe: Laura Therisod<br />
        Tutor: Andres Rubio<br />
        coderFlex React Js Flex</p>
      
      
    </>
  )
}

export default ErrorPage