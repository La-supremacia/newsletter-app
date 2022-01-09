
# Monorepo newsletter-app

## Inicializando el proyecto como un monorepo:

En la carpeta raíz, ejecutar el comando ```npm i```, esto se encargará de instalar todas las dependencias necesarias para ambos proyectos del repo.

## Como correr el monorepo:

En el root de la aplicación, si es la primera vez que ejecutas este comando, deberás crear la build de react primero (pues la api sirve los archivos estáticos en la ruta raíz), por ello:
```npm run build```
Luego, teniendo la app buildeada, procedemos a inicializar el monorepo:
``
npm run start
``

## Como correr los proyectos por individual:

En la carpeta del proyecto que quieras correr (sea react o node), encontrarás el package.json con los comandos usuales de estas apps
```npm run start``` 

### Notas adicionales:
* La app de react en development está configurada con un proxy para conectarse al servicio de node en el puerto *4000*, por ello, deberás crear el .env apuntando a ese puerto en la carpeta del proyecto **api-gateway**
