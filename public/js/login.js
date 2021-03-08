window.addEventListener("load", function() {

    /*let formulario = document.querySelector("form.login-credential");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();*/

        const campoEmail = document.querySelector("input.email");
        const campoPassword = document.querySelector("input.password");
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const emailError = document.querySelector(".erroresEmail")
        const passwordError = document.querySelector(".erroresPassword")

       /* let validarEmail = function(campoEmail.value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(campoEmail.value)){
                alert("La dirección de email " + campoEmail.value + " es correcta.");
               } else {
                errores.push("La dirección de email es incorrecta.");
               }
        } */
        campoEmail.addEventListener ("onblur", function () {
            if (campoEmail.value == "") {
                emailError.innerHTML("El campo de E-mail debe estar completo.")
            } else (regexEmail.test(campoEmail.value) == false) {
                emailError.innerHTML("El campo debe tener formato de E-mail.")
            }
        })


    })