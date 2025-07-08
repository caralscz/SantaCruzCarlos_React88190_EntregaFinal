// =============================================================
// Viene desde "Item.jsx" y muestra el detalle de un producto y
//       está definido en App.jsx como Route path='/Item/:idProd'
//
// En este componente obtengo un solo producto por ID directamente 
//    desde la DB de firebase y lo muestro en ItemDetail.jsx
// =============================================================

import React, { useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom'; /* Para leer los parámetros de la URL */
import CargandoComponent from './CargandoComponent';
import { collection, doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../service/firebase';
import imgNoExiste from '../../public/noExiste1.gif'; 

 const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({}); /* espero un objeto */
    const [cargando, setCargando] = useState(false); // Estado para controlar la animacion de carga de datos
    const [invalido, setInvalido] = useState(false); // Estado para controlar la animacion de carga de datos
    // const params = useParams(); /*  Obtengo los parámetros de la URL - Opcion 1 */
    const {idProd} = useParams();  /*  - Opcion 2 */

    // leyendo Firebase
    useEffect(() => {

        setCargando(true); // Inicio la animación de carga
        
        // hacemos la conexión con nuestra colección de productos
        const productosColleccion = collection(dataBase, 'productos'); 
        
        // creamos la referencia al documento específico que queremos a leer
        const docRef = doc(productosColleccion, idProd); // idProd es el id de referencia

        // leemos el documento
        getDoc(docRef) 
         .then((res) => {
            if (res.data()) {    // Si el documento existe, res.data() devuelve un objeto con los datos
              setDetail({
                id: res.id, ...res.data()}) // Agrego el id y los datos del documento
            }else{
                setInvalido(true); // Si no existe el producto, cambio el estado a invalido
            } 
         })
         .catch((error) => console.log('ItemDetailContainer', error))
         .finally(() => setCargando(false)); // Finalizo la animación de carga


    }, []);
    
  // ===
  // Aquí armo la variable "paraRenderizar" con un mensaje que difiere 
  // 
  // Si el producto no existe: muestro un mensaje de error
  //  y si existe, el mensaje contendrá el Link que mostrará el producto
  // ===

  // - Por default considero que el producto existe
  let paraRenderizar = (<ItemDetail detail={detail}/> ); 

  if (invalido ) {
    paraRenderizar = (
        <>
        <h1 className='titulo-principal'>Producto no encontrado</h1>
        <h2>El producto no existe ... ! </h2>                  
        <img src={imgNoExiste}  className='imgCargando' title='Lo lamentamos, el producto no existe ... ' /><br />            
        <Link to='/' className='btn btn-dark btn-sm'>Volver al inicio</Link>
        </>
      )
  }  // fin del if invalido

  return (
    <>
            {
            cargando
            ?  <CargandoComponent />
            :  paraRenderizar    /* Esta variable está definida aquí arriba */
            }    
    </>
  )
}

export default ItemDetailContainer