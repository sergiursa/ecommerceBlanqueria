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
  const empresa = {
    nombre: "Blanqueria",
    email: "contacto@blanqueria.com",
    telefono: "+54 9 11 2345-6789",
    slogan: "Calidad, frescura y atención rápida"
  };

  const redesSociales = [
    { nombre: 'Instagram', url: 'https://instagram.com', icon: '◎' },
    { nombre: 'Facebook', url: 'https://facebook.com', icon: '◌' },
    { nombre: 'WhatsApp', url: 'https://wa.me/5491123456789', icon: '◍' }
  ];

  return (
    <footer className="footer-container">
      <div className="footer-wave"></div>

      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Nuestra empresa</h3>
          <p className="empresa-nombre">{empresa.nombre}</p>
          <p className="empresa-slogan">{empresa.slogan}</p>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M3 7.75A2.75 2.75 0 0 1 5.75 5h12.5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25v-8.5Zm2.1-.25 6.9 5.08a1 1 0 0 0 1.2 0L18.9 7.5H5.1Zm14.15 1.38-5.74 4.23a3 3 0 0 1-3.62 0L4.75 8.88v7.37c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V8.88Z"/></svg>
              </span>
              <a href={`mailto:${empresa.email}`} className="contact-link">
                {empresa.email}
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.6 10.8a15.4 15.4 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.23.2 2.44.57 3.56a1 1 0 0 1-.25 1l-2.22 2.24Z"/></svg>
              </span>
              <a href={`tel:${empresa.telefono.replace(/\D/g, '')}`} className="contact-link">
                {empresa.telefono}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-section">
          <h3 className="footer-title">Seguinos</h3>
          <p className="empresa-slogan">Conectate con nuestra marca y enterate de nuevas colecciones.</p>

          <div className="social-links">
            {redesSociales.map((red) => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label={red.nombre}
                title={red.nombre}
              >
                <span>{red.icon}</span>
              </a>
            ))}
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