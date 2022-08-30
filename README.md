# Aplicacion del clima

Aplicación realizada con ReactJs / Redux Sagas y Chakra UI consumiendo la api de https://openweathermap.org/api

##               Pasos para levantar el aplicativo de forma local

## Docker :
- Dentro del directorio raiz del repositorio, en el cual se encuentra el archivo docker-compose.yml, ejecutar el siguiente comando para crear el contenedor.

```bash
docker-compose build
```
- Una vez creado el mismo, ejecutar el siguiente comando para levantar el contenedor con el aplicativo, este correra en el puerto 3000

```bash
docker-compose up
```
## De forma manual
- Dentro de la carpeta frontend, ejecutar el siguiente comando para instalar dependencias
```bash
npm i
```
- Luego, levantar la aplicación con el siguiente comando. El mismo correra en el puerto 3000
```bash
npm start
```

### Anotaciones:
- Se debio configurar un proxy de forma local para solucionar problema de CORS, el mismo impide que la aplicación funcione de forma correcta en plataformas como Heroku, Vercel, etc.

