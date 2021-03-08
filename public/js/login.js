window.addEventListener("load", function() {

    /*let formulario = document.querySelector("form.login-credential");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();*/
        
        const campoEmail = document.querySelector("input.email");
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const emailError = document.querySelector(".erroresEmail")

        /*DE ESTA MANERA ME EVITO HACER EL PREVENTDEFAULT YA QUE EL ERROR LO TIRA CUANDO SALGO DEL INPUT*/

        campoEmail.addEventListener ("blur", function () {
            if (campoEmail.value == "") {
                emailError.innerHTML = "El campo de E-mail debe estar completo."
            } else if (regexEmail.test(campoEmail.value) === false) {
                emailError.innerHTML = "El campo debe tener formato de E-mail."
            } else {
                emailError.innerHTML = ""
            }
        })

        const campoPassword = document.querySelector("input.password");
        const passwordError = document.querySelector(".erroresPassword");
        const viewPass = document.querySelector("#view-pass");

        viewPass.addEventListener("click", function() {
            if(campoPassword.getAttribute("type") == "password") {
                campoPassword.setAttribute("type", "text")
            } else {
                campoPassword.setAttribute("type", "password")
            }
        })



/*LÓGICA DE POP UP CONFIRMACION INICIO DE SESION*/

let confirmLogin = document.querySelector(".login-submit-button");

confirmLogin.addEventListener("click", (e) => {
    e.preventDefault();
    swal({
        title: "Inicio de Sesión",
        text: "¿Estás seguro que tus datos ingresados son correctos?",
        icon: "warning",
        buttons: ["Mejor reviso de nuevo","Sí, estoy seguro"],
        dangerMode: true,
        closeOnClickOutside: false,
        closeOnEsc: false,
      })
      .then((confirma) => {
        console.log(confirma);
        if (confirma) {
              swal("Iniciaste sesion con exito!", {
            icon: "success",
          })
        } else {
          swal("Volvé a intentarlo");
        }
      })
    })
})