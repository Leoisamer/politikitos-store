🐾 Politikitos Store

E-commerce de mascotas virtuales inspirado en personajes políticos ficticios

Descripción del Proyecto

**Politikitos Store** es un e-commerce desarrollado como proyecto final para la cursada de React JS.

La aplicación permite explorar un catálogo de mascotas virtuales ficticias, visualizar sus características y realizar una simulación de compra mediante un carrito de productos.

El proyecto combina conceptos fundamentales de React como componentes reutilizables, manejo de estados, rutas, contexto global y consumo de datos.

Demo

🔗 Link del proyecto desplegado:

(Agregar aquí el link de Netlify)

Tecnologías utilizadas

- React JS
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Context API


Funcionalidades

Catálogo de productos

- Visualización de productos disponibles.
- Filtrado por categorías.
- Información detallada de cada mascota.

Detalle de producto

Cada producto cuenta con:

- Imagen.
- Nombre.
- Descripción.
- Precio.
- Selector de cantidad.

Carrito de compras

Permite:

- Agregar productos.
- Modificar cantidades.
- Eliminar productos.
- Visualizar el total de compra.

Checkout

Formulario para completar los datos del comprador y generar una orden de compra.



Estructura del Proyecto
src
│
├── assets
│
├── components
│ ├── Carrito 
│ │   ├── CartWidget.jsx
│ │   └── CartWidget.module.css  
│ ├── Formulario
│ │   ├── Checkout.jsx
│ │   ├── Formulario.jsx
│ │   └── Formulario.module.css
│ ├── Layout
│ │   ├── Footer.jsx
│ │   ├── Footer.module.css
│ │   ├── Header.jsx
│ │   ├── Header.module.css
│ │   ├── Layout.jsx
│ │   ├── Layout.module.css
│ │   ├── NavBar.jsx
│ │   └── NavBar.module.css
│ ├── Productos
│ │   ├── Item.jsx
│ │   ├── Item.module.jsx
│ │   ├── ItemList.jsx
│ │   ├── ItemList.module.css
│ │   ├── ItemListContainer.jsx
│ │   ├── ItemListContainer.module.css
│ │   ├── ProductoDetalle.jsx
│ │   └── ProductoDetalle.module.css
│ └── ProtectedRoute.jsx
├── context
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── data
│   └── productos.json
├── firebase
│   ├── config.js
│   └── subirProductos.js
├── pages
│   ├── Admin.jsx
│   ├── Carrito.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── OrdenExitoda.jsx
│   └── Productos.jsx
├── styles
│   └── brandings.css
├── App.css
├── App.jsx
├── index.css
├── main.jsx

