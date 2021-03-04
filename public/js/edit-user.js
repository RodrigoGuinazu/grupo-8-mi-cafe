    let formularioEdicion = document.querySelector("form.editar");

    formularioEdicion.addEventListener("submit",function(e){
   
    let errores = {
      nombre: "",
      apellido: "",
      fecha: "",
    }
        
    let campoNombre = document.querySelector(".name");

    if (campoNombre.value == ""){
        errores.nombre = "El campo de Nombre tiene que estar completo";
    } else if (campoNombre.value.length < 2){
        errores.nombre = "El campo de Nombre debe tener al menos 2 caracteres";
    }

    let campoApellido = document.querySelector(".lastname");

    if (campoApellido.value == ""){
        errores.apellido = "El campo de Apellido tiene que estar completo";
    } else if (campoApellido.value.length < 2){
        errores.apellido = "El campo de Apellido debe tener al menos 2 caracteres";
    }

    let campoFecha = document.querySelector(".birthdate");

    if (campoFecha.value == ""){
        errores.fecha = "El campo de Fecha de nacimiento tiene que estar completo";
    }
  
    if(errores.nombre != "" || errores.apellido != "" || errores.fecha != ""){
       e.preventDefault();
       
       let erroresNombre = document.querySelector(".erroresNombre");
       
       erroresNombre.innerHTML = errores.nombre;
       
       let erroresApellido = document.querySelector(".erroresApellido");
       
       erroresApellido.innerHTML = errores.apellido;

       let erroresFecha = document.querySelector(".erroresFecha");
       
       erroresFecha.innerHTML = errores.fecha
       
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
        console.log(seBorra);
        if (seBorra) {
              swal("Tu usuario fue eliminado!", {
            icon: "success",
          })
        } else {
          swal("Tu usuario NO fue eliminado!");
        }
      })
})
