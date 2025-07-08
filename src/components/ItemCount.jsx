// =============================================================
// Lo usamos en  "ItemDetail.jsx" 
// Muestra un contador para agregar luego al carrito 
// Suma y resta la cantidad de productos hasta el stock disponible
//
// Si el stock es 0, deja de restar y el botón de compra queda deshabilitado 
// =============================================================

import React, { useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    // Estado inicial del contador, comienza en 1
    const [count, setCount] =useState(1)    

    const sumar = ()=>{
        if(count < stock){
           setCount(count +1)
        }
    }

    const restar = ()=>{
        if(count > 0){
            setCount(count -1)
        }
    }

  return (
    // <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div>
            <button className='btn btn-secondary btn-sm' onClick={restar}><b>-</b></button>
            <span className='btn'>{count}</span>
            <button className='btn btn-secondary btn-sm' onClick={sumar}><b>+</b></button>
            <span className='btn'> </span>
            <button className='btn btn-primary btn-sm'  disabled={stock === 0 || count === 0 } onClick={()=>onAdd(count)}>Comprar</button>
    </div>
  )
}

export default ItemCount