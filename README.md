# Blanqueria

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/WhatsApp-Compra-25D366?style=for-the-badge&logo=whatsapp" alt="WhatsApp" />
</div>

Blanqueria es una tienda online especializada en productos para el hogar, descanso y confort. Su propósito es ofrecer una experiencia de compra elegante, simple y funcional, con foco en la presentación del catálogo y la conversión comercial.

## ✨ Descripción

La aplicación permite a los usuarios:

- explorar una landing page con identidad de marca
- visualizar el catálogo de productos
- acceder al detalle de cada artículo
- agregar productos al carrito
- iniciar sesión y gestionar su compra
- completar la orden desde una pantalla dedicada
- confirmar el pedido directamente por WhatsApp
- gestionar el catálogo desde un panel administrativo

## 🛠️ Stack tecnológico

- React
- Vite
- React Router
- Bootstrap
- Styled Components
- React Icons
- Context API

## 🧩 Funcionalidades principales

### Catálogo de productos
La tienda muestra productos con imagen, descripción, precio y acceso a una vista detallada para mejorar la navegación y la decisión de compra.

### Carrito y checkout
El usuario puede sumar artículos, revisar cantidades y realizar la compra de forma ágil y ordenada.

### Autenticación
Incluye un flujo de login con protección de rutas para usuarios autenticados y administradores.

### Panel administrativo
El usuario administrador puede:

- crear nuevos productos
- editar productos existentes
- eliminar artículos del catálogo
- gestionar la tienda desde un dashboard

### Compra por WhatsApp
Al finalizar la compra, la app arma un mensaje con el detalle del pedido y el total para enviarlo por WhatsApp, facilitando la confirmación comercial.

## 📦 Requisitos

- Node.js 18+
- npm

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Generar la build de producción:

```bash
npm run build
```

## 📁 Estructura del proyecto

- src/pages: páginas principales de la aplicación
- src/components: formularios y componentes reutilizables
- src/context: estado global de autenticación, carrito y productos
- src/assets: recursos gráficos y datos del catálogo

## ⚠️ Consideración importante

La compra se gestiona mediante WhatsApp, por lo que el número del negocio debe configurarse correctamente en la pantalla de pago para operar con el contacto real.

## ✅ Estado del proyecto

Proyecto funcional para e-commerce de artículos para el hogar, con flujo de compra, autenticación, administración y comunicación comercial vía WhatsApp.
