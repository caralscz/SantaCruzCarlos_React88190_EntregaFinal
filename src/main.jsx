//  import { StrictMode } from 'react'  // quitamos para las pruebas porque renderiza dos veces ¿?
import { createRoot } from 'react-dom/client'
// import './index.css'                 // manejamos el css desde css/style.css (colocado en App.jsx)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // quitamos para las pruebas porque renderiza dos veces ¿?
    <App />,
  // </StrictMode> // quitamos para las pruebas porque renderiza dos veces ¿?
)
