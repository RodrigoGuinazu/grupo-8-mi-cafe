window.addEventListener("load", function() {

    /*let formulario = document.querySelector("form.login-credential");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();*/
        
        const campoEmail = document.querySelector("input.email");
        const listaErroresEmail = document.querySelector(".erroresEmail");
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        /*const emailError = document.querySelector(".erroresEmail")*/

        /*DE ESTA MANERA ME EVITO HACER EL PREVENTDEFAULT YA QUE EL ERROR LO TIRA CUANDO SALGO DEL INPUT*/

        campoEmail.addEventListener ("blur", function () {
            if (campoEmail.value == "") {
                listaErroresEmail.innerHTML = "El campo de E-mail debe estar completo."
            } else if (!regexEmail.test(campoEmail.value)) { // probar con match
                listaErroresEmail.innerHTML = "El campo debe tener formato de E-mail."
            } else {
                listaErroresEmail.innerHTML = ""
            }
        })

        const campoPassword = document.querySelector("input.password");
        const listaErroresPassword = document.querySelector(".erroresPassword");
        const viewPass = document.getElementById("view-pass");

        campoPassword.addEventListener ("blur", function () {
            if (campoPassword.value == "") {
                listaErroresPassword.innerHTML = "Debes ingresar una contraseña."
            }
        })

        viewPass.addEventListener("click", function(e) {
            // preventDefault para sacarle la funcion del submit al ojito. CONSULTAR
            e.preventDefault();

            if(campoPassword.getAttribute("type") == "password") {
                campoPassword.setAttribute("type", "text")
            } else {
                campoPassword.setAttribute("type", "password")
            }
        })
})