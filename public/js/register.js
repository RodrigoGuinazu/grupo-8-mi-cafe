let formRegister = document.querySelector("form.register");
    formRegister.addEventListener("submit", function(e) {

		let errores = [];
		
		let campoNombre = document.querySelector("input.name");
		if (campoNombre.value == "") {
			errores.push("Debes ingresar tu nombre.");
		} else if (campoNombre.value.length < 2) {
			errores.push("Tu nombre debe tener al menos 2 caracteres");
		}
        let campoApellido = document.querySelector("input.lastname");
		if (campoApellido.value == "") {
			errores.push("Debes ingresar tu apellido.");
		} else if (campoApellido.value.length < 2) {
			errores.push("Tu apellido debe tener al menos 2 caracteres");
		}

        let campoEmail = document.querySelector("input.email");
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(campoEmail.value)) {
			errores.push("Debes ingresar un e-mail válido.");
        }

        let campoPassword = document.querySelector("input.password");
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!re.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 número y 1 caracter especial. EJ: 'Hola123!'");
        }
        let campoConfPassword = document.querySelector("input.confirmarPassword");
        if (campoConfPassword.value != campoPassword) {
            errores.push("Las contraseñas ingresadas deben coincidir.");
        }

		if (errores.length > 0) {
			e.preventDefault();

			let ulErrores = document.querySelector("div.errores ul")
			for( let i = 0; i < errores.lentgh; i++ ) {
				ulErrores.innerHTML += "<ul>" + errores[i] + "</ul>"
			}
		}
	});