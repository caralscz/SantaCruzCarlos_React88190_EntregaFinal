// =============================================================
//
// CargandoComponent.jsx : 
//   Muestra una animación mientras se leen datos de la Base de Datos
//
// =============================================================

import React from 'react'
import imgCargando from '../../public/Caminando.gif';

const CargandoComponent = () => {
  return (
    <div>
        <p>piano piano si va lontano ...</p>
        <img src={imgCargando}  className='imgCargando' title='Estamos yendo por sus productos...' /><br />
        <h2 className='textImgCargando'>Cargando...</h2>
        <p className='textImgCargando'>Por favor, espere unos segundos</p>
    </div>
  )
}

export default CargandoComponent