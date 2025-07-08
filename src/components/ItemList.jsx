// -------------------------------------------------------- +
//
// Muestro los productos dependiendo del valor pasado en "data.laCategoria"
// Si laCategoria === "99"  lista TODOS los productos por pedido de la consigna          
// Si props.laCategoria  !=="99"  quiere los productos de esa categoría
// siempre los guardo en un array llamado tbCategorias 
//
// -------------------------------------------------------- +

import React from 'react'; 
import Item from './Item';

const ItemList = ({data}) => {

    return (
        <>
            <h3 > {data.nombreCateg}</h3>
            <hr />
            <div className='contenedor-cards'>
               {data.map((prod)=> <Item key={prod.id} losProductos={prod}/>)}                
        </div>
        </>
    )
}

export default ItemList; 