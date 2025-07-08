// -------------------------------------------------------- +
//
// Venimos desde App.jsx  con '/' o '/categoria/:categNom  
//        (categNom es el nombre de la categoría -antes usaba idCategoria- )
// Leemos de firebase nuestra colección de productos
// y los guardamos en el estado data
// Y mostramos los productos en ItemList
// 
// -------------------------------------------------------- +
 
import { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import CargandoComponent from './CargandoComponent';
import { collection, getDocs, query, where, addDoc, orderBy } from 'firebase/firestore';
import { dataBase } from '../service/firebase';
// import { productos } from '../mock/AsyncMock';  // lo usamos una sola vez y lo comentamos luego

const ItemListContainer = (props) => {
        
    const [data, setData] = useState([]) ;
    const [cargando, setCargando] = useState(false); /* // Estado para controlar la animacion de carga de datos */
    let { categNom } = useParams() ; /* Obtengo el parámetro de la URL que es el nombre de la categoría */

    // ---
    // Lectura de Firebase
    // ---
    useEffect(() => {
        setCargando(true);    // Inicio la animación de carga

        // ---
        // En "productosCollection" armo con "collection" la conexión con nuestra DB
        //     en Firebase y le digo cuál es la colección que quiero leer
        // Si hay un categNom, leeré solo los productos de esa categoría
        //     caso contrario, leeré todos los productos
        // ---
        const productosCollection =  categNom ?
              query(collection(dataBase, 'productos'), where('categNom', '==', categNom))
            : query(collection(dataBase, 'productos'), orderBy('categoria', 'asc'))      // Ordena por categoría ascendente;
        
        // ---
        // leemos los productos de la colección
        // ---
        getDocs(productosCollection)
        .then((respuesta)=>{
        
            // ---
            // debo usar el metodo data para extraer los datos y poder trabajarlos
            const losProductos = respuesta.docs.map((doc) =>{ 
               return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(losProductos); // seteo los productos en el estado data

        })  // fin del then
        .catch((error) => console.log('ItemListContainer Error', error))
        .finally(() =>  setCargando(false)) // Finalizo la animación de carga
    },[categNom]);  // fin del useEffect

    // ---
    // Esto lo ejecutamos una sola vez y luego la dejamos comentada
    // Es para subir a Firebase todos los productos que tenemos en el mock
    //
    // const SubirMonck = () => {
    //         console.log('subiendo')
    //         const colleccionAgregar = collection(dataBase, "productos")  // así tengo definido en FireBase
    //         productos.map((prod) => addDoc(colleccionAgregar, prod))
    // }


    return (
        <>
            {/* <button onClick={SubirMonck}>Subir productos a FireBase</button> */}

            <h1 className="titulo-principal" >{props.saludo1}</h1>
            <h3 >{props.saludo2}</h3>        
            {cargando ?
                <CargandoComponent />
                :  
                <ItemList data={data}  /> 
            }
            
        </>  
    )
}

export default ItemListContainer