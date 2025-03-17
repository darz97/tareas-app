# 📌 Proyecto de Gestión de Tareas

## 🏗 Arquitectura del Proyecto

Este proyecto sigue una **arquitectura modular** basada en tres capas principales: **Core**, **Features** y **Shared**. Esta arquitectura permite una mejor organización, escalabilidad y reutilización del código.

### 🔹 **Core**

La carpeta `Core` contiene toda la lógica central del proyecto. En este caso, incluye componentes globales como el `header` y el `main`, además de:

Si el proyecto escala, esta carpeta también se encargará de contener todos estos elementos y otros aspectos fundamentales del sistema, asegurando una arquitectura bien organizada y mantenible.

- **Servicios globales**: Servicios compartidos que manejan lógica de negocio.
- **Interceptors**: Manejo de peticiones HTTP y autenticación.
- **Guardas de rutas**: Protege ciertas rutas según el estado del usuario.

📌 **Beneficio**: Separa la lógica de negocio para que pueda ser usada en múltiples módulos sin duplicación de código.

### 🔹 **Features**

Aquí se agrupan los diferentes módulos funcionales de la aplicación. En este caso, cada módulo representa una **funcionalidad específica**:

- **Gestión de Tareas** (`gestion-tareas`): Contiene componentes y servicios relacionados con la administración de tareas.

📌 **Beneficio**: Permite escalar el proyecto fácilmente, agregando o eliminando módulos sin afectar el código central.

### 🔹 **Shared**

La carpeta `Shared` almacena **componentes, pipes, directivas y utilidades** reutilizables en toda la aplicación. Incluye:

- **Componentes compartidos**: Como formularios reutilizables, botones personalizados, etc.
- **Pipes**: Transformaciones personalizadas.
- **Utilidades**: Funciones comunes como alertas o manejo de modales.

📌 **Beneficio**: Evita la repetición de código y mejora la mantenibilidad del proyecto.

---

## 📦 Dependencias Utilizadas

### 🔹 **SweetAlert2** (Mensajes Emergentes)

- Se utiliza para mostrar alertas elegantes y personalizadas.
- Permite diálogos de confirmación y notificaciones visualmente atractivas.
- Se integra fácilmente con Angular.

📌 **Instalación**: `npm install sweetalert2`

### 🔹 **ngx-spinner** (Indicador de Carga)

- Se usa para mostrar un `spinner` cuando se realizan operaciones como carga de datos o peticiones HTTP.
- Mejora la experiencia del usuario indicando que la aplicación está procesando una acción.

📌 **Instalación**: `npm install ngx-spinner`

### 🔹 **Bootstrap 5** (Diseño y Estilos)

- Se usa para estilizar la aplicación de manera responsiva y con diseño moderno.
- Facilita la construcción de interfaces con un sistema de grillas y componentes reutilizables.

📌 **Instalación**: `npm install bootstrap`

### 🔹 **Firebase** (Backend as a Service)

- Se utiliza Firebase como backend para la gestión de datos.
- Proporciona autenticación, almacenamiento en Firestore y hosting.
- Se eligió debido a la experiencia previa del equipo con esta herramienta.

📌 **Instalación**: `npm install firebase @angular/fire`

---

## ☁️ Backend as a Service: **Firebase**

El backend de esta aplicación está completamente basado en **Firebase**, lo que permite:

- **Base de datos en tiempo real** con **Firestore**.
- **Autenticación segura** con Google, correo/contraseña, etc.
- **Hosting integrado** para desplegar la aplicación sin necesidad de servidores adicionales.

📌 **Razón de uso**: Se seleccionó Firebase por su facilidad de integración con Angular y por los conocimientos previos del equipo.

---

## 🚀 Despliegue con Firebase

Para desplegar la aplicación, se utilizó **Firebase Hosting**, lo que permite:

- **Despliegue rápido** con un solo comando.
- **Certificados SSL gratuitos** incluidos.
- **Integración con CI/CD** para automatizar actualizaciones.

### 🔹 **Pasos para desplegar**

1. Instalar Firebase CLI:
   ```sh
   npm install -g firebase-tools
   ```
2. Iniciar sesión en Firebase:
   ```sh
   firebase login
   ```
3. Inicializar el proyecto en Firebase:
   ```sh
   firebase init
   ```
4. Construir el proyecto en Angular:
   ```sh
   ng build --prod
   ```
5. Desplegar en Firebase:
   ```sh
   firebase deploy
   ```

📌 **Razón de uso**: Se utilizó Firebase Hosting porque se está aprovechando todo el kit de herramientas de Firebase para el backend.

---

## 📜 **Conclusión**

Este proyecto sigue una arquitectura modular bien estructurada (**Core, Features, Shared**) que facilita la escalabilidad y mantenimiento. Se integraron dependencias clave como **SweetAlert2**, **ngx-spinner**, **Bootstrap 5** y **Firebase**, asegurando una experiencia de usuario fluida y una implementación eficiente del backend.

Además, el despliegue con **Firebase Hosting** simplifica la publicación de la aplicación sin necesidad de infraestructura adicional. 🚀
