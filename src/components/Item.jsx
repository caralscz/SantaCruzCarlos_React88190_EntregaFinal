// =============================================================
//
// Item.jsx : Para mostrar el detalle de un producto  (pero en una lista)
// Se llama desde ItemList.jsx 
// En App.jsx se definieron :
//      <Route path='/Item/:idProd'         element={<ItemDetailContainer 
//      <Route path='/categoria/:categNom'  element={<ItemListContainer 
// categNom es el nombre de la categoría
//
// =============================================================

import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

const Item = ({ losProductos }) => { 

    const {id,categoria,nombreCateg,categNom,prodNro, nombre, precio, stock, imagen, descripcion} = losProductos;

    return (

        <div className="card" style={{width: '11rem'}}>
            { <Link to={'/item/' + id } >
                    <img src={imagen} className="card-img-top" alt={nombre}  title={ 'Ver detalle de: ' + nombre }  />
              </Link> }

            <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"> 
                        { `${descripcion} $${precio}` } 
                    </p> 
                   
                    <p className='puntoBlanco' > .</p>  {/* Doy un espacios */}

                    { <Link to={'/item/' + id } className="btn btn-outline-dark btn-sm"  title={'Ver detalle del producto' + nombre} >Ver detalle</Link> 
                    }
            </div>
        </div>
          );

}
// {/* <Link to={`/item/${id} `} className="btn btn-secondary">Ver detalle</Link> */} {/* Es otra forma de hacerlo */}

export default Item;