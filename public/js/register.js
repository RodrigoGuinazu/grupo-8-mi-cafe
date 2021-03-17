	window.addEventListener("load", function (e) {
		let formRegister = document.querySelector("form.register");
		formRegister.addEventListener("submit", function(e) {

			let errores = {
				nombre: "",
				apellido: "",
				email: "",
				password: "",
				confirmarPassword: ""
			};

			let campoNombre = document.querySelector("input.name");
			console.log(campoNombre)
			if (campoNombre.value == "") {
				errores.nombre = "Debes ingresar tu nombre.";
			} else if (campoNombre.value.length < 2) {
				errores.nombre = "Tu nombre debe tener al menos 2 caracteres";
			}
			let campoApellido = document.querySelector("input.lastname");
			if (campoApellido.value == "") {
				errores.apellido = "Debes ingresar tu apellido.";
			} else if (campoApellido.value.length < 2) {
				errores.apellido = "Tu apellido debe tener al menos 2 caracteres";
			}

			let campoEmail = document.querySelector("input.email");
			const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!re.test(campoEmail.value)) {
				errores.email = "Debes ingresar un e-mail válido.";
			}

			let campoPassword = document.querySelector("input.password");
			const re2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
			if (!re2.test(campoPassword.value)) {
				errores.password = "La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 número y 1 caracter especial. Ej: 'Hola123!'";
			}
		
			let campoConfPassword = document.querySelector("input.confPassword");
			if (campoConfPassword.value != campoPassword.value) {
				errores.confPassword = "Las contraseñas ingresadas deben coincidir.";
			}
			if (campoConfPassword.value == "") {
				errores.confPassword = "Es necesario que confirmes tu contraseña.";
			}

			if (errores.nombre != "" || errores.apellido != "" || errores.email != "" || errores.password != "" || campoConfPassword.value != campoPassword.value) {
				e.preventDefault();

				let errorNombre = document.querySelector(".errNombre");
				errorNombre.innerHTML = errores.nombre;

				let errorApellido = document.querySelector(".errApellido");
				errorApellido.innerHTML = errores.apellido;

				let errorEmail = document.querySelector(".errEmail");
				errorEmail.innerHTML = errores.email;

				let errorPassword = document.querySelector(".errPassword");
				errorPassword.innerHTML = errores.password;
				
				let errorConfPassword = document.querySelector(".errConfPassword");
				errorConfPassword.innerHTML = errores.confPassword;
			} else {
				formRegister.submit();

				//Modal creación de usuario OK
				let createdUser = document.querySelector(".formulario");
				createdUser.addEventListener =  ("submit", (e) => {
					swal({
						title: "Felicitaciones!",
						text: "Creaste tu usuario Mí Café",
						icon: "success",
						buttons: ["OK"],
					})
				})
			}
		});
	})



	