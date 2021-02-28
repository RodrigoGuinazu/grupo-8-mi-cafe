window.addEventListener("load", function(){
    let formularioEdicion = document.querySelector(".editar");

    formularioEdicion.addEventListener("submit",function(e){
   
    let errores = [];

    let campoNombre = document.querySelector("input.name");

    if (campoNombre.value == ""){
        errores.push("El campo de Nombre tiene que estar completo");
    } else if (campoNombre.value.length < 2){
        errores.push("El campo de Nombre debe tener al menos 2 caracteres");
    }

    let campoApellido = document.querySelector("input.lastname");

    if (campoApellido.value == ""){
        errores.push("El campo de Apellido tiene que estar completo");
    } else if (campoApellido.value.length < 2){
        errores.push("El campo de Apellido debe tener al menos 2 caracteres");
    }

    let campoFecha = document.querySelector("input.birthdate");

    if (campoFecha.value == ""){
        errores.push("El campo de Fecha de nacimiento tiene que estar completo");
    }
    
    if(errores.length > 0){
       e.preventDefault();

       let UlErrores = document.querySelector(".errores");
       for(let i = 0; i < errores.length; i++){

        UlErrores.innerHTML += "<li>" + errores[i] + "</li>"

       }
       
    }

 })
})


/*
let botonSubmit = document.querySelector(".confirmar-cambios");

botonSubmit.addEventListener("click", () => {
swal({
    title: "Cambios",
    text: "Desea confirmar los cambios?",
    icon: "success",
    button: "Sí!",
  });
})
*/