import { useState } from 'react'
import './css/style.css'

{  /* The following line can be included in your src/index.js or App.js file */ }
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import Contactenos from './components/Contactenos';
import Nosotros from './components/Nosotros';
import Ingresar from './components/Ingresar';
import CartContainer from './components/CartContainer';
import FinalizarCompra from './components/FinalizarCompra';

// Contexto : defino para dar acceso a los componentes hijos
// a los datos del carrito de compras
import { CartProvider } from './context/CartContext';

function App() {
  return (

    <BrowserRouter>

      <CartProvider>
        { /* El CartProvider envuelve a todos los componentes hijos */}
        { /* y les da acceso a los datos del carrito de compras */}
        <NavBar />

        <Routes>
          <Route path='/' element={
            <ItemListContainer saludo1="Bienvenido"
              saludo2="Catalogo de productos"   />
          } />
          <Route path='/categoria/:categNom' element={      
            <ItemListContainer saludo1="Lista por categoria "  />
          } />
          <Route path='/Item/:idProd' element={<ItemDetailContainer />} />    {/* <p>Un solo producto, metodo 1 </p>  */}
          <Route path='/contactenos' element={<Contactenos />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/ingresar' element={<Ingresar />} />
          <Route path='/carrito' element={<CartContainer />} />
          <Route path='/finalizar' element={<FinalizarCompra />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <Footer />
      </CartProvider>  { /* El CartProvider les da acceso a los datos del carrito de compras */}

    </BrowserRouter>

  )
}

export default App
