# Coder Shop - Proyecto de E comerce 🛒

##  Entrega final  
- Curso en CoderHouse de React Js Flex 
- Comisión 88190 Del 13/05/25 al 01/07/25 Martes  19:00 a 21:00h 
- Estudiante: **Carlos A. Santa Cruz**   
- Profesora: Laura Therisod - Tutor: Andres Rubio 

---
## Objetivos

- Desarrollar el front-end de una webapp de tipo e-commerce utilizando React JS como herramienta base para crear las distintas piezas (componentes) de la interfaz de usuario (UI).

#### Este trabajo ha servido para

- Aprender  las bases de react con javascript
- Implementar la funcionalidad de navegación entre las diferentes vistas utilizando enlaces y rutas.
- Aplicar context desarrollando la navegabilidad básica de la aplicación, permitiendo navegar desde el catálogo al detalle de cada item.
- Aprender a usar Firebase en una aplicacion

![Coder Shop](/public/ecomercePantallaInicialScz.png)

---
## Requisitos

- Implementación de React Router y creación de las distintas rutas necesarias para mostrar las vistas de nuestra app.
- División entre componentes contenedores encargados de manejar el estado y los efectos (ItemListContainer, ItemDetailContainer) y componentes de presentación, encargados del apartado visual (estructura de elementos, estilos, classNames, etc.)
- Los componentes contenedores leerán el listado de productos y  un producto de Firebase 
- Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo.
- Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente.
- Uso de context
- Uso de Firebase para guardar los productos a tratar en el sistema
- Implementación de componente ItemCount que permita seleccionar cantidad de unidades a agregar al carrito y realice las validaciones necesarias (valor mínimo, límite por stock, etc.)
- Navegación entre las secciones de catálogo, categorías, detalle, carrito y checkout, utilizando React Router y mediante enlaces en el componente NavBar.
- Navegación respetando el modelo Single Page App (sin que se generen recargas de la página del navegador)
- Mostrar el contenido del carrito dentro de un componente Cart (productos, cantidades, subtotales, totales, etc.)
- Mostrar un icono/imágen del carrito en el componente CartWidget. Debe mostrar el total de unidades agregadas al context

---
### Instalación ⚙️

1. Clone el repositorio.
2. Muevase a la carpeta creada con el comando `cd EntregaFinal`
3. Ejecute el comando `npm install` para instalar dependencias y crear la carpeta node_modules
4. Ejecute el comando `npm run dev` para levantarlo en servidor local.
5. Luego podrá acceder a la aplicación desde cualquier navegador ehn **localhost** desde [http://localhost:5173/](http://localhost:5173/)

### Version Host 

Si desea ver el proyecto online, puede ingresar al siguiente link: [CoderFlexApp]()

---
### Librerias utilizadas  📚

- [React Router Dom](https://reactrouter.com/): utilizado para implementar la navegación por rutas.
- [React Bootstrap](https://react-bootstrap.netlify.app/): utilizada para el styling de la app.
- [React Icons](https://reactrouter.com/): utilizada para iconos.
- [Firebase](https://firebase.google.com/): utilizado como base de datos.
- [React hook form](https://react-hook-form.com/): Utilizado para realizar validación de lo ingresado en formulario
- [Sweetalert](https://sweetalert2.github.io/): Para enviar mensajes mas presentables al operador. 
