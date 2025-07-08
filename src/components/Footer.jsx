// =============================================================
//
// Footer.jsx
// Es llamada en App.jsx 
// Para mostrar el pie de página en TODAS las paginas de la aplicacion
//
// =============================================================
import React from 'react'
import LogoShop from './LogoShop'


const Footer = () => {
  return (
    <footer className="contenedor contenedorFooter">
        <div className="footerDivLogo">
            
              <LogoShop />  

        </div>
        <div className="footerDivTexto">
            <p>Estudiando React Js | CoderHouse - Entrega final | e-comerce | junio 2025<br/>
               Desarrollado por Carlos A. santa Cruz © <br/>
               Comisión 88190 - Del 13/05/25 al 01/07/25 - Martes  19:00 a 21:00h<br/>
               Profesora CoderHouse : Laura Therisod<br/>
               Adjunto o tutor CoderHouse: Andres Rubio<br/>
            </p>
        </div>

    </footer>

 ) }

export default Footer
