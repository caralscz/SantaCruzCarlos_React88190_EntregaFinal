// =============================================================
//
// Barra de navegación  con  bootstrap
// Lo llamamos en App.jsx y queda fijo en todas las páginas 
// allí tiene definida la navegacion de (por ejemplo), los productos por categoría
//      Route path='/categoria/:idCategoria' element={<ItemListContainer...
//
// =============================================================

import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import IngresarWidget from './IngresarWidget';
import LogoShop from './LogoShop';
import CartWidget from "./CartWidget"
 
const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary contenedorHeader">
      <Container>
        <LogoShop />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categoria/RopaBebe'>Ropa Bebe</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categoria/RopaMujer'>Ropa Mujer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categoria/RopaHombre'>Ropa Hombre</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categoria/Herramientas'>Herramientas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/contactenos'>Contactenos</Nav.Link>
            <Nav.Link as={NavLink} to='/nosotros'>Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to='/carrito' title="Ver carrito"><CartWidget /></Nav.Link>
          </Nav>
          <IngresarWidget />
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar
 
