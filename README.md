# Instrucciones:
Crear una aplicación web que contenga 3 pantallas:

## 1. Login
*a. Debe contener un formulario para iniciar sesión, en esta pantalla no se consume ningún servicio, solamente validar que el usuario y clave sean admin.*
*b. Si el usuario y clave son correctas, se guardará en el LocalStorage una variable con el nombre token que contenga el texto Bearer.(token:”Bearer”).*

## 2. Posts
*a. Debe contener un listado de todos los posts que me devuelva el Api Rest indicado anteriormente (presentar el id del post para facilitar la distinción entre posts).*
*b. Cada post debe tener un botón de agregar a destacados.*
*c. Esta lista de destacados debe guardarse en el LocalStorage.*
*d. Solo se podrá ingresar en esta pantalla si se ha iniciado sesión con anterioridad.*

## 3. Post Destacados

*a. Pantalla donde se debe visualizar el listado de los posts destacados.*
*b. Cada post destacado debe tener un botón de eliminar, este botón eliminara el post de los posts destacados.*