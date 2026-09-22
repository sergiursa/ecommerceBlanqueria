import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const { usuario, isAuthenticated, cerrarSesion } = useAuthContext();
  const { vaciarCarrito, carrito } = useCartContext();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = React.useState(false);

  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  const manejarCerrarSesion = () => {
    setMenuAbierto(false);
    navigate("/productos");
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      <NavbarContainer className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
          <Logo to="/" className="navbar-brand" onClick={cerrarMenu}>Blanqueria</Logo>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarContent"
            aria-expanded={menuAbierto}
            aria-label="Toggle navigation"
            onClick={() => setMenuAbierto((prev) => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`} id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={cerrarMenu}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/servicios" className="nav-link" onClick={cerrarMenu}>Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productos" className="nav-link" onClick={cerrarMenu}>Productos</NavLink>
              </li>
              {usuario?.nombre === "admin" && (
                <li className="nav-item">
                  <NavLink to="/formulario-producto" className="nav-link" onClick={cerrarMenu}>Agregar Producto</NavLink>
                </li>
              )}
            </ul>

            <SeccionUsuario className="d-flex align-items-center gap-3">
              <ContenedorCarrito>
                <IconoCarrito to="/pagar" className="nav-link d-flex align-items-center" onClick={cerrarMenu}>
                  <span className="me-1">Carrito</span>
                  <FaShoppingCart />
                  {totalItemsCarrito > 0 && (
                    <ContadorCarrito>
                      {totalItemsCarrito}
                    </ContadorCarrito>
                  )}
                </IconoCarrito>
              </ContenedorCarrito>

              {isAuthenticated ? (
                <ContenedorUsuario className="d-flex align-items-center gap-3">
                  <Bienvenida>Hola, {usuario.nombre}</Bienvenida>

                  {usuario.nombre === "admin" && (
                    <NavLinkAdmin to="/dashboard" className="nav-link" onClick={cerrarMenu}>Dashboard</NavLinkAdmin>
                  )}

                  <BotonCerrarSesion onClick={manejarCerrarSesion} className="btn btn-outline-light btn-sm">
                    Cerrar Sesión
                  </BotonCerrarSesion>
                </ContenedorUsuario>
              ) : (
                <NavLink to="/iniciar-sesion" className="nav-link" onClick={cerrarMenu}>Iniciar Sesión</NavLink>
              )}
            </SeccionUsuario>
          </div>
        </div>
      </NavbarContainer>
      <NavbarSpacer />
    </>
  )
} 

export default Navbar;

// Styled Components actualizados
const NavbarContainer = styled.nav`
  background-color: #8c8d8bff !important;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  z-index: 1030;

  .navbar-collapse {
    transition: all 0.25s ease;
  }

  .navbar-toggler {
    border: 1px solid rgba(255, 255, 255, 0.8);
    padding: 0.35rem 0.6rem;
  }

  .navbar-toggler:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 991.98px) {
    .navbar-collapse {
      width: 100%;
      margin-top: 0.75rem;
      padding: 0.5rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .navbar-nav {
      width: 100%;
      gap: 0.35rem;
    }

    .nav-item {
      width: 100%;
    }

    .nav-link {
      display: block;
      width: 100%;
      padding: 0.7rem 0.9rem;
      border-radius: 8px;
    }
  }
`;

const NavbarSpacer = styled.div`
  height: 80px;

  @media (max-width: 991.98px) {
    height: 76px;
  }
`;

const Logo = styled(Link)`
  color: white !important;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
 
  &:hover {
    color: white !important;
  }
`;

// NavLink normal (para usuarios)
const NavLink = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
 
  &:hover {
    color: white !important;
    text-decoration: underline;
  }
`;

// NavLink especial para admin
const NavLinkAdmin = styled(Link)`
  color: black !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
 
  &:hover {
    color: gold !important;
    text-decoration: underline;
  }
`;

const Bienvenida = styled.span`
  color: white;
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 991.98px) {
    margin-bottom: 0.5rem;
  }
`;

const BotonCerrarSesion = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
 
  &:hover {
    background: white;
    color: #556B2F;
  }

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconoCarrito = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  gap: 5px;
 
  &:hover {
    color: gold !important;
  }
`;

const ContadorCarrito = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const SeccionUsuario = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 991.98px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    margin-top: 0.75rem;
    width: 100%;
  }
`;

const ContenedorUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    width: 100%;
  }
`;