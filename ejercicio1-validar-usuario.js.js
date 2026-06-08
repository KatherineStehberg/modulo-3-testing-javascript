// Función para validar usuario
function validarUsuario(usuario) {
  // Validar que el nombre no esté vacío
  if (usuario.nombre === "") {
    return {
      valido: false,
      mensaje: "El nombre no puede estar vacío."
    };
  }

  // Validar que la edad sea mayor o igual a 18
  if (usuario.edad < 18) {
    return {
      valido: false,
      mensaje: "El usuario debe ser mayor o igual a 18 años."
    };
  }

  // Validar que el correo contenga @
  if (!usuario.correo.includes("@")) {
    return {
      valido: false,
      mensaje: "El correo debe contener el símbolo @."
    };
  }

  // Si pasa todas las validaciones
  return {
    valido: true,
    mensaje: "Usuario válido."
  };
}

// Pruebas con diferentes entradas
const usuario1 = {
  nombre: "Katherine",
  edad: 25,
  correo: "katherine@gmail.com"
};

const usuario2 = {
  nombre: "",
  edad: 30,
  correo: "usuario@gmail.com"
};

const usuario3 = {
  nombre: "Pedro",
  edad: 16,
  correo: "pedro@gmail.com"
};

const usuario4 = {
  nombre: "Ana",
  edad: 22,
  correo: "anagmail.com"
};

// Mostrar resultados en consola
console.log("Usuario 1:", validarUsuario(usuario1));
console.log("Usuario 2:", validarUsuario(usuario2));
console.log("Usuario 3:", validarUsuario(usuario3));
console.log("Usuario 4:", validarUsuario(usuario4));