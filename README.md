# Frontend Simple Project

Para levantar este frontend necesitas lo siguiente
# Requisitos

Para este proyecto necesitas tener instalado lo siguiente:

- React
- Vite 
- Tailwind
- dotenv


## Configuración

Para configurar este proyecto de forma local sigue estas instrucciones:

1. Clona el proyecto de Git:
   ```
   $ git clone
   ```
2. Instala las dependencias con NPM:
   ```
   $ npm install
   ```
3. Crea  un archivo `.env` con las credenciales:
   ```
   VITE_BACKEND_URL
   ```
4. Ejecuta el proyecto con el siguiente comando:
   ```
   $ npm run dev:start
   ```



**Almacenamiento:**  Necesitamos una implementación de base de datos MongoDB.

**Nota:** A continuacion se presenta una tabla con algunos ejemplosde los  endpoints que se pueden llamar:



| Route | HTTP Verb | Route Middleware |Description |
| --- | --- | --- |---|
|/api/proyectos| GET |checkAuth() |Get all list of projects |
|/api/proyectos/:id | GET | checkAuth() |Get a single list of projects |
| /api/proyectos/:id| 	DELETE | checkAuth() |Deletes a list of projects|


Debido a la necesidad de tener un servicio de email que pueda corroborar la identidad del usuario se han creado dos cuentas para que se pueda verficar la funcionalidad de la aplicacion:


| Usuario 1 |admin@sp.com |clave:123456|
| --- | --- |---|
| Usuario 2 |user1@sp.com |clave:123456|










Para detener el script ejecuta `Ctr+C`:

```
[nodemon] starting `node index.js`
MONGODB connected
```

Para ejecutar las pruebas automatizadas utiliza este comando:

```
$ npm test
```

Las pruebas del sistema se ejecutan con un comando a parte porque son lentas:

```
$ npm run test:system
```

# Tecnologías

Este proyecto está construído con las siguientes tecnologías:

- [axios](https://axios-http.com/docs/intro) Backend.
- [Tailwind](https://tailwindcss.com/) 
- [REACT](https://reactjs.org/) 
- [Vite](https://vitejs.dev/) 
