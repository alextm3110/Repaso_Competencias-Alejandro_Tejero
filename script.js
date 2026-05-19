function cambiarTexto() {
  document.getElementById("textoDOM").innerHTML =
    "Texto cambiado";
}

const boton = document.getElementById("botonEvento");
const mensaje = document.getElementById("mensajeEvento");

boton.addEventListener("click", function () {
  mensaje.innerHTML = "Has hecho clic";
});

function mostrarNombre() {
  let nombre = document.getElementById("nombre").value;

  document.getElementById("resultado").innerHTML =
    "Hola " + nombre;
}