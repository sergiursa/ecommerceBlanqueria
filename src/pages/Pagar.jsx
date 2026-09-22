import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

const NUMERO_WHATSAPP = "5491163743346"; // Número en formato internacional sin signos ni espacios

export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

  const tokenActual = localStorage.getItem('authToken');

  // Función para finalizar compra
  const comprar = () => {
    if (!carrito.length) return;

    const mensaje = [
      "Hola, quiero confirmar mi compra:",
      ...carrito.map((producto) => {
        const cantidad = Number(producto.cantidad || 1);
        const precio = Number(producto.precio || 0);
        return `- ${producto.nombre} x${cantidad} - $${(cantidad * precio).toFixed(3)}`;
      }),
      "",
      `Total: $${Number(total).toFixed(3)}`,
      `Cliente: ${usuario?.nombre || "Cliente"}`,
    ].join("\n");

    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    window.open(urlWhatsApp, "_blank");
    vaciarCarrito();
    navigate("/productos");
  };

  return (
    <div className="pagar-container">
      <header className="pagar-header">
        <div className="user-info">
          <h2>Hola, {usuario.nombre}</h2>
          <p className="user-email">Email: {usuario.email}</p>
        </div>
        
        {/* Token en formato más elegante */}
        <div className="token-section">
          <h3>Token de sesión</h3>
          <div className="token-display">
            <code>{tokenActual}</code>
          </div>
        </div>
        
        <button className="logout-btn" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </header>

      <main className="pagar-main">
        <div className="cart-section">
          <h2 className="section-title">Tu compra</h2>
          
          {carrito.length > 0 ? (
            <>
              <div className="cart-items">
                {carrito.map((producto) => {
                  const cantidad = Number(producto.cantidad || 1);
                  const precioUnitario = Number(producto.precio || 0);
                  const subtotal = cantidad * precioUnitario;
                  return (
                    <div key={producto.id} className="cart-item">
                      <div className="product-image">
                        <img src={producto.avatar} alt={producto.nombre} />
                      </div>
                      <div className="product-details">
                        <h3 className="product-name">{producto.nombre}</h3>
                        <div className="product-info">
                          <span>Precio unidad: <strong>${Number(precioUnitario).toFixed(3)}</strong></span>
                          <span>Cantidad: <strong>{cantidad}</strong></span>
                        </div>
                        <div className="product-subtotal">
                          Subtotal: <strong>${Number(subtotal).toFixed(3)}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="cart-summary">
                <div className="total-section">
                  <h3>Total a pagar:</h3>
                  <div className="total-amount">${Number(total).toFixed(3)}</div>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-cart">
              <p>No hay productos en el carrito</p>
              <button className="primary-btn" onClick={() => navigate("/productos")}>
                Ver productos
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="pagar-footer">
        {carrito.length > 0 ? (
          <>
            <div className="action-buttons">
              <button className="secondary-btn" onClick={() => navigate("/productos")}>
                Seguir comprando
              </button>
              <button className="danger-btn" onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
              <button className="primary-btn confirm-btn" onClick={comprar}>
                Confirmar y pagar
              </button>
            </div>
            <p className="payment-info">
              <i className="info-icon">ℹ️</i> Al confirmar, se abrirá WhatsApp para coordinar la compra y el pago.
            </p>
          </>
        ) : (
          <div className="action-buttons">
            <button className="primary-btn" onClick={() => navigate("/productos")}>
              Volver a productos
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}


