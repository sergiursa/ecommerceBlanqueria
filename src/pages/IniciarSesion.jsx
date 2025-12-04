/*import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Verificar credenciales (admin/1234@admin)
    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      // Guarda el email ingresado y pasa nombre para el token admin
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion("admin", formulario.email);
      navigate("/dashboard");
    }
    // Lógica para usuarios normales - SOLO si NO es admin
    else if (
      formulario.nombre &&
      formulario.email &&
      formulario.nombre !== "admin"
    ) {
      // Guarda el email ingresado y pasa nombre para el token user
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion(formulario.nombre, formulario.email);

      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate("/productos");
      }
    } else {
      alert(
        "Credenciales de administrador incorrectas. Usa: admin / 1234@admin"
      );
    }
  };

  return (
    <div className="form-container">
      <h1>Inicia sesión para continuar</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) =>
            setFormulario({ ...formulario, nombre: e.target.value })
          }
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) =>
            setFormulario({ ...formulario, email: e.target.value })
          }
          required
        />
        <div className="button-container">
          <button type="submit">Iniciar Sesión</button>
          <strong> </strong>
          <button type="button" onClick={() => navigate("/productos")}>
            Cancelar
          </button>
        </div>
      
      </form>
      <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        <strong>Credenciales de prueba para Dashboard:</strong>
        <br />
        Nombre: admin
        <br />
        Email: 1234@admin
      </p>
    </div>
  );
}*/

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


export default function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const [formulario, setFormulario] = useState({ nombre: "", email: "" });

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    // Simular una pequeña demora para mejor experiencia de usuario
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      // Verificar credenciales (admin/1234@admin)
      if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
        localStorage.setItem("authEmail", formulario.email);
        iniciarSesion("admin", formulario.email);
        navigate("/dashboard");
      }
      // Lógica para usuarios normales - SOLO si NO es admin
      else if (
        formulario.nombre &&
        formulario.email &&
        formulario.nombre !== "admin"
      ) {
        localStorage.setItem("authEmail", formulario.email);
        iniciarSesion(formulario.nombre, formulario.email);

        // Si venía del carrito, redirige a pagar
        if (ubicacion.state?.carrito) {
          navigate("/pagar", { state: { carrito: ubicacion.state.carrito } });
        } else {
          navigate("/productos");
        }
      } else {
        setError("Credenciales incorrectas. Para administrador use: admin / 1234@admin");
      }
    } catch (err) {
      setError("Ocurrió un error al iniciar sesión. Intente nuevamente.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Inicia Sesión</h1>
          <p>Ingresa tus datos para continuar</p>
        </div>
        
        {error && (
          <div className="error-message" style={{display: 'block'}}>
            {error}
          </div>
        )}
        
        <form onSubmit={manejarEnvio} className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre completo"
              className="form-input"
              value={formulario.nombre}
              onChange={(e) =>
                setFormulario({ ...formulario, nombre: e.target.value })
              }
              required
              disabled={cargando}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-input"
              value={formulario.email}
              onChange={(e) =>
                setFormulario({ ...formulario, email: e.target.value })
              }
              required
              disabled={cargando}
            />
          </div>
          
          <div className="form-actions">
            <button 
              type="submit" 
              className={`btn btn-primary ${cargando ? 'btn-loading' : ''}`}
              disabled={cargando}
            >
              {cargando ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
            </button>
            
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigate("/productos")}
              disabled={cargando}
            >
              Cancelar
            </button>
          </div>
        </form>
        
        <div className="credentials-info">
          <h4>Credenciales de prueba para Dashboard:</h4>
          <p><strong>Nombre:</strong> admin</p>
          <p><strong>Email:</strong> 1234@admin</p>
          <p style={{ fontSize: "12px", marginTop: "10px", color: "#888" }}>
            Para usuarios normales, ingrese cualquier nombre (excepto "admin") y un email válido.
          </p>
        </div>
      </div>
    </div>
  );
}
