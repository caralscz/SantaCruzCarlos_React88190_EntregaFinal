// =============================================================
//
// FinalizarCompra.jsx    ó   Checkout
// Aquí hacemos el cierre de una compra y la confirmación de la misma
// Pedimos que se llene un formulario con datos para la compra
// Verificamos que los datos sean cargados y en longitudes sean correctos
//     y si todo está ok , cerramos la compra y luego vaciamos el carrito 
//
// =============================================================

import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { dataBase } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import imgCompraFinalizada from '../../public/giphy.webp';  // imagen que se muestra al finalizar la compra

const FinalizarCompra = () => {
    const [idOrden, setIdOrden] = useState('') 
    const {register, handleSubmit, formState:{errors}, getValues}=useForm()
    const{cart, precioTotal, limpiarCarrito} = useContext(CartContext)

    const completamosLaCompra = (datosDelForm) => {

        // cargamos en "order" los datos personales y luego los artículos comprados (cart)
            let order = {
                comprador: {
                    nombre: datosDelForm.nombre,
                    apellido: datosDelForm.apellido,
                    direccion: datosDelForm.direccion,
                    email: datosDelForm.email
                },
                compras: cart,
                total: precioTotal(),
                date: serverTimestamp()
            }

        //agregamos el documento "order" de la venta realizada, al archivo "ordenes" en Firebase  
            const ventas = collection(dataBase, "ordenes")
            addDoc(ventas, order)  // dónde, que
                .then((res)=>{
                    setIdOrden(res.id)
                    limpiarCarrito()
                })
                .catch((error) => console.log("Finalizar compra Error:", error))            
    }

  return (
    <>
    {
    idOrden ?

        // Mensaje de "Compra realizada ok"
        <div>
            <h1  className="titulo-principal">Compra realizada</h1>
            <img src={imgCompraFinalizada}  className='imgCargando' title='Feliz compra !!' /><br />
            <h2>El id de su compra es: {idOrden}</h2>  
            <hr /> 
        </div>
    :   
        // Formulario que debe llenar el comprador
        <div>
            <h1  className="titulo-principal">Finalizar su compra</h1>
            <h2>Complete sus datos</h2>  
            <hr /> 
            <form className='formFinCompra' onSubmit={handleSubmit(completamosLaCompra)}> 
                <label htmlFor="nombreInput" >Nombre</label>
                <input className='form-control' type='text' name='nombre' placeholder='Ingrese sus nombres' {...register("nombre",{required:true, minLength:3})} />
                {errors?.nombre?.type === 'required'  && <span className='textError'>Por favor, su nombre es requerido.<br /></span>}
                {errors?.nombre?.type === 'minLength' && <span className='textError'>Su nombre debe tener mas de dos caracteres de longitud.<br /></span>}

                <label htmlFor="apellidoInput" >Apellido</label>
                <input className='form-control' type='text' name='apellido' placeholder='Ingrese sus apellidos'  {...register("apellido",{required:true, minLength:3})} />
                {errors?.apellido?.type === 'required'  && <span className='textError'>Por favor, su apellido es requerido.<br /></span>}
                {errors?.apellido?.type === 'minLength' && <span className='textError'>Su apellido debe tener mas de dos caracteres de longitud.<br /></span>}

                <label htmlFor="direccionInput" >Dirección</label> 
                <input className='form-control' type='text' name='direccion' placeholder='Ingrese su dirección'    {...register("direccion",{required:true, minLength:10, maxLength:35})} />
                {errors?.direccion?.type === 'required'  && <span className='textError'>Por favor, la dirección es requerida.<br /></span>}
                {errors?.direccion?.type === 'minLength' && <span className='textError'>La dirección debe tener mas de 10 caracteres de longitud.<br /></span>}
                {errors?.direccion?.type === 'maxLength' && <span className='textError'>La dirección debe tener menos de 36 caracteres de longitud.<br /></span>}

                <label htmlFor="emailInput">e-mail</label>
                <input className='form-control' type='email' name='email' placeholder='Ingrese su correo:'   {...register("email",{required:true})} />
                {errors?.email?.type === 'required'  && <span className='textError'>Por favor, el e-mail es requerido.<br /></span>}

                <label htmlFor="email2Input" >re-ingrese e-mail</label>
                <input className='form-control' type='email' name='email2' placeholder='Repita su correo:'   {...register("email2",{required:true , validate:{verifMails: mail2 => mail2 === getValues().email}})} />
                {errors?.email2?.type === 'required'    && <span className='textError'>Por favor, repetir el e-mail es requerido para su verificación.<br /></span>}
                {errors?.email2?.type === 'verifMails'  && <span className='textError'>Los nombres de e-mail ingresados no son iguales.<br /></span>}

                <br />
                <button className='btn btn-success btn-sm' type='submit'  disabled={!cart.length} title="Enviar formulario">Finalizar la compra</button> 
                
            </form>
            <br />
            <Link to='/'         className='btn btn-primary btn-sm'  title="Ver todos los productos">Seguir comprando</Link>
            <Link to='/carrito'  className='btn btn-outline-dark btn-sm margenIzq'    title="Ver carrito"  >Ver  el  carrito</Link>

            
        </div>
    }
    </>
  )  // fin del return
}

export default FinalizarCompra