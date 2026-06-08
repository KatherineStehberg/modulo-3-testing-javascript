# modulo-3-testing-javascript
Ejercicios prácticos de JavaScript aplicados al testing: validaciones, promesas, async/await y manejo de errores.

# Ejercicios Módulo 3 – Fundamentos de Programación Aplicados al Testing con JavaScript

Este repositorio contiene dos ejercicios prácticos del curso Test Automation Engineer, correspondientes al Módulo 3: Fundamentos de Programación Aplicados al Testing con JavaScript.

## Ejercicio 1: Validación de usuario

Se desarrolló una función llamada `validarUsuario`, que recibe un objeto con las propiedades:

- nombre
- edad
- correo

La función valida que:

- El nombre no esté vacío.
- La edad sea mayor o igual a 18.
- El correo contenga el símbolo `@`.

La función retorna un objeto con una propiedad `valido`, que puede ser `true` o `false`, y un mensaje explicativo.

## Ejercicio 2: Promesas y manejo de errores

Se desarrolló una función llamada `buscarUsuarioPorId(id)`, que simula la búsqueda de un usuario en una base de datos ficticia usando una promesa.

Si el usuario existe, la promesa se resuelve con los datos del usuario.  
Si el usuario no existe, la promesa se rechaza con un mensaje de error.

Luego se consume la promesa usando una función `async` llamada `mostrarUsuario`, utilizando `await` y `try/catch` para manejar errores.

## Tecnologías utilizadas

- JavaScript
- Node.js
- Git
- GitHub

## Cómo ejecutar los ejercicios

Desde la terminal, ejecutar:

```bash
node ejercicio1-validar-usuario.js
