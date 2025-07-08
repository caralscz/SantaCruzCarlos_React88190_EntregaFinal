// =============================================================
// 
// aqui se define el contexto y el proveedor del carrito de compras
//
// El contexto se crea con createContext() y 
// el proveedor se crea como un componente que envuelve a sus hijos.
//
// =============================================================
//
import { createContext , useState} from "react";

//crear el contexto de carrito
export const CartContext = createContext();

//crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    
    // preparar todos los datos y logica del carrito
    const[cart, setCart] = useState([]); // estado del carrito

    // funciones para agregar, eliminar, limpiar el carrito, etc.

    // agregar un item al carrito
    const addItem = (item, cantidad) => {

      // verificar si el item ya está en el carrito
      if (yaEstaEnCarrito(item.id)) {
        // Por si: sumo la cantidad al item existente
        const cartActualizado = cart.map((cartItem) => {
              if (cartItem.id === item.id){
                      // cuando encuentro el id en el carrito, actualizo su cantidad 
                      return {...cartItem, quantity: cartItem.quantity + cantidad} 
                 }else{ 
                      // si no es el id que busco, lo dejo igual a ese ítem
                      return cartItem
                 }
        } )
      
        // actualizo el estado del carrito con el carrito actualizado
        setCart(cartActualizado);

      }else {
        // si es un id nuevo, lo agrego al carrito con la cantidad que viene informada      
        setCart([ ...cart, {...item, quantity:cantidad}]);
      }
    }  // fin addItem

    // eliminar un item del carrito
    const removeItem = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    }

    // borrar, limpiar el carrito completo
    const limpiarCarrito = () => {
      setCart([]);
    }

    // verificar si un id ya está en el carrito, retorna true o false
    const yaEstaEnCarrito = (id) => {
      return cart.some((item) => item.id === id);
    }

    // cantidad total de items en el carrito
    const cantidadTotal = () => { 
      return cart.reduce((acc, item) => acc += item.quantity, 0);
    }

    // precio total del carrito
    const precioTotal = () => {
      return cart.reduce((acc, item) => acc += item.precio * item.quantity, 0);
    }

    return(
      <CartContext.Provider value={{cart, addItem, removeItem, limpiarCarrito, yaEstaEnCarrito, cantidadTotal, precioTotal}}>
        {children}
      </CartContext.Provider>  
    )
}
