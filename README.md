# Desafío BackEnd Dev Finaktiva

el reto estuvo desarrollado con node js, manejando funciones asincronas, manejo de jsonwebtoken para el inicio de sesion se trabajaron con middlewares y funciones reutilizabes para no repetir codigo, encriptacion para las cntraseñas y configuracion del eslint y prettier para el manejo de un buen codigo con practicas como error por variables declaradas si utilizar. Estos nos ayuda no dejar codigo suelto y no se vea codigo organizado. manejo de pruebas y configuraciones para el llamado de las variables de entorno, todo lo externo

Se debe clonar el repositorio e instalar las dependencias antes de correrlo de manera local.

#NPM INSTALL

Luego de ejecutar agregar las variables de entorno en el .env

Despues de lo anterior ejecutar el comando de npm para correr la api de
#npm run dev

# Ejecución de la API POSTMAN

URL= http://localhost:4000/api/usuario

##Peticion POST registros de usuarios:

URL=http://localhost:4000/api/usuario/register

Recibe
{
"password": "Operativo",
"name": "test",
"email": "test@test.com",
}

Esta solo recibe el TOKEN por el header para verificar que el usuario esta loguedo

##Peticion POST logueo de usuarios:

URL=http://localhost:4000/api/usuario/login

recibe

{
"email": "test@test.com",
"password": "tests"
}
retorna usuario y token
