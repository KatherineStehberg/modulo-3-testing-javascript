// Base de datos ficticia de usuarios
const usuarios = [
 {
   id: 1,
   nombre: "Katherine",
   correo: "katherine@gmail.com"
 },
 {
   id: 2,
   nombre: "Pedro",
   correo: "pedro@gmail.com"
 },
 {
   id: 3,
   nombre: "Ana",
   correo: "ana@gmail.com"
 }
];

// Función que busca un usuario por ID usando una promesa
function buscarUsuarioPorId(id) {
 return new Promise((resolve, reject) => {
   const usuarioEncontrado = usuarios.find(usuario => usuario.id === id);

   if (usuarioEncontrado) {
     resolve(usuarioEncontrado);
   } else {
     reject("Error: Usuario no encontrado.");
   }
 });
}

// Función async/await para mostrar el usuario
async function mostrarUsuario(id) {
 try {
   const usuario = await buscarUsuarioPorId(id);
   console.log("Usuario encontrado:", usuario);
 } catch (error) {
   console.log(error);
 }
}

// Pruebas
mostrarUsuario(1); // Existe
mostrarUsuario(2); // Existe
mostrarUsuario(5); // No existe