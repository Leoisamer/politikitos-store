🐣 Politikitos Store

Descripción

**Politikitos Store** es un e-commerce desarrollado con **React** como proyecto final de la cursada de Front-End.

La aplicación permite explorar un catálogo de Politikitos (mascotas virtuales satíricas inspiradas en personajes de la política), visualizar el detalle de cada uno, agregarlos al carrito, aplicar cupones de descuento y finalizar una adopción virtual. Además, cuenta con un panel de administración conectado a Firebase para gestionar el contenido del sitio.

Tecnologías utilizadas

* React
* Vite
* React Router DOM
* Firebase Authentication
* Cloud Firestore
* Context API
* CSS Modules
* JavaScript (ES6)

Funcionalidades

* 🛍️ Catálogo de Politikitos.
* 📄 Vista de detalle de cada producto.
* 🛒 Carrito de compras con control de cantidades.
* 🎟️ Aplicación de cupones de descuento almacenados en Firestore.
* 📝 Registro de órdenes de adopción en Firebase.
* 📬 Formulario de solicitudes de adopción con almacenamiento en Firestore.
* 🔐 Autenticación de administrador mediante Firebase Authentication.
* 📦 Panel de administración de productos (CRUD).
* 🎫 Panel de administración de cupones (CRUD).
* 🐣 Panel de administración de solicitudes de adopción.
* 🎬 Vista previa mediante videos al pasar el cursor sobre los Politikitos.
* 📱 Diseño responsive.
* 🧭 Navegación mediante React Router.

Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Leoisamer/politikitos-store.git
```

Ingresar al proyecto:

```bash
cd politikitos-store
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Configuración de Firebase

Para ejecutar el proyecto es necesario crear un archivo `.env` con las credenciales de Firebase.

```env
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
```

Estructura general del proyecto

```text
src/
│
├── componentes/
├── context/
├── firebase/
├── pages/
├── routes/
└── assets/
```

Próximas mejoras

* Integración con pasarela de pagos.
* Gestión de stock en tiempo real.
* Búsqueda y filtrado de productos.
* Panel de estadísticas para el administrador.
* Animaciones y mayor interacción con las mascotas virtuales.
* Lanzamiento de la versión comercial de Politikitos.

Aviso

**Politikitos Store** es un proyecto académico desarrollado con fines educativos y de entretenimiento. Los personajes presentados son ficticios y forman parte de una propuesta de humor satírico. Cualquier semejanza con personas reales constituye una representación humorística sin intención de afectar derechos o reputaciones.

Autora

Leoisamer Gil

Proyecto desarrollado como trabajo final del curso de React.

