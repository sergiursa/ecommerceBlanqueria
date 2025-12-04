
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { usuario, cerrarSesion } = useAuthContext();
  const navigate = useNavigate();

  // Obtener el token actual
  const tokenActual = localStorage.getItem('authToken');

  // Función para navegar al formulario de agregar producto
  const manejarAgregarProducto = () => {
    navigate('/formulario-producto');
  };

  // Función para copiar el token al portapapeles
  const copiarToken = () => {
    navigator.clipboard.writeText(tokenActual)
      .then(() => {
        alert('Token copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar el token:', err);
      });
  };

  return (
    <div className="dashboard">
      <h1>Dashboard Administrativo</h1>
      
      <div className="dashboardContainer">
        {/* Información del usuario */}
        <div className="userInfo">
          <div>
            <p><strong>Sesión iniciada como:</strong> {usuario.nombre}</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.9, marginTop: '0.5rem' }}>
              <strong>Rol:</strong> {usuario.rol || 'Administrador'}
            </p>
          </div>
          <div style={{ fontSize: '1.5rem' }}>
            👨‍💼
          </div>
        </div>

        {/* Sección del token */}
        <div className="tokenSection">
          <h3>Token de Autenticación</h3>
          <div className="tokenDisplay">
            {tokenActual ? (
              <>
                <code>{tokenActual}</code>
                <button 
                  onClick={copiarToken}
                  style={{
                    marginTop: '10px',
                    padding: '5px 10px',
                    background: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  📋 Copiar Token
                </button>
              </>
            ) : (
              <span style={{ color: '#e74c3c' }}>No hay token disponible</span>
            )}
          </div>
        </div>

        {/* Sección de acciones */}
        <div className="actionsSection">
          <h3>Acciones Rápidas</h3>
          <div className="actionsGrid">
            <button
              onClick={manejarAgregarProducto}
              className="actionButton btnAdd"
            >
              <span className="icon">➕</span>
              <span>Agregar Productos</span>
            </button>
           
            <Link
              to="/productos"
              className="actionButton btnEdit"
            >
              <span className="icon">✏️</span>
              <span>Gestionar Productos</span>
            </Link>
          </div>
        </div>

        <div className="divider"></div>

        {/* Botón de cerrar sesión */}
        <button
          onClick={cerrarSesion}
          className="btnLogout"
        >
          <span className="icon">🚪</span>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
}