window.addEventListener("load", function() {
    let formulario = document.querySelector("form.login-credential");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let errores = [];

        let campoEmail = document.querySelector("input.email");

        let validarEmail = function(campoEmail.value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(campoEmail.value)){
                alert("La dirección de email " + campoEmail.value + " es correcta.");
               } else {
                errores.push("La dirección de email es incorrecta.");
               }
        }
        
        if (campoEmail.value == "") {
            errores.push("El campo de E-mail debe estar completo.")
        }

        let campoPassword = document.querySelector("input.password");


    })
})