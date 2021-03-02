    let formularioEdicion = document.querySelector("form.editar");

    formularioEdicion.addEventListener("submit",function(e){
   
    let errores = [];
    
    let campoNombre = document.querySelector(".name");

    if (campoNombre.value == ""){
        errores.push("El campo de Nombre tiene que estar completo");
    } else if (campoNombre.value.length < 2){
        errores.push("El campo de Nombre debe tener al menos 2 caracteres");
    }

    let campoApellido = document.querySelector(".lastname");

    if (campoApellido.value == ""){
        errores.push("El campo de Apellido tiene que estar completo");
    } else if (campoApellido.value.length < 2){
        errores.push("El campo de Apellido debe tener al menos 2 caracteres");
    }

    let campoFecha = document.querySelector(".birthdate");

    if (campoFecha.value == ""){
        errores.push("El campo de Fecha de nacimiento tiene que estar completo");
    }
    
    if(errores.length > 0){
       e.preventDefault();
       let UlErrores = document.querySelector(".errores");
       for(let i = 0; i < errores.length; i++){

       UlErrores.innerHTML += "<ul>" + errores[i] + "</ul>"

       }
      
    }

 })

/*LÓGICA DE POP UP ELIMINAR USUARIO EN DESARROLLO*/
let eliminarUsuario = document.querySelector(".eliminar-usuario");

eliminarUsuario.addEventListener("click", (e) => {
    e.preventDefault();
    swal({
        title: "Eliminación de usuario",
        text: "Está seguro que desea eliminar el usuario?",
        icon: "warning",
        buttons: ["Cancelar","Sí"],
        dangerMode: true,
        closeOnClickOutside: false,
        closeOnEsc: false,
      })
      .then((seBorra) => {
        if (seBorra) {
              swal("Tu usuario fue eliminado!", {
            icon: "success",
          });
        } else {
          swal("Tu usuario NO fue eliminado!");
        }
      });
})