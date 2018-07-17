# Intalacion EasyCreadit

Este proyecto esta dividido en dos partes front-end y back-end por que la instalacion en entornos de desarrollo se va a dividir en dos.

## Instalacion back-end

Dirigete a la raiz del projecto en node el cual esta en la carpeta "back"
 
EasyCredit > back 

una vez en raiz ejecuta el comando npm install para instalar todas las dependencias del proyecto esto puede demorar unos minutos

```console
npm install
```
Depues de esto sigue acondicionar la base de datos se ocupa tener instalada una vercion de postgres, en mi caso es la version 10, la cual yo recomiendo para este caso
en caso de no tener postgres instalado favor de seguir este tutorial.

http://postgresql-dbms.blogspot.com/p/descarga-e-instalacion-de-posgresql-en.html

una vez que ya esta instalado posgres lo que sigue es acondicionar nuestra base de datos es importante revisar el archivo

EasyCredit > back > config > config.json 

Este contiene los para metros de coneccion de postgres, si estos no coinciden con los de tu instalacion de postgres, el proyecto no funcionara
```json
{
    "development": {
        "username": "postgres",
        "password": null,
        "database": "easy_credit_development",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": "postgres",
        "password": null,
        "database": "easy_credit_test",
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "postgres",
        "password": null,
        "database": "easy_credit_production",
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
}

Ahora ejecuta el comando de sequelize el cual correra las migraciones de la base de datos

```console
$ sequelize db:create
$ sequelize db:migrata
```

por ultimo ejecuta el siguiente comando para levantar el servidor

```console
$ npm start
```
Y listo ya tenemos funcionando nuestro back-end

Para levanter el from el proseso es similar 
nos dirigmos a la raiz del front

EasyCredit > easycreditfront

y ejecutamos 

```console
npm install
```
y posteriormente

```console
$ npm start
```
listo ya tenemos nuestra aplicacion funcionado
