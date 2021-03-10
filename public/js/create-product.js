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
        }


        let price = document.querySelector('input.price');
        if(price.value <= 0){
            errores.price = "El precio deber ser mayor a $0"
        }

        let image = document.querySelector('input.product-img');
        if(image.value == ""){
            errores.image = "Debes subir la imagen del Producto"
        }

        let description = document.querySelector('textarea.description');
        if(description.value == ""){
            errores.description = "La descripcion no puede estar vacia"
        }else if(description.value.length < 20){
            errores.description = "La descripcion debe tener al menos 20 caracteres"
        }

        if(errores.image != "" || errores.name != "" || errores.price != "" || errores.description != ""){ // En caso de que haya un error hace lo siguiente
            e.preventDefault();

            erroresName.innerHTML = "Debes ponerle un nombre al articulo"
            erroresName.innerHTML = "El titulo debe tener al menos 5 caracteres"

            erroresPrice.innerHTML = "El precio deber ser mayor a $0"

            erroresImg.innerHTML = "Debes subir la imagen del Producto"

            erroresDescription.innerHTML = "La descripcion no puede estar vacia"
            erroresDescription.innerHTML = "La descripcion debe tener al menos 20 caracteres"
        }else {
            formCreate.submit() // En el caso de que la condicion de arriba sea falsa (que no haya ningun error) permitimos el submit de formCreate
        }
    })
})