let usuarios = [];
(localStorage.getItem("usuarios")) ? (usuarios = JSON.parse(localStorage.getItem("usuarios"))) : (localStorage.setItem("usuarios", JSON.stringify(usuarios)))
class Usuario{
    constructor(email, user, contraseña){
        this.email = email
        this.user = user
        this.contraseña = contraseña
    }
}
const formularioCrearCuenta = document.getElementById("formCrearCuenta")
const errorCrearCuenta = document.getElementById("errorCrearCuenta")
formularioCrearCuenta.addEventListener("submit", (e) =>{
    e.preventDefault()
    let datosNuevoUsuario = new FormData(e.target)
    if(datosNuevoUsuario.get("newUserEmail") == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No puedes crear una cuenta sin un Email!',
        })
    }else if(usuarios.some(usuario => usuario.email === datosNuevoUsuario.get("newUserEmail"))){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: `Parece que ya tienes una cuenta registrada con ${datosNuevoUsuario.get("newUserEmail")}`,
        })
    }else if(datosNuevoUsuario.get("newUserUsername") == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes crear un nombre de usuario!',
        })
    }else if(usuarios.some(usuario => usuario.user === datosNuevoUsuario.get("newUserUsername"))){
        Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'Ya hay una cuenta creada con ese usuario, prueba otro.',
        })
    }else if(datosNuevoUsuario.get("newUserPassword1") !== datosNuevoUsuario.get("newUserPassword2")){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Atento, las contraseñas no coinciden!',
        })
    }else if(datosNuevoUsuario.get("newUserPassword1") == "" || datosNuevoUsuario.get("newUserPassword2") == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes crear una contraseña!',
        })
    }else{
        let nuevoUsuario = new Usuario (datosNuevoUsuario.get("newUserEmail"), datosNuevoUsuario.get("newUserUsername"), datosNuevoUsuario.get("newUserPassword1"))
        // SPREAD
        let usuarioAAñadir = {
            ...nuevoUsuario
        }
        usuarios.push(usuarioAAñadir)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        formularioCrearCuenta.reset()
        // DESESTRUCTURACION Y ALIAS
        let {email:e, user:u} = nuevoUsuario
        Swal.fire({
            icon: 'success',
            title: '¡Excelente!',
            text: `${u}, ya tienes tu cuenta en nuestra web, ingresa al mail ${e} y verifica tu cuenta para ingresar!`,
        })
    }
})