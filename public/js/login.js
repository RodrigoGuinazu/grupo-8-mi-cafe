window.addEventListener("load", function() {

    /*let formulario = document.querySelector("form.login-credential");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();*/
        
        const campoEmail = document.querySelector("input.email");
        const listaErroresEmail = document.querySelector(".erroresEmail");
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        /*const emailError = document.querySelector(".erroresEmail")*/

        /*DE ESTA MANERA ME EVITO HACER EL PREVENTDEFAULT YA QUE EL ERROR LO TIRA CUANDO SALGO DEL INPUT*/

        campoEmail.addEventListener ("blur", function () {
            if (campoEmail.value == "") {
                listaErroresEmail.innerHTML = "El campo de E-mail debe estar completo."
            } else if (regexEmail.test(campoEmail.value) === false) {
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
})