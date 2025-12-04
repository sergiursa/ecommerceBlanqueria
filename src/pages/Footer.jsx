/*import React from 'react'

function Footer() {
  return (
    <footer>
        <hr />
        <p>Desarrolo: saus1@hotmail.com</p>
    </footer>
  )
}

export default Footer*/
import React from 'react';

function Footer() {
  // Información del programador
  const programador = {
    nombre: "Sergio Urbano",
    email: "saus1@hotmail.com",
    rol: "Desarrollador"
  };

  // Información de la empresa
  const empresa = {
    nombre: "Entrega Inmediata",
    email: "contacto@entregainmediata.com",
    telefono: "+1 (555) 123-4567",
    slogan: "Soluciones rápidas y eficientes"
  };

  return (
    <footer className="footer-container">
      <div className="footer-wave"></div>
      
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Textil Argentina</h3>
          <p className="empresa-nombre">{empresa.nombre}</p>
          <p className="empresa-slogan">{empresa.slogan}</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href={`mailto:${empresa.email}`} className="contact-link">
                {empresa.email}
              </a>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href={`tel:${empresa.telefono.replace(/\D/g, '')}`} className="contact-link">
                {empresa.telefono}
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contacto del Desarrollador</h3>
          <div className="developer-info">
            <div className="developer-avatar">
              {programador.nombre.charAt(0)}
            </div>
            <div className="developer-details">
              <p className="developer-name">{programador.nombre}</p>
              <p className="developer-role">{programador.rol}</p>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href={`mailto:${programador.email}`} className="contact-link">
                  {programador.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <hr className="footer-separator" />
        <p className="footer-copyright">
          © {new Date().getFullYear()} {empresa.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;