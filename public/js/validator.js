//VALIDACIONES DE JS-FRONT

/*REGISTRO*/

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

/* LOGIN */

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

/*EDICIÓN de USUARIO*/
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


//LÓGICA DE POP UP ELIMINAR USUARIO EN DESARROLLO
let eliminarUsuario = document.querySelector("#eliminar");

eliminarUsuario.addEventListener("submit", (e) => {
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
        if (seBorra == true) {
          eliminarUsuario.submit();
          swal("Tu usuario fue eliminado!", {
          icon: "success",
          })
        } else {
          swal("Tu usuario NO fue eliminado!");
        }
      })
})

/*CREAR PRODUCTO*/
window.addEventListener('load', function() {

    let erroresName = document.getElementById("erroresName");
    let erroresPrice = document.getElementById("erroresPrice");
    let erroresImg = document.getElementById("erroresImg");
    let erroresDescription = document.getElementById("erroresDescription");

    // ERRORES CON BLUR //
    
    let name = document.querySelector('input.name');
    name.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(name.value == ""){
            erroresName.innerHTML = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            erroresName.innerHTML = "El titulo debe tener al menos 5 caracteres"
        }else {
            erroresName.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let price = document.querySelector('input.price');
    price.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(price.value <= 0){
            erroresPrice.innerHTML = "El precio deber ser mayor a $0"
        }else {
            erroresPrice.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let image = document.querySelector('input.product-img');
    image.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(image.value == ""){
            erroresImg.innerHTML = "Debes subir la imagen del Producto"
        }else {
            erroresImg.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let description = document.querySelector('textarea.description');
    description.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(description.value == ""){
            erroresDescription.innerHTML = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            erroresDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres"
        }else {
            erroresDescription.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    // ERRORES CUANDO EL ADMIN APRETA SUBMIT //

    let formCreate = document.querySelector('form.form-create')
    formCreate.addEventListener('submit', function(e){ // Todo este codigo funciona cuando el Admin apreta el boton submit

        let errores = {
            name: "",
            price: "",
            image: "",
            description: ""
        }

        let name = document.querySelector('input.name');
        if(name.value == ""){
            errores.name = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            errores.name = "El titulo debe tener al menos 5 caracteres"
        }else {
            errores.name = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }


        let price = document.querySelector('input.price');
        if(price.value <= 0){
            errores.price = "El precio deber ser mayor a $0"
        }else {
            errores.price = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        let image = document.querySelector('input.product-img');
        if(image.value == ""){
            errores.image = "Debes subir la imagen del Producto"
        }else {
            errores.image = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        let description = document.querySelector('textarea.description');
        if(description.value == ""){
            errores.description = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            errores.description = "La descripcion debe tener al menos 20 caracteres"
        }else {
            errores.description = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        if(errores.image != "" || errores.name != "" || errores.price != "" || errores.description != ""){ // En caso de que haya un error hace lo siguiente
            e.preventDefault();

            erroresName.innerHTML = errores.name

            erroresPrice.innerHTML = errores.price

            erroresImg.innerHTML = errores.image

            erroresDescription.innerHTML = errores.description
        }else {
            formCreate.submit() // En el caso de que la condicion de arriba sea falsa (que no haya ningun error) permitimos el submit de formCreate
        }
    })
})

/*EDICIÓN de PRODUCTO*/
window.addEventListener('load', function() {

    let erroresName = document.getElementById("erroresName");
    let erroresPrice = document.getElementById("erroresPrice");
    let erroresDescription = document.getElementById("erroresDescription");

    // ERRORES CON BLUR //
    
    let name = document.querySelector('input.name');
    name.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(name.value == ""){
            erroresName.innerHTML = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            erroresName.innerHTML = "El titulo debe tener al menos 5 caracteres"
        }else {
            erroresName.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let price = document.querySelector('input.price');
    price.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(price.value <= 0){
            erroresPrice.innerHTML = "El precio deber ser mayor a $0"
        }else {
            erroresPrice.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    let description = document.querySelector('textarea.description');
    description.addEventListener('blur', function(){ // Cuando el admin sale del input sin que se cumplan las condiciones
        if(description.value == ""){
            erroresDescription.innerHTML = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            erroresDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres"
        }else {
            erroresDescription.innerHTML = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }
    })

    // ERRORES CUANDO EL ADMIN APRETA SUBMIT //

    let formEdit = document.querySelector('form.edit-product')
    formEdit.addEventListener('submit', function(e){ // Todo este codigo funciona cuando el Admin apreta el boton submit

        let errores = {
            name: "",
            price: "",
            description: ""
        }

        let name = document.querySelector('input.name');
        if(name.value == ""){
            errores.name = "Debes ponerle un nombre al articulo"
        }else if(name.value.length < 5){
            errores.name = "El titulo debe tener al menos 5 caracteres"
        }else {
            errores.name = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }


        let price = document.querySelector('input.price');
        if(price.value <= 0){
            errores.price = "El precio deber ser mayor a $0"
        }else {
            errores.price = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        let description = document.querySelector('textarea.description');
        if(description.value == ""){
            errores.description = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            errores.description = "La descripcion debe tener al menos 20 caracteres"
        }else {
            errores.description = "" // En caso de que se cumplan las condiciones no mostramos ningun error
        }

        if(errores.name != "" || errores.price != "" || errores.description != ""){ // En caso de que haya un error hace lo siguiente
            e.preventDefault();

            erroresName.innerHTML = errores.name

            erroresPrice.innerHTML = errores.price

            erroresDescription.innerHTML = errores.description
        }else {
            formEdit.submit() // En el caso de que la condicion de arriba sea falsa (que no haya ningun error) permitimos el submit de formEdit
        }
    })

    // ELIMINAR PRODUCTO (SWEET ALERT) //

    let deleteProduct = document.querySelector('form.delete-product');

    deleteProduct.addEventListener('submit', (e) => {
        e.preventDefault(); 
        swal({
            title: "Eliminar Producto",
            text: "Está seguro que desea eliminar el producto?",
            icon: "warning",
            buttons: ["Cancelar","Sí"], // Siempre el de la izquierda es cancelar y el de la derecha OK
            dangerMode: true,
            closeOnClickOutside: true,
            closeOnEsc: false,
        })
        .then((productDelete) => {
            if(productDelete == true) {
                deleteProduct.submit();
            }
        })
    })
    
})