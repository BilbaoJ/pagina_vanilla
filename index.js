/**
 * Obtener los valores del formulario de registro
 */
function obtenerValoresFormulario() {
    let correo = document.getElementById("txtCorreo").value;
    let nombre = document.getElementById("txtNombre").value;
    let celular = document.getElementById("txtCelular").value;
    let clave = document.getElementById("txtClave").value;
    let direccion = document.getElementById("txtDireccion").value;

    if (correo == "") {
        document.getElementById("lblAlerta").style.display="";
        document.getElementById("lblAlerta").innerText="El correo es obligatorio";
        return;
    }
    
    // Forma de crear un objeto (clave-valor)

    // Inicializar un objeto con propiedades
    let usuario = { celular, "clave":clave };

    // Agregar propiedades a un JSON
    usuario.correo = correo;
    usuario.direccion = direccion;

    // Agregar propiedades con Bracket notation
    usuario["nombre"] = nombre;

    console.log(usuario);

    document.getElementById("txtNombre").value = "";
    document.getElementById("txtCelular").value = "";
    document.getElementById("txtCorreo").value = "";
    document.getElementById("txtClave").value = "";
    document.getElementById("txtDireccion").value = ""; 
};

function cargarPagina() {
    document.getElementById("lblAlerta").style.display="none";
}

cargarPagina();
//obtenerValoresFormulario();