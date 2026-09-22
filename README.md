# Blanqueria

E-commerce de productos para hogar y descanso, desarrollado con React + Vite.

## ¿Qué hace esta aplicación?

La aplicación permite:

- ver una página de inicio con presentación de la marca
- navegar por productos y ver detalle de cada uno
- agregar artículos al carrito de compras
- iniciar sesión como usuario
- completar la compra desde una pantalla de pago
- abrir WhatsApp con el pedido preparado para confirmar la compra
- acceder al panel de administración para gestionar productos
- crear, editar y eliminar productos desde el dashboard

## Tecnologías usadas

- React
- Vite
- React Router
- Bootstrap
- Styled Components
- React Icons
- React Toastify

## Funcionalidades principales

### Catálogo de productos
La tienda muestra una lista de productos con imagen, nombre, descripción y precio. También permite acceder al detalle de cada producto.

### Carrito de compras
El usuario puede sumar productos, ver el total y continuar con la compra.

### Autenticación
Incluye flujo de login y protección de rutas para usuarios autenticados y administradores.

### Panel administrativo
El usuario admin puede:

- ver el dashboard
- agregar nuevos productos
- editar productos existentes
- eliminar productos

### Compra
Al confirmar la compra, se prepara un mensaje con los productos y el total para enviar por WhatsApp.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Para compilar para producción:

```bash
npm run build
```

## Estructura principal

- src/pages: páginas principales de la app
- src/components: formularios y gestión de productos
- src/context: contexto de autenticación, carrito y productos
- src/assets: datos de productos

## Nota

La compra se coordina por WhatsApp, por lo que en el archivo de pago se debe configurar el número real del negocio.
