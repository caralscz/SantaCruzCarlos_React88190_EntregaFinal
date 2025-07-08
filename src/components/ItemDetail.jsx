// =============================================================
// 
// ItemDetail.jsx : Mostramos el detalle de un producto
// Venimos desde "ItemDetailContainer.jsx" para mostrar los detalles de un producto
// Este componente es una copia del componente "Item.jsx"
//      la diferencia es que aquí tiene Link de retorno  y más detalles del producto
//      y el componente "ItemCount" para agregar al carrito
// En App.jsx se definieron :
//      <Route path='/categoria/:categNom' element={<ItemListContainer 
//
// =============================================================

// Importamos el hook useContext para usar el contexto
import React, {useContext, useState} from 'react';  
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
// importamos el contexto del carrito que estamos queriendo consumir
import { CartContext } from '../context/CartContext';

const ItemDetail = ({detail}) => {

    const{ addItem } = useContext(CartContext);  //consumir el contexto del carrito
    const [comprando,setComprando] = useState(false); // Estado para controlar si se está comprando 
    const {id,categoria,categNom,nombreCateg,prodNro, nombre, precio, stock, imagen, descripcion} = detail;
      
    const onAdd = (cantidad)=>{
        addItem(detail, cantidad);
        setComprando(true); // Cambiamos el estado a comprando
    }

    return (
        <>
            <div className="card" >
                <h2 className="card-header">Detalle del producto</h2>
                <span className="badge bg-secondary text-wrap" style={{width: '18rem'}}>
                <div className="card" style={{ width: '18rem' }}>
                    <img 
                        src={imagen} 
                        className="card-img-top  mx-auto d-block" 
                        alt={nombre}   
                        style={{ width: '11rem' }}
                        title={ nombre } 
                    />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}      </h5>
                        <p className="card-text">{descripcion}    </p>
                        <p className="card-text">{` $${precio}`} </p>
                        <p className="card-text">Cantidad en stock: {stock} </p>
                        
                        {/* Decidimos que botón mostramos si se está comprando o no */}
                        {comprando ? 
                            <Link to={'/carrito'} className="btn btn-success btn-sm" title="Ver carrito">
                                Ver carrito
                            </Link>
                            :
                            <ItemCount stock={detail.stock} onAdd={onAdd}/>
                        }
                        
                        {/* Pregunto si quiere ver la categoría del producto */}
                        <p className='puntoBlanco'> .</p>  {/* Doy un espacios */}
                        <Link to={'/' } className="btn btn-outline-dark btn-sm" title={'Ver todos los productos' }>
                                Ver todos
                        </Link>
                        <span className='puntoBlanco'> . . . .</span>
                        {/* categNom es la Categoria pero en texto */}
                        <Link to={'/categoria/' + categNom} className="btn btn-outline-dark btn-sm" title={'Ver productos de la categoria ' + nombreCateg}>
                                Ver categoria
                        </Link>
                        <p className='puntoBlanco'> .</p>
                        <p> Categoría: {nombreCateg} </p>

                    </div>
                </div>
                </span>
            </div>
        </>
    );

}

export default ItemDetail