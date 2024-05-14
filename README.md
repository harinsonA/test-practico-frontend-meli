# Test Práctico - Frontend

Este repositorio consiste en un test de Frontend realizado por mi persona el cual esta divido en dos partes:

1. **Client**: Una aplicación Frontend desarrollada con React y TypeScript, utilizando Vite como herramienta de construcción. Esta parte de la aplicación se encarga de la interfaz de usuario y la interacción con ellos.

2. **Server**: Un servidor Backend desarrollado con Node.js y Express. Esta parte maneja las APIs que el cliente consume para acceder a los datos.

## Requisitos Previos

Antes de instalar y ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [**Node**](https://nodejs.org/en): es recomendable tener la versión LTS de Node.js `versión usada *20.10.0*`.
- **npm**: viene incluido en Node.js. Asegúrate de tener la versión actualizada.
- [**Git**](https://git-scm.com/): es necesario para clonar el repositorio.
- **Editor de Código**: Te recomiendo usar un editor de código como [**Visual Studio Code**](https://code.visualstudio.com/), o de tu preferencia.

## Ejecución

Para el correcto funcionamiento del proyecto es necesario seguir el orden de los siguientes pasos, donde primero vamos a instalar el **Server** y ejecutarlo, seguido, instalar el **Client** e inicializarlo.

## Instalación

Para instalar y ejecutar este proyecto sigue los siguientes pasos:

1. Necesitarás una carpeta vacía en tu máquina local donde se va a alojar este proyecto.

2. Despliega la terminal y asegúrate de estar posicionado en la carpeta que va a alojar el proyecto.

3. Clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/harinsonA/test-practico-frontend-meli.git
```

4. Una vez clonado el repositorio puedes proceder abrir el proyecto con tu editor de código de preferencia, no es necesario aún ingresar a las carpetas client o server. Si estás usando **VS Code** puedes usar el siguiente comando para abrirlo:

```bash
code ./
```

### Server (Node.js + Express)

5. Desde la terminal navega al directorio **server**:

```bash
cd test-practico-frontend-meli
cd server
```

6. Instala las dependencias:

```bash
npm install
```

7. Inicia el servidor:

```bash
npm run dev
```

¡Listo! Ya has inicializado el servidor, desde la terminal podrás observar en qué puerto está corriendo:

```bash
El servidor esta escuchando en el puerto 3001...
```

Si necesitas cambiar el puerto puedes hacerlo siguiendo la siguiente ruta:

```bash
server/
├── src/
    ├── app.js

const PUERTO = 3001; <---- cambia esta variable
```

### Client (React + TypeScript + Vite)

8. Abre otra terminal y navega al directorio **client**:
   `**Nota: recuerda estar posicionado en la raíz del proyecto (test-practico-frontend-meli).`

```bash
cd client
```

9. Instala las dependencias:

```bash
npm install
```

10. Inicia la aplicación:

```bash
npm run dev
```

¡Listo! Ya has inicializado el cliente, desde la terminal observarás la URL a ingresar del proyecto:

```bash
Local:   http://localhost:5173/
```

## Autor

- [@harinsonA.](https://github.com/harinsonA)
- [CV.](https://harinsonarellan.netlify.app/)
